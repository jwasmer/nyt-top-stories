export const getData = async (url) => {
  return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw Error(response.statusText)
      }
  })
}