async function fetchCountries() {
  const response = await fetch('/fake-api/response.json')
  return response.json()
}
export { fetchCountries }
