import fastify from 'fastify';
import dotenv from 'dotenv';
import { PORT } from './constants';
import plugins from './plugins';
import routes from './routes';
import middlewares from './middlewares';
import connectDB from './config/connectDB';

dotenv.config();

const server = fastify({
	logger: true,
});

plugins(server);
middlewares(server);
routes(server);

const start = async () => {
	try {
		await server.listen({
			port: PORT,
		});

		await connectDB();
	} catch (err) {
		console.error('Error starting server:', err);
		process.exit(1);
	}
};

start();
