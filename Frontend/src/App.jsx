import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";

import { ToastContainer } from "react-toastify";
import { Dashboard } from "./components/Dashboard";
import { DonorRegistrationForm } from "./components/DonorRegistration";
import { DonorList } from "./components/DonorList";
import { PatientList } from "./components/PatientList";
import { PatientRegistrationForm } from "./components/PatientRouter";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/register-patient" element={<PatientRegistrationForm/>} />
        <Route path="/register-donor" element={<DonorRegistrationForm/>} />
        <Route path="/donor-list/:organ" element={<DonorList/>} />
        <Route path="/patient-list/:organ" element={<PatientList/>} />
        <Route path="/profile" element={<PatientList/>} />
      </Routes>
      <ToastContainer></ToastContainer>
    </BrowserRouter>

  )
}

export default App
