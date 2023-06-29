import type { FastifyInstance } from 'fastify';
import { APP_VERSION } from '../constants';

const routes = (server: FastifyInstance) => {
	server.get('/', async (request, reply) => {
		return reply.send({ app_version: APP_VERSION });
	});
};

export default routes;
