import { Component } from '@angular/core';
import { CrlclientList } from 'src/app/model/componets/ctrlClientList';
import { GetPatientList } from 'src/app/model/services/patient';
import { PatientService } from 'src/app/services/patient.service';
import { TransformPatientService } from 'src/app/services/transform-patient.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent {
	constructor(private patientService: PatientService, private transformPatientService: TransformPatientService) {}
	public dataClientList :[CrlclientList] = [{id: 0,lastName: '',name: '',gender: '',birthDate: new Date()}];
	// *ngFor="let client of response.entry"

	ngOnInit(): void {
		this.patientService.getPatientList().subscribe(
			(response) => {
				this.dataClientList = this.transformPatientService.patientToCtrlClientList(response as GetPatientList);
			},
			(error) => {
				console.error("error en la peticion")
			}
		)
		
	}
}
