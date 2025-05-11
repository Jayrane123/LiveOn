import express from 'express'
import { addPatient,deletePatient,updatePatient,showPatientBasic,showPatientprofile,showPatientAllDetails } from '../controllers/PatientController.js';
const PatientsRouter=express.Router();

PatientsRouter.get('/:organ_needed',showPatientBasic);
PatientsRouter.get('/profile/:patient_id',showPatientprofile);
PatientsRouter.get('/det/:patient_id',showPatientAllDetails);
PatientsRouter.post('/',addPatient);
PatientsRouter.delete('/:patient_id',deletePatient);
PatientsRouter.put('/:patient_id',updatePatient);


export default PatientsRouter;