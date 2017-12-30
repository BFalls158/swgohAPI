import { Router } from 'express'
import { swgoh } from 'swgoh'

const routes = Router()

// Get profile by username - takes the SWGOH username string as a parameter
routes.get('/profile/:username', (req, res) => {
  swgoh.profile(req.params.username)
    .then(response => {
      res.send(response)
    })
})

// Get collection by username - takes the SWGOH username string as a parameter
routes.get('/collection/:username', (req, res) => {
  swgoh.collection(req.params.username)
    .then(response => {
      res.send(response)
    })
})

// Get guild units using guild ID
routes.get('/units/', (req, res) => {
  swgoh.units(req.query.guildID)
    .then(response => {
      res.send(response)
    })
})

// Get mods for user by username
routes.get('/mods/:username', (req, res) => {
  swgoh.mods(req.params.username)
    .then(response => {
      res.send(response)
    })
})

routes.get('/guild/', (req, res) => {
  swgoh.guild(req.query.guildID)
    .then(response => {
      res.send(response)
    })
})

export default routes
