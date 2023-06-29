import dotenv from 'dotenv';

dotenv.config();

export default {
	PORT: process.env.PORT,
	NODE_ENV: process.env.NODE_ENV,
	MONGO_URI: process.env.MONGO_URI,
	APP_VERSION: process.env.APP_VERSION,
	ORIGINS: {
		DEV: process.env.DEV_ORIGINS,
		PROD: process.env.PROD_ORIGINS,
	},
};