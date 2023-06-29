import { FastifyInstance } from 'fastify';
import { errorHandler } from './error.middleware';

const middlewares = (server: FastifyInstance) => {
	server.setErrorHandler(errorHandler);
};

export default middlewares;
