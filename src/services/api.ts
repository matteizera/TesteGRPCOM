import axios from 'axios'
const api = axios.create({
  baseURL: 'https://epg-api.video.globo.com/programmes/1337',
})
export default api