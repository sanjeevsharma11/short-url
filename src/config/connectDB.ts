import mongoose from 'mongoose';
import config from 'config';
import logger from './logger';
import chalk from 'chalk';

const connected = chalk.bold.cyan;
const error = chalk.bold.yellow;
const disconnected = chalk.bold.red;
const termination = chalk.bold.magenta;

const connectDB = async () => {
  const MONGO_URI = config.get<string>('MONGO_URI');

  mongoose.set('strictQuery', true);
  const mongoParams = {
    uri: MONGO_URI,
    options: {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      maxPoolSize: 10,
    },
  };

  mongoose.connect(mongoParams.uri, mongoParams.options);

  mongoose.connection.on('connected', function () {
    logger.info(connected(`Mongodb connection is open ${mongoParams.uri}`));
  });

  mongoose.connection.on('error', function (err) {
    logger.info(error(`Mongodb connection error ${err}`));
  });

  mongoose.connection.on('disconnected', function () {
    logger.info(disconnected('Mongodb connection is disconnected'));
  });

  process.on('SIGINT', function () {
    mongoose.connection.close(true);
     logger.info(
				termination(
					'Mongoose connection disconnected due to application termination',
				),
			);
    process.exit(0)
  });
};

export default connectDB;
