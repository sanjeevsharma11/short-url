import { Document } from 'mongoose';
import { IDocumentId } from './shorturl.interfaces';


export interface IShortURLAnalytics extends Document {
	shortURLId: IDocumentId;
	lastAccessed: Date;
	ipAddress: string;
	userAgent: string;
	referrer: string;
	location: string;
	deviceType: string;
	browser: string;
	operatingSystem: string;
}
