import { Schema, Types, model } from 'mongoose';
import { IShortURLAnalytics } from '../interfaces/shorturl.analytics.interfaces';

const { ObjectId } = Types;

const ShortURLAnalyticsSchema = new Schema(
	{
		shortURLId: { type: ObjectId, ref: 'ShortUrl' },
		lastAccessed: { type: Date, default: Date.now },
		ipAddress: { type: String },
		userAgent: { type: String },
		referrer: { type: String },
		location: { type: String },
		deviceType: { type: String },
		browser: { type: String },
		operatingSystem: { type: String },
	},
	{
		timestamps: true,
	},
);

const ShortURLAnalytics = model<IShortURLAnalytics>(
	'ShortURLAnalytics',
	ShortURLAnalyticsSchema,
);

export default ShortURLAnalytics