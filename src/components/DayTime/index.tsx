import weatherType from '../../constants/weather'
import { Container } from "./styles"

interface Props {
  first?: boolean
  time: String
  weather: 'Clouds' | 'Clear' | 'Rain' | 'Snow' | 'Extreme'
  temperature: String
}

const DayTime: React.FC<Props> = ({ first = false , time, weather, temperature }) => {
  return (
    <Container first={first}>
      <span>{time}</span>
      <div>
        {weatherType[weather]}
        <span>{temperature}</span>
      </div>
    </Container>
  )
}

export default DayTime
