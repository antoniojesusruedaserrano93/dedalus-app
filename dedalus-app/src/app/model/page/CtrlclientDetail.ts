import { CrlclientList } from "../componets/ctrlClientList";

export interface CrlclientDetail {
	dataClient: CrlclientList;
	history: [HistoryClient];
		
	
}

export interface HistoryClient {
	source:string;
	lastUpdated:Date;
	text: {
		text: string;
		status: string;
	} 
}