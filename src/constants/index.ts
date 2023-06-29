import config from 'config';

export const PORT = config.get<number>('PORT');
export const NODE_ENV = config.get<string>('NODE_ENV');
export const MONGO_URI = config.get<string>('MONGO_URI');
export const APP_VERSION = config.get<string>('APP_VERSION');
export const PROD_ORIGINS = config.get<string>('ORIGINS.DEV');
export const DEV_ORIGINS = config.get<string>('ORIGINS.PROD');
export const IS_PROD = NODE_ENV === 'production';
