
async function start() {
  const result = await fetch('https://api.weather.gov/points/39.7456,-97.0892')
  const json = await result.json()
  console.log(json)
}

start()
// .then(response => response.json())
// .then(json => console.log(json))
