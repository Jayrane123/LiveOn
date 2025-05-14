import { BrowserRouter, Route, Routes } from "react-router-dom";
<<<<<<< HEAD
// import { NavigationBar } from "./components/NavigationBar";
import { PrivateRoute } from "./components/PrivateRoute";
=======
import { NavigationBar } from "./components/NavigationBar";
>>>>>>> e8cc21f7305d9dc7c3189402121d50740c1b36c2

import { ToastContainer } from "react-toastify";
import { Dashboard } from "./components/Dashboard";
import { DonorRegistrationForm } from "./components/DonorRegistration";
import { DonorList } from "./components/DonorList";
import { PatientList } from "./components/PatientList";
import { PatientRegistrationForm } from "./components/PatientRouter";
<<<<<<< HEAD
import { PatientEditForm } from "./components/EditPatient";

import Home from "./components/HomePage/Home";
import DonorRegistration from "./components/Donor_Signup/DonorRegistration";
import DonorLogin from "./components/LoginPage/DonorLogin";
import DonorHome from "./components/DonorHome/DonorHome";
import Donor_RegistrationForm from "./components/DonorHome/Donor_RegistrationForm";
import PatientLogin from "./components/PatientLogin/PatientLogin";
import PatientRegistration from "./components/Patient Signup/PatientRegistration";
=======
>>>>>>> e8cc21f7305d9dc7c3189402121d50740c1b36c2

function App() {
  return (
    <BrowserRouter>
<<<<<<< HEAD
      {/* <NavigationBar /> */}
      <Routes>
        <Route element={<PrivateRoute></PrivateRoute>}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/register-patient"
            element={<PatientRegistrationForm />}
          />
          <Route path="/register-donor" element={<DonorRegistrationForm />} />
          <Route path="/donor-list/:organ" element={<DonorList />} />
          <Route path="/patient-list/:organ" element={<PatientList />} />
          <Route path="/profile" element={<PatientList />} />
          <Route path="/edit-patient/:id" element={<PatientEditForm />} />

        </Route>

        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<DonorRegistration />}></Route>
        <Route path="/login" element={<DonorLogin />}></Route>
        <Route path="/donor/home" element={<DonorHome />}></Route>
        <Route
          path="/donor/registerationForm"
          element={<Donor_RegistrationForm />}
        ></Route>
        <Route path="/patientlogin" element={<PatientLogin />}></Route>
        <Route
          path="/patientRegister"
          element={<PatientRegistration />}
        ></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </BrowserRouter>
  );
}

export default App;
=======
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
>>>>>>> e8cc21f7305d9dc7c3189402121d50740c1b36c2
