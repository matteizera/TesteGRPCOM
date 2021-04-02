import { Request, Response } from 'express'
import api from '../services/api'


export default {
  find( request: Request, response: Response ) {
    const { date } = request.params
      api.get(`/?date=${date}`).then(({ data })=> {
        return response.json( data )
    }).catch( function ( error ) {
    return response.status( 404 ).json(error)
  })
  },
}