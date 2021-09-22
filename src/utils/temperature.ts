const formatTemperature = (temp: number | undefined):string => {
  const storageValue = localStorage.getItem('unit')
  if (!storageValue || !temp) return '0°'
  const unit = JSON.parse(storageValue)
  const tempFormated = unit === 'F' ? temp : (temp * 9/5) + 32
  return tempFormated.toFixed(0) + '°'
}

export default formatTemperature
