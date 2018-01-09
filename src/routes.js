import { Router } from 'express'
import { swgoh } from 'swgoh'

const routes = Router()

// Get profile by username - takes the SWGOH username string as a parameter
routes.get('/profile/:username', (req, res) => {
  swgoh.profile(req.params.username)
    .then(response => {
      res.send(response)
    })
    .catch(error => {
      res.send(error)
    })
})

// Get collection by username - takes the SWGOH username string as a parameter
routes.get('/collection/:username', (req, res) => {
  swgoh.collection(req.params.username)
    .then(response => {
      res.send(response)
    })
    .catch(error => {
      res.send(error)
    })
})

// Get guild units using guild ID
routes.get('/units/:guildID', (req, res) => {
  swgoh.units(req.params.guildID)
    .then(response => {
      res.send(response)
    })
    .catch(error => {
      res.send(error)
    })
})

// Get mods for user by username
routes.get('/mods/:username', (req, res) => {
  swgoh.mods(req.params.username)
    .then(response => {
      res.send(response)
    })
    .catch(error => {
      res.send(error)
    })
})

routes.get('/guild/', (req, res) => {
  swgoh.guild(req.query.guildID)
    .then(response => {
      res.send(response)
    })
    .catch(error => {
      res.send(error)
    })
})

export default routes
