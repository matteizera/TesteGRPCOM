const axios = require('axios')



const request = async () => 
await axios.get("https://epg-api.video.globo.com/programmes/1337/?date=2021-03-31")



const log = async() => {
  const {data:{programme:{entries}}} = await request()
  
  console.log(entries)
  
}

log()