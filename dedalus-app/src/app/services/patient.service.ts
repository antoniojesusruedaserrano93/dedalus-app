import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

	baseUrl = "http://hapi.fhir.org/baseR4/Patient"
	constructor(private http: HttpClient) {}
	
	getPatientList() {
		return this.http.get(`${this.baseUrl}`);
	}

	getPatientDetail(id: number) {
		return this.http.get(`${this.baseUrl}/${id}`);
	}
}
