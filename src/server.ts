import { Server } from 'http';
import mongoose from 'mongoose';
import app from './app';
import subscribeToEvents from './app/events';
import config from './config';
import { errorLogger, logger } from './shared/logger';
import { RedisClient } from './shared/redis';

process.on('uncaughtException', error => {
  errorLogger.error(error);
  process.exit(1);
});

let server: Server;

async function main() {
  try {
    await RedisClient.connect().then(() => {
      subscribeToEvents();
    });
    await mongoose.connect(config.database_url as string);
    logger.info(`🆗 Database are connected`);

    server = app.listen(config.port, () => {
      logger.info(`✅ App listening on port ${config.port}`);
    });
  } catch (error) {
    errorLogger.error(`❌ Failed to connect database: ${error}`);
  }

  process.on('unhandledRejection', error => {
    if (server) {
      server.close(() => {
        errorLogger.error(error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}
main();

process.on('SIGTERM', () => {
  logger.info('SIGTERM is received');
  if (server) {
    server.close();
  }
});
