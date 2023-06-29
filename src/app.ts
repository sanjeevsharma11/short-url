import fastify from 'fastify';

import dotenv from 'dotenv';
import { PORT } from './constants';
import plugins from './plugins';
import routes from './routes';

dotenv.config();

const server = fastify({
	logger: true,
});


plugins(server);

routes(server)


const start = async () => {
	try {
		await server.listen({
			port: PORT,
		});
	} catch (err) {
		console.error('Error starting server:', err);
		process.exit(1);
	}
};

start();
