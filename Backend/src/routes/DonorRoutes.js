import express from 'express'
<<<<<<< HEAD
<<<<<<< HEAD
import { verifyToken } from '../middlewares/VerifyTokens.js';
import { AddDonor,deleteDonor,updateDonor,showDonorbasic,showAllDonorDetails,showDonorProfile,deleteDonorById } from '../controllers/DonorController.js';
const DonorRouter=express.Router();

DonorRouter.post('/',verifyToken,AddDonor);
DonorRouter.get('/:organs_to_donate',verifyToken,showDonorbasic);
DonorRouter.get('/profile/:donor_id',verifyToken,showDonorProfile);
DonorRouter.get('/det/:donor_id',verifyToken,showAllDonorDetails);
DonorRouter.put('/:donor_id',verifyToken,updateDonor);
DonorRouter.delete('/donation/:donation_id',verifyToken,deleteDonor);
DonorRouter.delete('/:donor_id',verifyToken,deleteDonorById);
=======
import { AddDonor,deleteDonor,updateDonor,showDonorbasic,showAllDonorDetails,showDonorProfile,deleteDonorById } from '../controllers/DonorController.js';
const DonorRouter=express.Router();

DonorRouter.post('/',AddDonor);
DonorRouter.get('/:organs_to_donate',showDonorbasic);
DonorRouter.get('/profile/:donor_id',showDonorProfile);
DonorRouter.get('/det/:donor_id',showAllDonorDetails);
DonorRouter.put('/:donor_id',updateDonor);
DonorRouter.delete('/donation/:donation_id',deleteDonor);
DonorRouter.delete('/:donor_id',deleteDonorById);
>>>>>>> e8cc21f7305d9dc7c3189402121d50740c1b36c2
=======
import { verifyToken } from '../middlewares/VerifyTokens.js';
import { AddDonor,deleteDonor,updateDonor,showDonorbasic,showAllDonorDetails,showDonorProfile,deleteDonorById } from '../controllers/DonorController.js';
const DonorRouter=express.Router();

DonorRouter.post('/',verifyToken,AddDonor);
DonorRouter.get('/:organs_to_donate',verifyToken,showDonorbasic);
DonorRouter.get('/profile/:donor_id',verifyToken,showDonorProfile);
DonorRouter.get('/det/:donor_id',verifyToken,showAllDonorDetails);
DonorRouter.put('/:donor_id',verifyToken,updateDonor);
DonorRouter.delete('/donation/:donation_id',verifyToken,deleteDonor);
DonorRouter.delete('/:donor_id',verifyToken,deleteDonorById);
>>>>>>> f6dcd1ebad451797e2d815b20c0b3f76f6a6d2d3

export default DonorRouter;