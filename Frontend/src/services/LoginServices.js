import axios from "axios";

export function registerAsDonor(values) {
  return axios.post("http://localhost:6200/home/donor", values);
}
export function registerAsPatient(data) {
  return axios.post(
        "http://localhost:6200/home/patientLogin",
        data
      );
}