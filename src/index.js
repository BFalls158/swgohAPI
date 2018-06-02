import app from './app'
import models from './models'

models.sequelize.sync().then(function() {
  /**
   * Listen on provided port, on all network interfaces.
   */
  
  const { PORT = 4040 } = process.env
  app.listen(PORT, () => console.log(`Listening on port ${PORT}`)) // eslint-disable-line no-console
});
