import { FastifyRequest, FastifyReply } from 'fastify';
import { IS_PROD } from '../constants';

const errorHandler = (
	error: Error,
	request: FastifyRequest,
	reply: FastifyReply,
) => {
	const statusCode = reply.statusCode === 200 ? 500 : reply.statusCode;

	// throw error;
	reply.code(statusCode);
	reply.send({
		message: error.message,
		stack: IS_PROD ? '🥞' : error.stack,
	});
};

export { errorHandler };
