import axios from "axios";
<<<<<<< HEAD
<<<<<<< HEAD
import { getToken } from "./tokenService";


export function fetchAllDonors(organ) {
    return axios.get(`http://localhost:6200/donor/${organ}`, {
        headers: { 'Authorization': `Bearer ${getToken()}` }
    });
}

export function fetchAllDetailsDonors(id) {
    return axios.get(`http://localhost:6200/donor/det/${id}`, {
        headers: { 'Authorization': `Bearer ${getToken()}` }
    });
}

export function registerDonor(formData) {
    return axios.post("http://localhost:6200/donor", formData, {
        headers: { 'Authorization': `Bearer ${getToken()}` }
    });
}

export function DeleteDonor(id) {
    return axios.delete(`http://localhost:6200/donor/${id}`, {
        headers: { 'Authorization': `Bearer ${getToken()}` }
    });
}

export function UpdateDonor(id, updatedData) {
    return axios.put(`http://localhost:6200/donor/${id}`, updatedData, {
        headers: { 'Authorization': `Bearer ${getToken()}` }
    });
}
=======
=======
import { getToken } from "./tokenService";
>>>>>>> f6dcd1ebad451797e2d815b20c0b3f76f6a6d2d3


export function fetchAllDonors(organ) {
    return axios.get(`http://localhost:6200/donor/${organ}`, {
        headers: { 'Authorization': `Bearer ${getToken()}` }
    });
}

export function fetchAllDetailsDonors(id) {
    return axios.get(`http://localhost:6200/donor/det/${id}`, {
        headers: { 'Authorization': `Bearer ${getToken()}` }
    });
}

export function registerDonor(formData) {
    return axios.post("http://localhost:6200/donor", formData, {
        headers: { 'Authorization': `Bearer ${getToken()}` }
    });
}

export function DeleteDonor(id) {
    return axios.delete(`http://localhost:6200/donor/${id}`, {
        headers: { 'Authorization': `Bearer ${getToken()}` }
    });
}

export function UpdateDonor(id, updatedData) {
    return axios.put(`http://localhost:6200/donor/${id}`, updatedData, {
        headers: { 'Authorization': `Bearer ${getToken()}` }
    });
}
<<<<<<< HEAD
export function UpdateDonor(id){
    return axios.put(`http://localhost:6200/donor/${id}`);
}
>>>>>>> e8cc21f7305d9dc7c3189402121d50740c1b36c2
=======
>>>>>>> f6dcd1ebad451797e2d815b20c0b3f76f6a6d2d3
