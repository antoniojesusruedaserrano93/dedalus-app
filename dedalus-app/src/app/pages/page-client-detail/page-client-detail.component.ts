import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrlclientDetail } from 'src/app/model/page/CtrlclientDetail';
import { HistoryService } from 'src/app/model/services/historyService';
import { GetPatientList, Resource } from 'src/app/model/services/patient';
import { PatientService } from 'src/app/services/patient.service';
import { TransformPatientService } from 'src/app/services/transform-patient.service';

@Component({
  selector: 'app-page-client-detail',
  templateUrl: './page-client-detail.component.html',
  styleUrls: ['./page-client-detail.component.css']
})

export class PageClientDetailComponent {
	constructor(private patientService: PatientService, private transformPatientService: TransformPatientService, private route: ActivatedRoute) {}

	public dataClientDetail: CrlclientDetail = {
		dataClient: {
			id: 0,
			lastName: '',
			name: '',
			gender: '',
			birthDate: null
		},
		history:[{source: "",lastUpdated: new Date,text: {text: "",status: "",} }]
	};
	ngOnInit(): void {
		this.route.paramMap.subscribe(params => {
		  	const id = Number(params.get('id'));
			this.patientService.getPatientDetail(id).subscribe(
				(response) => {
					this.dataClientDetail.dataClient = this.transformPatientService.patientToCtrlClientDetail(response as Resource);
				},
				(error) => {
					console.error("error en la peticion")
				}
			)

			this.patientService.getPatientHistory(id).subscribe(
				(response) => {
					this.dataClientDetail.history = this.transformPatientService.patientToHistory(response as HistoryService);
					console.log("response getPatientHistory", this.dataClientDetail.history)
				},
				(error) => {
					console.error("error en la peticion")
				}
			)
		});
	}
}
