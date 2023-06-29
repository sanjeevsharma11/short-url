import type { FastifyInstance } from 'fastify';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import { IS_PROD, PROD_ORIGINS } from '../constants';

const plugins = (server: FastifyInstance) => {
	server.register(cors, {
		origin: IS_PROD ? PROD_ORIGINS : '*',
		credentials: true,
		methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
		preflightContinue: false,
		optionsSuccessStatus: 204,
		allowedHeaders: [
			'Origin',
			'X-Requested-With',
			'Content-Type',
			'Accept',
			'Authorization',
			'Access-Control-Allow-Headers',
		],
	});
	server.register(helmet);
};

export default plugins;
