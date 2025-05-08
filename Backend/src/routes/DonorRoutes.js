import express from 'express'
import { AddDonor,deleteDonor,updateDonor,showDonorbasic } from '../controllers/DonorController.js';
const DonorRouter=express.Router();

DonorRouter.post('/',AddDonor);
DonorRouter.get('/',showDonorbasic);
DonorRouter.post('/:id',updateDonor);
DonorRouter.post('/:id',deleteDonor);

export default DonorRouter;