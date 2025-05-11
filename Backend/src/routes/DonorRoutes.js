import express from 'express'
import { AddDonor,deleteDonor,updateDonor,showDonorbasic,showAllDonorDetails,showDonorProfile,deleteDonorById } from '../controllers/DonorController.js';
const DonorRouter=express.Router();

DonorRouter.post('/',AddDonor);
DonorRouter.get('/:organs_to_donate',showDonorbasic);
DonorRouter.get('/profile/:donor_id',showDonorProfile);
DonorRouter.get('/det/:donor_id',showAllDonorDetails);
DonorRouter.put('/:donor_id',updateDonor);
DonorRouter.delete('/donation/:donation_id',deleteDonor);
DonorRouter.delete('/:donor_id',deleteDonorById);

export default DonorRouter;