import { Router } from 'express'
import { swgoh } from 'swgoh'


const user = {
  username: 'Cath',
  password: process.env.PASSWORD
}

swgoh.login(user.username, user.password)
const routes = Router()

// Get profile by username - takes the SWGOH username string as a parameter
routes.get('/profile/:username', (req, res) => {
  swgoh.profile(req.params.username)
    .then((response) => {
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

// Get guild units using guild ID // /units/6906
routes.get('/units/:guildID', (req, res) => {
  swgoh.units(req.params.guildID)
    .then(response => {
      res.send(response)
    })
    .catch(error => {
      res.send(error)
    })
})

// Get mods for user by username // /mods/cath
routes.get('/mods/:username', (req, res) => {
  swgoh.mods(req.params.username)
    .then(response => {
      res.send(response)
    })
    .catch(error => {
      res.send(error)
    })
})
 // hard-coded to get list of guild members, using my username
routes.get('/guild/', (req, res) => {
  swgoh.profile('cath').then(p => {
    swgoh.guild(p.guildUrl)
      .then(response => {
        res.send(response)
      })
      .catch(error => {
        res.send(error)
      })
  })
})

routes.get('/ships/:userName', (req, res) => {
  swgoh.ship(req.params.userName)
    .then(response => {
      res.send(response)
    })
    .catch(error => {
      res.send(error)
    })
})

export default routes
