import express from 'express'
<<<<<<< HEAD
<<<<<<< HEAD
import { verifyToken } from '../middlewares/VerifyTokens.js';
import { addPatient,deletePatient,updatePatient,showPatientBasic,showPatientprofile,showPatientAllDetails } from '../controllers/PatientController.js';
const PatientsRouter=express.Router();

PatientsRouter.get('/:organ_needed',verifyToken,showPatientBasic);
PatientsRouter.get('/profile/:patient_id',verifyToken,showPatientprofile);
PatientsRouter.get('/det/:patient_id',verifyToken,showPatientAllDetails);
PatientsRouter.post('/',verifyToken,addPatient);
PatientsRouter.delete('/:patient_id',verifyToken,deletePatient);
PatientsRouter.put('/:patient_id',verifyToken,updatePatient);
=======
import { addPatient,deletePatient,updatePatient,showPatientBasic,showPatientprofile,showPatientAllDetails } from '../controllers/PatientController.js';
const PatientsRouter=express.Router();

PatientsRouter.get('/:organ_needed',showPatientBasic);
PatientsRouter.get('/profile/:patient_id',showPatientprofile);
PatientsRouter.get('/det/:patient_id',showPatientAllDetails);
PatientsRouter.post('/',addPatient);
PatientsRouter.delete('/:patient_id',deletePatient);
PatientsRouter.put('/:patient_id',updatePatient);
>>>>>>> e8cc21f7305d9dc7c3189402121d50740c1b36c2
=======
import { verifyToken } from '../middlewares/VerifyTokens.js';
import { addPatient,deletePatient,updatePatient,showPatientBasic,showPatientprofile,showPatientAllDetails } from '../controllers/PatientController.js';
const PatientsRouter=express.Router();

PatientsRouter.get('/:organ_needed',verifyToken,showPatientBasic);
PatientsRouter.get('/profile/:patient_id',verifyToken,showPatientprofile);
PatientsRouter.get('/det/:patient_id',verifyToken,showPatientAllDetails);
PatientsRouter.post('/',verifyToken,addPatient);
PatientsRouter.delete('/:patient_id',verifyToken,deletePatient);
PatientsRouter.put('/:patient_id',verifyToken,updatePatient);
>>>>>>> f6dcd1ebad451797e2d815b20c0b3f76f6a6d2d3


export default PatientsRouter;