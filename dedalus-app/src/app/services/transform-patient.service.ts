import { Injectable } from '@angular/core';
import { Entry, GetPatientList, Name, Resource } from '../model/services/patient';
import { CrlclientList } from '../model/componets/ctrlClientList';
import { HistoryClient } from '../model/page/CtrlclientDetail';
import { HistoryService } from '../model/services/historyService';

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
  

  patientToCtrlClientDetail(data: Resource): CrlclientList{
	let patient: CrlclientList = {id: 0,lastName: '',name: '',gender: '',birthDate: new Date()};
	
	// id
	patient.id = Number(data.id);

	// Name
	data.name.forEach(function(dataName: Name) {
		patient.name += (patient.name != "", " ", "" ) + dataName.family;
		if(dataName.given)
		dataName.given.forEach(function(dataLastName: string) {
			patient.lastName += (patient.name != "", " ", "" ) + dataLastName;
		});
	});
	
	// gender
	if(data.gender){
		patient.gender += data.gender;
	}else{
		patient.gender = "-"
	}
	// birthDate
	if(data.birthDate){
		patient.birthDate = new Date(data.birthDate);
	}else{
		patient.birthDate = null;
	}
	return patient;
  }
  

  patientToHistory(data: HistoryService): [HistoryClient]{
	let dataHistory: [HistoryClient] = [{source: '', lastUpdated: new Date, text: {text: '', status: '' }}];
	let history: HistoryClient = {source: '', lastUpdated: new Date, text: {text: '', status: '' }};
	for (let index = 0; index < data.entry.length; index++) {

		history.lastUpdated = (data.entry[index].resource.meta.lastUpdated ? data.entry[index].resource.meta.lastUpdated : new Date());
		history.source = (data.entry[index].resource.meta.source ? data.entry[index].resource.meta.source : "");
		history.text.status =  (data.entry[index].resource.text.status ? data.entry[index].resource.text.status : "");
		history.text.text = (data.entry[index].resource.text.div? data.entry[index].resource.text.div : "");

		if(index == 0){
			dataHistory = [history];
		}else{
			dataHistory.push(history);
		}
		history = {source: '', lastUpdated: new Date, text: {text: '', status: '' }};
	}
	return dataHistory;
  }
}
