import { Document, Types } from 'mongoose';

export type IDocumentId = Types.ObjectId | string;
export type IRefType =
	| 'Tip'
	| 'Basket'
	| 'Portfolio'
	| 'Offer'
	| 'Course'
	| 'Leg';
export type IUserType = 'expert' | 'investor' | 'system';

export interface IShortUrl extends Document {
	_id: IDocumentId;
	path: string;
	domain: string;
	shortUrl: string;
	visitCount: number;
	refId: IDocumentId;
	refType: IRefType;
	userType: IUserType;
	creatorId: IDocumentId;
	isDeleted: boolean;
	expertId: IDocumentId;
}
