async function fetchData() {
  const response = await fetch('/fake-api/response.json')
  return response.json()
}
export { fetchData }
