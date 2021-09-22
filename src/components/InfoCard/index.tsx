import { FaWind, FaLongArrowAltDown, FaTemperatureHigh } from 'react-icons/fa'
import { FiSunrise, FiSunset } from 'react-icons/fi'
import { MdVisibility } from 'react-icons/md'
import { WiRaindrop, WiHumidity } from 'react-icons/wi'

import { Container } from "./styles"

interface Props {
  type: 'sunrise' | 'sunset' | 'precipitation' | 'humidity' | 'wind' | 'pressure' | 'feelslike' | 'visibility'
  value: string
}

const typeInfo = {
  sunrise: { label: 'SUNRISE', icon:<FiSunrise size={44}/> },
  sunset: { label: 'SUNSET', icon:<FiSunset size={44}/> },
  precipitation: { label: 'PRECIPITATION', icon:<WiRaindrop className='r' size={80}/> },
  humidity: { label: 'HUMIDITY', icon:<WiHumidity className='r' size={60}/> },
  wind: { label: 'WIND', icon:<FaWind size={46}/> },
  pressure: { label: 'PRESSURE', icon:<><FaLongArrowAltDown className='l' size={40}/><FaLongArrowAltDown className='l' size={40}/><FaLongArrowAltDown className='l' size={40}/></> },
  feelslike: { label: 'FEELS LIKE', icon:<FaTemperatureHigh size={40}/> },
  visibility: { label: 'VISIBILITY', icon:<MdVisibility size={48}/> },
}

const InfoCard: React.FC<Props> = ({ type, value }) => {
  return(
    <Container>
      <span>{typeInfo[type].label}</span>
      <div>
        <span>{value}</span>
        <div className="icon">
          {typeInfo[type].icon}
        </div>
      </div>
    </Container>
  )
}

export default InfoCard
