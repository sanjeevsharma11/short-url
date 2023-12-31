import ShortUrl from '../model/shorturl.model';
import ShortURLAnalytics from '../model/shorturl.analytics.model';
import { FastifyRequest, FastifyReply } from 'fastify';
import uaParser from 'ua-parser-js';
import { PROD_ORIGINS } from '../constants';

export const redirectUserToOriginalUrl = async (
	request: FastifyRequest<{
		Params: {
			expertusername: string;
			uniquehash: string;
		};
	}>,
	reply: FastifyReply,
) => {
	const { ip, headers } = request;
	const { expertusername, uniquehash } = request.params;

	const shortUrl = `${PROD_ORIGINS}/${expertusername}/${uniquehash}`;

	try {
		const shortUrlExits = await ShortUrl.findOne({
			shortUrl,
		});

		if (shortUrlExits) {
			const ua = uaParser(headers['user-agent']);
			const browser = `${ua.browser.name} ${ua.browser.version}`;
			const operatingSystem = `${ua.os.name} ${ua.os.version}`;

			const analyticsData = {
				shortURLId: shortUrlExits._id,
				lastAccessed: new Date(),
				ipAddress: ip,
				userAgent: headers['user-agent'],
				browser: browser,
				operatingSystem: operatingSystem,
			};

			await ShortURLAnalytics.create(analyticsData);

			await ShortUrl.updateOne(
				{ _id: shortUrlExits._id },
				{
					$set: {
						visitCount: shortUrlExits.visitCount + 1,
					},
				},
			);

			const originalUrl = `${shortUrlExits.domain}${shortUrlExits.path}`;

			return reply.status(301).redirect(originalUrl);
		} else {
			reply.code(404).send('Short URL not found');
		}
	} catch (error) {
		console.error('Error while redirecting:', error);
		reply.code(500).send('Internal Server Error');
	}
};
