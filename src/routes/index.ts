import type { FastifyInstance } from 'fastify';
import { APP_VERSION } from '../constants';

import { redirectUserToOriginalUrl } from '../controllers';

const routes = (server: FastifyInstance) => {
	server.get('/', async (request, reply) => {
		return reply.send({ app_version: APP_VERSION });
	});

	server.route({
		method: 'GET',
		url: '/:uniqueIdenfier',
		handler: redirectUserToOriginalUrl,
	});
};

export default routes;
