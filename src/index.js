import app from './app'

const { PORT = 4040 } = process.env
app.listen(PORT, () => console.log(`Listening on port ${PORT}`)) // eslint-disable-line no-console
