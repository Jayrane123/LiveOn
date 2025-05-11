import axios from "axios";

export function fetchAllDonors(organ){
    return axios.get(`http://localhost:6200/donor/${organ}`);
}
export function fetchAllDetailsDonors(id){
    return axios.get(`http://localhost:6200/donor/det/${id}`);
}

export function registerDonor(formData){
    return axios.post("http://localhost:6200/donor",formData);
}
export function DeleteDonor(id){
    return axios.delete(`http://localhost:6200/donor/${id}`);
}
export function UpdateDonor(id){
    return axios.put(`http://localhost:6200/donor/${id}`);
}