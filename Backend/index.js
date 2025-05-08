// import mysql from 'mysql2'
import {StatusCodes} from 'http-status-codes'
import express from 'express'
import {pool} from './src/models/DBDonar.js'
import DonorRouter from './src/routes/DonorRoutes.js'
import PatientsRouter from './src/routes/PatientRoutes.js'

const app=express()
const port=6200
app.use(express.json())
app.use('/donor',DonorRouter) 
app.use('/patient',PatientsRouter)

app.get('/',(req,res)=>{
    res.status(StatusCodes.OK).send({msg:"WelCome To LiveOn"})

})
app.listen(port,()=>{
    console.log("server Started");   
})
