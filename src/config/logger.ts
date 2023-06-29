import pino from 'pino';
import dayjs from 'dayjs';


export const loggerConfig = {
	transport: {
		target: 'pino-pretty',
	},
	base: {
		pid: false,
	},
	timestamp: () => `,"time":"${dayjs().format('YYYY-MM-DD HH:mm:ss')}"`,
};

const logger = pino(loggerConfig);

export default logger;
