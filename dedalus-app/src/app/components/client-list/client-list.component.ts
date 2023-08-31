import { Component } from '@angular/core';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent {
	constructor(private patientService: PatientService) {}

	ngOnInit(): void {
		this.patientService.getPatientList().subscribe(
			(response) => {
				console.log("respuesta correcta", response)
			},
			(error) => {
				console.error("error en la peticion")
			}
		)
		
	}
}
