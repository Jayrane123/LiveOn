<<<<<<< HEAD
<<<<<<< HEAD
=======
// import { useEffect, useState } from "react";
// import { Alert, Button, Container, Table } from "react-bootstrap";

// import { fetchAllPatients,fetchaAlldetails } from "../services/PatientService";

// export function PatientList(){

//     const [patients, setPatients] = useState([]);

//     const getPatients = async ()=>{
//         try {
//             const response = await fetchAllPatients(); // service api call
//             setPatients(response.data);
//         } catch (error) {
//             console.log(error);
//         }
        
//     }
//     useEffect(()=>{
//         getPatients();
//     },[]);

//     return (
//         <Container className="mt-4">
//             <Alert variant="success">
//                 <h5>List of students</h5>
//             </Alert>
//             <Container className="mt-3">
//                 {
//                    patients.length > 0 ? <Table>
//                     <thead>
//                         <tr>
//                             <th>Id</th>
//                             <th>Name</th>
//                             <th>Phone</th>
//                             <th>Organ</th>
//                             <th>Urgenct</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {
//                            patients.map((s)=>{
//                                 return (
//                                     <tr>
//                                         <td>{s.patient_id}</td>
//                                         <td>{s.full_name}</td>
//                                         <td>{s.phone_number}</td>
//                                         <td>{s.organ_needed}</td>
//                                         <td>{s.urgency_level}</td>
//                                         <td>
//                                             <Button variant="primary" className="btn-sm">Edit</Button>
//                                             &nbsp;&nbsp;
//                                             <Button variant="danger" className="btn-sm">Delete</Button>
//                                         </td>
//                                     </tr>
//                                 )
//                            }) 
//                         }
//                     </tbody>
//                 </Table> : <h2>No record found !</h2>
//                 }
//                 <Modal show={dialogVisibility} onHide={closeDialog} centered>
//           <Modal.Header closeButton>
//             <Modal.Title>Confirmation</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             Are you sure you want to select Donor ID: {selectedDonorId}?
//           </Modal.Body>
//           <Modal.Footer>
//             <Button
//               variant="success"
//               className="btn-sm"
//               onClick={confirmSelection}
//             >
//               Yes
//             </Button>
//             <Button variant="danger" className="btn-sm" onClick={closeDialog}>
//               No
//             </Button>
//           </Modal.Footer>
//         </Modal>
//         <Modal show={detailVisibility} onHide={closeDetailModal} centered>
//   <Modal.Header closeButton>
//     <Modal.Title>Donor Details</Modal.Title>
//   </Modal.Header>
//   <Modal.Body>
//     {donorDetails ? (
//       <div>
//         <p><strong>Name:</strong> {donorDetails.full_name}</p>
//         <p><strong>Gender:</strong> {donorDetails.gender}</p>
//         <p><strong>DOB:</strong> {new Date(donorDetails.dob).toLocaleDateString()}</p>
//         <p><strong>Blood Group:</strong> {donorDetails.blood_group}</p>
//         <p><strong>Organ Needed:</strong> {donorDetails.organ_needed}</p>
//         <p><strong>Address:</strong> {donorDetails.address}</p>
//         <p><strong>Phone:</strong> {donorDetails.phone_number}</p>
//         <p><strong>Email:</strong> {donorDetails.email}</p>
//         <p><strong>Allergies:</strong> {donorDetails.allergies}</p>
//         <p><strong>Current Medications:</strong> {donorDetails.current_medications}</p>
//         <p><strong>Known Conditions:</strong> {donorDetails.known_conditions}</p>
//         <p><strong>ID Proof:</strong> {donorDetails.id_proof}</p>
//         <p><strong>Emergency Contact:</strong> {donorDetails.emergency_contact}</p>
//       </div>
//     ) : (
//       <p>Loading details...</p>
//     )}
//   </Modal.Body>
//   <Modal.Footer>
//     <Button variant="secondary" className="btn-sm" onClick={closeDetailModal}>
//       Close
//     </Button>
//   </Modal.Footer>
// </Modal>
//             </Container>
//         </Container>
//     )
// }

>>>>>>> e8cc21f7305d9dc7c3189402121d50740c1b36c2
=======
>>>>>>> f6dcd1ebad451797e2d815b20c0b3f76f6a6d2d3
import { useEffect, useState } from "react";
import { Alert, Button, Container, Modal, Table } from "react-bootstrap";
import { fetchAllPatients, fetchaAlldetails } from "../services/PatientService";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
<<<<<<< HEAD
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
import NavigationBar from "./Navbar/NavigationBar";
import Footer from "./Footer/Footer";
export function PatientList() {
  const navigate = useNavigate();

  const { organ } = useParams();
  const [patients, setPatients] = useState([]);
  //   const [selectedPatientId, setSelectedPatientId] = useState(null);
=======

=======
import { useNavigate } from "react-router-dom";
import NavigationBar from "./Navbar/NavigationBar";
import Footer from "./Footer/Footer";
>>>>>>> f6dcd1ebad451797e2d815b20c0b3f76f6a6d2d3
export function PatientList() {
  const navigate = useNavigate();

  const { organ } = useParams();
  const [patients, setPatients] = useState([]);
<<<<<<< HEAD
//   const [selectedPatientId, setSelectedPatientId] = useState(null);
>>>>>>> e8cc21f7305d9dc7c3189402121d50740c1b36c2
=======
  //   const [selectedPatientId, setSelectedPatientId] = useState(null);
>>>>>>> f6dcd1ebad451797e2d815b20c0b3f76f6a6d2d3
  const [detailVisibility, setDetailVisibility] = useState(false);
  const [patientDetails, setPatientDetails] = useState(null);

  useEffect(() => {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f6dcd1ebad451797e2d815b20c0b3f76f6a6d2d3
    const getPatients = async () => {
      try {
        console.log(organ);
        const response = await fetchAllPatients(organ); // service api call
        setPatients(response.data);
      } catch (error) {
        console.log(error);
        toast.error("Failed to fetch patients.");
      }
    };
<<<<<<< HEAD

    getPatients();
  }, [organ]);
=======
  const getPatients = async () => {
    try {
      const response = await fetchAllPatients(organ); // service api call
      setPatients(response.data);
    } catch (error) {
      console.log(error);
      toast.error("Failed to fetch patients.");
    }
  };

  getPatients();
}, [organ]);

>>>>>>> e8cc21f7305d9dc7c3189402121d50740c1b36c2
=======

    getPatients();
  }, [organ]);
>>>>>>> f6dcd1ebad451797e2d815b20c0b3f76f6a6d2d3

  const showDetails = async (patientId) => {
    try {
      const res = await fetchaAlldetails(patientId); // API call
      setPatientDetails(res.data);
      setDetailVisibility(true);
    } catch (error) {
      console.log("Error fetching details:", error);
      toast.error("Failed to fetch patient details.");
    }
  };
<<<<<<< HEAD
<<<<<<< HEAD
const editPatient = (patientId) => {
  navigate(`/edit-patient/${patientId}`);
};
=======

>>>>>>> e8cc21f7305d9dc7c3189402121d50740c1b36c2
=======
const editPatient = (patientId) => {
  navigate(`/edit-patient/${patientId}`);
};
>>>>>>> f6dcd1ebad451797e2d815b20c0b3f76f6a6d2d3
  const closeDetailModal = () => {
    setDetailVisibility(false);
    setPatientDetails(null);
  };

  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div>
      <NavigationBar />
=======
>>>>>>> e8cc21f7305d9dc7c3189402121d50740c1b36c2
=======
    <div>
      <NavigationBar />
>>>>>>> f6dcd1ebad451797e2d815b20c0b3f76f6a6d2d3
    <Container className="mt-4">
      <Alert variant="success">
        <h5>List of Patients</h5>
      </Alert>
      <Container className="mt-3">
        {patients.length > 0 ? (
          <Table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Organ Needed</th>
                <th>Urgency</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((s) => (
                <tr key={s.patient_id}>
                  <td>{s.patient_id}</td>
                  <td>{s.full_name}</td>
                  <td>{s.phone_number}</td>
                  <td>{s.organ_needed}</td>
                  <td>{s.urgency_level}</td>
                  <td>
                    <Button
                      variant="info"
                      className="btn-sm"
                      onClick={() => showDetails(s.patient_id)}
                    >
                      View
                    </Button>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f6dcd1ebad451797e2d815b20c0b3f76f6a6d2d3
                    &nbsp;
                    <Button
                      variant="warning"
                      className="btn-sm"
                      onClick={() => editPatient(s.patient_id)}
                    >
                      Edit
                    </Button>
<<<<<<< HEAD
=======
                    &nbsp;&nbsp;
>>>>>>> e8cc21f7305d9dc7c3189402121d50740c1b36c2
=======
>>>>>>> f6dcd1ebad451797e2d815b20c0b3f76f6a6d2d3
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <h2>No record found!</h2>
        )}

        {/* Details Modal */}
        <Modal show={detailVisibility} onHide={closeDetailModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>Patient Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {patientDetails ? (
              <div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f6dcd1ebad451797e2d815b20c0b3f76f6a6d2d3
                <p>
                  <strong>Name:</strong> {patientDetails.full_name}
                </p>
                <p>
                  <strong>Gender:</strong> {patientDetails.gender}
                </p>
                <p>
                  <strong>DOB:</strong>{" "}
                  {new Date(patientDetails.dob).toLocaleDateString()}
                </p>
                <p>
                  <strong>Blood Group:</strong> {patientDetails.blood_group}
                </p>
                <p>
                  <strong>Organ Needed:</strong> {patientDetails.organ_needed}
                </p>
                <p>
                  <strong>Urgency Level:</strong> {patientDetails.urgency_level}
                </p>
                <p>
                  <strong>Address:</strong> {patientDetails.address}
                </p>
                <p>
                  <strong>Phone:</strong> {patientDetails.phone_number}
                </p>
                <p>
                  <strong>Email:</strong> {patientDetails.email}
                </p>
                <p>
                  <strong>Allergies:</strong> {patientDetails.allergies}
                </p>
                <p>
                  <strong>Current Medications:</strong>{" "}
                  {patientDetails.current_medications}
                </p>
                <p>
                  <strong>Known Conditions:</strong>{" "}
                  {patientDetails.known_conditions}
                </p>
                <p>
                  <strong>ID Proof:</strong> {patientDetails.id_proof}
                </p>
                <p>
                  <strong>Emergency Contact:</strong>{" "}
                  {patientDetails.emergency_contact}
                </p>
<<<<<<< HEAD
=======
                <p><strong>Name:</strong> {patientDetails.full_name}</p>
                <p><strong>Gender:</strong> {patientDetails.gender}</p>
                <p><strong>DOB:</strong> {new Date(patientDetails.dob).toLocaleDateString()}</p>
                <p><strong>Blood Group:</strong> {patientDetails.blood_group}</p>
                <p><strong>Organ Needed:</strong> {patientDetails.organ_needed}</p>
                <p><strong>Urgency Level:</strong> {patientDetails.urgency_level}</p>
                <p><strong>Address:</strong> {patientDetails.address}</p>
                <p><strong>Phone:</strong> {patientDetails.phone_number}</p>
                <p><strong>Email:</strong> {patientDetails.email}</p>
                <p><strong>Allergies:</strong> {patientDetails.allergies}</p>
                <p><strong>Current Medications:</strong> {patientDetails.current_medications}</p>
                <p><strong>Known Conditions:</strong> {patientDetails.known_conditions}</p>
                <p><strong>ID Proof:</strong> {patientDetails.id_proof}</p>
                <p><strong>Emergency Contact:</strong> {patientDetails.emergency_contact}</p>
>>>>>>> e8cc21f7305d9dc7c3189402121d50740c1b36c2
=======
>>>>>>> f6dcd1ebad451797e2d815b20c0b3f76f6a6d2d3
              </div>
            ) : (
              <p>Loading details...</p>
            )}
          </Modal.Body>
          <Modal.Footer>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f6dcd1ebad451797e2d815b20c0b3f76f6a6d2d3
            <Button
              variant="secondary"
              className="btn-sm"
              onClick={closeDetailModal}
            >
<<<<<<< HEAD
=======
            <Button variant="secondary" className="btn-sm" onClick={closeDetailModal}>
>>>>>>> e8cc21f7305d9dc7c3189402121d50740c1b36c2
=======
>>>>>>> f6dcd1ebad451797e2d815b20c0b3f76f6a6d2d3
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </Container>
<<<<<<< HEAD
<<<<<<< HEAD
          <Footer />
    </div>
=======
>>>>>>> e8cc21f7305d9dc7c3189402121d50740c1b36c2
=======
          <Footer />
    </div>
>>>>>>> f6dcd1ebad451797e2d815b20c0b3f76f6a6d2d3
  );
}
