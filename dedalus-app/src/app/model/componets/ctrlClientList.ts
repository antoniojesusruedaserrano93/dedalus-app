export interface CrlclientList {
	id: number;
	lastName: string;
	name: string;
	gender: string;
	birthDate: Date | null;
	text?:{
		div: string;
		status: string
	}
}