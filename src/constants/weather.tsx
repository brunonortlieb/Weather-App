import { FiSun } from 'react-icons/fi'
import { IoIosSnow } from 'react-icons/io'
import { WiCloud, WiRain, WiLightning } from 'react-icons/wi'

const weatherType = {
  Clouds: <WiCloud size={42} />,
  Clear: <FiSun size={42} />,
  Rain: <WiRain size={42} />,
  Snow: <IoIosSnow size={42} />,
  Extreme: <WiLightning size={42} />
}

export default weatherType
