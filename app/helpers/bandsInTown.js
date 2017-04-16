
import moment from 'moment'

const bandsInTown = `https://rest.bandsintown.com`
const artist = `torero`
const appId = `torerobandsite`

export const artistEvents = async () => {
  let response = await fetch(`${bandsInTown}/artists/${artist}/events?app_id=${appId}`)
  if (response.ok) {
    let events = await response.json()
    return events.map(({
        id, datetime, venue: { city, country, name }, url,
      }) => ({
        id, date: moment(datetime), city, country, venue: name, url,
      })
    )
  }
  return false
}
