import type {FormEvent} from 'react'
import React, { useEffect, useState } from "react"
import { MdLocationOn } from 'react-icons/md'
import { MdSearch } from 'react-icons/md'

import alert from '../../assets/png/alert.png'
import DayTime from "../../components/DayTime"
import InfoCard from "../../components/InfoCard"
import weatherType from '../../constants/weather';
import usePersistedState from "../../hooks/usePersistedState"
import formatTemperature from "../../utils/temperature"
import { formatTime, formatSimpleTime } from "../../utils/time"
import { Container, WeatherNow, WeatherDetails, Header, SearchBar, NotFound } from "./styles"



interface WeatherDataProps{
  name: String
  sys:{
    country: String
    sunrise: number
    sunset: number
  }
  main: {
    feels_like: number
    humidity: number
    pressure: number
    temp: number
    temp_max: number
    temp_min: number
  }
  clouds: {
    all: number
  }
  visibility: number
  wind:{
    speed: number
  }
  weather: {
    description: String
    icon: String
    main: 'Clouds' | 'Clear' | 'Rain' | 'Snow' | 'Extreme'
  }[]
}

interface HourlyDataProps{
  temp: number
  dt: number
  weather: [{
    main: 'Clouds' | 'Clear' | 'Rain' | 'Snow' | 'Extreme'
  }]

}

const Home :React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherDataProps>()
  const [hourlyData, setHourlyData] = useState<HourlyDataProps[]>([])
  const [unit, setUnit] = usePersistedState<String>('unit', 'C')
  const [error, setError] = useState(false)

  const fetchData = (value: string):void => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
      .then(response => response.json())
      .then(data => {
        if (data.cod === '404') {
          throw new Error("error");
        }
        setWeatherData(data)
        setError(false)
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&exclude=current,minutely,daily,alerts&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
        .then(response => response.json())
        .then(data => setHourlyData(data.hourly))
      }).catch(() => setError(true))
    }

  useEffect(() => {
    fetchData('dourados')
  }, [])

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    const {search} = event.target as typeof event.target & {
      search: { value: string }
    }

    fetchData(search.value)
  }

  return (
    <>
      <Header units={unit}>
        <div>
          <SearchBar>
            <form onSubmit={event => {handleSubmit(event)}}>
              <div>
                <input
                  type="text"
                  id='search'
                  placeholder='E.g. Warsaw'
                />
                <button type='submit'>
                  <MdSearch size={24} />
                </button>
              </div>
            </form>
            <div className='underline'/>
          </SearchBar>
          <button onClick={() => setUnit(unit === 'C' ? 'F' : 'C')}>
            <span className='C'>C</span>
            <div/>
            <span className='F'>F</span>
          </button>
        </div>
      </Header>
      {!error ?
        <Container>
          <div className='content'>
            <WeatherNow>
              <div>
                <div>
                  <span className='date-week'>Today</span>
                  <span className='date'>Wed, 17 Feb</span>
                </div>
                {weatherType[weatherData?.weather[0].main || 'Clear']}
              </div>
              <span className='temperature'>{formatTemperature(weatherData?.main.temp)}</span>
              <div>
                <MdLocationOn className='pin'/>
                <span className='location'>{weatherData?.name}, {weatherData?.sys.country}</span>
              </div>
            </WeatherNow>
            <div>
              <DayTime first time='Now' temperature={formatTemperature(weatherData?.main.temp)} weather={weatherData?.weather[0].main || 'Clear'}/>
              {hourlyData.slice(1,8).map(el => {
                if (Date.now()/1000 < el.dt) {
                  return <DayTime time={formatSimpleTime(el.dt)} temperature={formatTemperature(el.temp)} weather={el.weather[0].main}/>
                }
              })}
            </div>
          </div>
          <div className='divider'/>
          <WeatherDetails>
            <span>Weather Details</span>
            <div>
              <InfoCard type='sunrise' value={formatTime(weatherData?.sys.sunrise)}/>
              <InfoCard type='sunset' value={formatTime(weatherData?.sys.sunset)}/>
              <InfoCard type='precipitation' value={`${weatherData?.clouds.all}%`}/>
              <InfoCard type='humidity' value={`${weatherData?.main.humidity}%`}/>
            </div>
            <div>
              <InfoCard type='wind' value={`${weatherData?.wind.speed.toFixed(0)} km/h`}/>
              <InfoCard type='pressure' value={`${weatherData?.main.pressure} hPa`}/>
              <InfoCard type='feelslike' value={formatTemperature(weatherData?.main.feels_like)}/>
              <InfoCard type='visibility' value={`${weatherData?.visibility ? weatherData?.visibility / 1000 : 0} km`}/>
            </div>
          </WeatherDetails>
        </Container> :
        <NotFound>
          <img src={alert} alt="not found" />
          <span className="notfound">City not found</span>
          <span>Did you make a typo?</span>
        </NotFound>
      }
    </>
  )
}

export default Home
