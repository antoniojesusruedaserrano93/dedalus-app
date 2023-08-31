import { Injectable } from '@angular/core';
import { Entry, GetPatientList, Name } from '../model/services/patient';
import { CrlclientList } from '../model/componets/ctrlClientList';

@Injectable({
  providedIn: 'root'
})
export class TransformPatientService {

  constructor() { }

  patientToCtrlClientList (data: GetPatientList):[CrlclientList] {
	let dataTransform: [CrlclientList] = [{id: 0,lastName: '',name: '',gender: '',birthDate: new Date()}];
	let patient: CrlclientList = {id: 0,lastName: '',name: '',gender: '',birthDate: new Date()};

	data.entry.forEach(function(item: Entry, index) {
		if(item.resource?.id){
			// id
			patient.id = Number(item.resource.id);

			// Name
			item.resource.name.forEach(function(dataName: Name) {
				patient.name += (patient.name != "", " ", "" ) + dataName.family;
				if(dataName.given)
				dataName.given.forEach(function(dataLastName: string) {
					patient.lastName += (patient.name != "", " ", "" ) + dataLastName;
				});
			});
			
			// gender
			if(item.resource.gender){
				patient.gender += item.resource.gender;
			}else{
				patient.gender = "-"
			}
			// birthDate
			if(item.resource.birthDate){
				patient.birthDate = new Date(item.resource.birthDate);
			}else{
				patient.birthDate = null;
			}
			if(index == 0){
				dataTransform = [patient];
			}else{
				dataTransform.push(patient);
			}
			patient = {id: 0,lastName: '',name: '',gender: '',birthDate: new Date()};
		}
	});

	return dataTransform;
  }
}
