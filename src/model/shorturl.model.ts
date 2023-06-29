import { Schema, Types, model } from 'mongoose';
import { IShortUrl } from '../interfaces/shorturl.interfaces';

const { ObjectId } = Types;

const refTypes = ['Tip', 'Basket', 'Portfolio', 'Offer', 'Course', 'Leg'];
const userTypes = ['expert', 'investor', 'system'];

const shortUrlSchema = new Schema(
	{
		path: {
			type: String,
			required: true,
		},
		domain: {
			type: String,
			required: true,
		},
		shortUrl: {
			type: String,
			required: true,
			unique: true,
		},
		visitCount: {
			type: Number,
			required: true,
			default: 0,
		},
		refId: {
			type: ObjectId,
		},
		refType: {
			type: String,
			enum: refTypes,
		},
		userType: {
			type: String,
			enum: userTypes,
			default: 'expert',
		},
		creatorId: {
			type: ObjectId,
		},
		isDeleted: {
			type: Boolean,
			required: true,
			default: false,
		},
		expertId: {
			type: ObjectId,
			required: true,
			ref: 'User',
		},
	},
	{
		timestamps: true,
	},
);

const ShortUrl = model<IShortUrl>('ShortUrl', shortUrlSchema);

export default ShortUrl;
