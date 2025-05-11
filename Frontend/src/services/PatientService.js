import axios from "axios";

export function fetchAllPatients(organ){
// export function fetchAllPatients(){
    return axios.get(`http://localhost:6200/patient/${organ}`);
    // return axios.get(`http://localhost:6200/patient/Liver`);
}
export function fetchaAlldetails(id){
    return axios.get(`http://localhost:6200/patient/det/${id}`);
}

export function registerPatient(formData){
    return axios.post("http://localhost:6200/patient",formData);
}
export function deletePatient(id){
    return axios.delete(`http://localhost:6200/patient/${id}`);
}