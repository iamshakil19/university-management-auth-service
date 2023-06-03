import mongoose from 'mongoose'
import app from './app'
import config from './config'
import { errorLogger, logger } from './shared/logger'

async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info(`🆗 Database are connected`)

    app.listen(config.port, () => {
      logger.info(`University app listening on port ${config.port}`)
    })
  } catch (error) {
    errorLogger.error(`❌ Failed to connect database: ${error}`)
  }
}
main()
