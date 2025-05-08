import { StatusCodes } from "http-status-codes";
import express from "express";
import mysql from "mysql2";
import { pool } from "../models/DBDonar.js";

export const AddDonor = (req, res) => {
  try {
    const data = req.body;
    const {
      donor_id,
      full_name,
      dob,
      gender,
      phone_number,
      email,
      address,
      id_proof,
      med_id,
      blood_group,
      height_cm,
      weight_kg,
      known_conditions,
      current_medications,
      allergies,
      smoking_or_alcohol,
      donation_id,
      organs_to_donate,
      donation_type,
      emergency_contact,
    } = req.body;

    const requiredFields = [
      "donor_id",
      "full_name",
      "dob",
      "gender",
      "phone_number",
      "email",
      "address",
      "id_proof",
      "med_id",
      "blood_group",
      "height_cm",
      "weight_kg",
      "known_conditions",
      "current_medications",
      "allergies",
      "smoking_or_alcohol",
      "donation_id",
      "organs_to_donate",
      "donation_type",
      "emergency_contact",
    ];

    // const missingFields = requiredFields.filter((field) => !req.body[field]);
    const missingFields = requiredFields.filter(
      (field) => req.body[field] === undefined || req.body[field] === null
    );
    

    if (missingFields.length > 0) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        msg: `Missing required fields: ${missingFields.join(", ")}`,
      });
    }

    const query1 = `insert into donors(full_name,dob,gender,phone_number,email,address,id_proof) values(?,?,?,?,?,?,?)`;
    const val1 = [
      data.full_name,
      data.dob,
      data.gender,
      data.phone_number,
      data.email,
      data.address,
      data.id_proof,
    ];

    const query2 = `insert into medical_info(donor_id, blood_group, height_cm, weight_kg, known_conditions, current_medications, allergies, smoking_or_alcohol) values(?,?,?,?,?,?,?,?)`;
    const val2 = [
      data.donor_id,
      data.blood_group,
      data.height_cm,
      data.weight_kg,
      data.known_conditions,
      data.current_medications,
      data.allergies,
      data.smoking_or_alcohol,
    ];
    const query3 = `insert into organ_donations(donor_id, organs_to_donate, donation_type, emergency_contact) values(?,?,?,?)`;
    const val3 = [
      data.donor_id,
      data.organs_to_donate,
      data.donation_type,
      data.emergency_contact,
    ];
    pool.execute(query1, val1, (err1, result1) => {
      if (err1) {
        console.log(err1);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ msg: "Error in donor insertion" });
      }

      pool.execute(query2, val2, (err2, result2) => {
        if (err2) {
          console.log(err2);
          return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ msg: "Error in medical info insertion" });
        }

        pool.execute(query3, val3, (err3, result3) => {
          if (err3) {
            console.log(err3);
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ msg: "Error in organ donation insertion" });
          }

          // ✅ All 3 queries successful
          return res.status(StatusCodes.OK).send({ msg: "Donor added successfully" });
        });
      });
    });
    // pool.execute(query1, val1, (err, result) => {
    //   if (err) {
    //     console.log(err);
    //     return res
    //       .status(StatusCodes.INTERNAL_SERVER_ERROR)
    //       .send({ msg: "Something went wrong" });
    //   } else {
    //     res.status(StatusCodes.OK).send({ msg: "Donor added successfully" });
    //   }
    // });
    // pool.execute(query2, val2, (err, result) => {
    //   if (err) {
    //     console.log(err);
    //     return res
    //       .status(StatusCodes.INTERNAL_SERVER_ERROR)
    //       .send({ msg: "Something went wrong" });
    //   } else {
    //     res.status(StatusCodes.OK).send({ msg: "Donor added successfully" });
    //   }
    // });
    // pool.execute(query3, val3, (err, result) => {
    //   if (err) {
    //     console.log(err);
    //     return res
    //       .status(StatusCodes.INTERNAL_SERVER_ERROR)
    //       .send({ msg: "Something went wrong" });
    //   } else {
    //     res.status(StatusCodes.OK).send({ msg: "Donor added successfully" });
    //   }
    // });
  } catch (error) {}
};

export const showDonorbasic = (req, res) => {
  try {
    const data = req.body;
    const qry = `select d.donor_id,d.full_name,d.phone_number, o.organs_to_donate from donors d join organ_donations o on o.donor_id=d.donor_id;`;
    pool.query(qry, (error, result) => {
      if (error) {
        console.log(error);
        return res
          .status(StatusCodes.INTERNAL_SERVER_ERROR)
          .send({ message: "Problem in fetching data" });
      } else {
        return res.status(StatusCodes.OK).send(result);
      }
    });
  } catch (error) {
    return  res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send({ message: "Something went wrong" });
  }
};

export const updateDonor = (req, res) => {
  try {
    const id = parseInt(req.params.donor_id);
    const data = req.body;

    const {
      full_name,
      dob,
      gender,
      phone_number,
      email,
      address,
      id_proof,
      blood_group,
      height_cm,
      weight_kg,
      known_conditions,
      current_medications,
      allergies,
      smoking_or_alcohol,
      organs_to_donate,
      donation_type,
      emergency_contact,
    } = data;

    const requiredFields = [
      "full_name",
      "dob",
      "gender",
      "phone_number",
      "email",
      "address",
      "id_proof",
      "blood_group",
      "height_cm",
      "weight_kg",
      "known_conditions",
      "current_medications",
      "allergies",
      "smoking_or_alcohol",
      "organs_to_donate",
      "donation_type",
      "emergency_contact",
    ];

    const missingFields = requiredFields.filter((field) => !data[field]);

    if (missingFields.length > 0) {
      res.status(StatusCodes.BAD_REQUEST).send({ msg: "Bad Request" });
    }
    const query1 = `
      UPDATE donors SET 
        full_name = ?, dob = ?, gender = ?, phone_number = ?, email = ?, address = ?, id_proof = ?
      WHERE donor_id = ?`;
    const val1 = [
      full_name,
      dob,
      gender,
      phone_number,
      email,
      address,
      id_proof,
      donor_id,
    ];
 
    const query2 = `
      UPDATE medical_info SET
        blood_group = ?, height_cm = ?, weight_kg = ?, known_conditions = ?, current_medications = ?, allergies = ?, smoking_or_alcohol = ?
      WHERE med_id = ? AND donor_id = ?`;
    const val2 = [
      blood_group,
      height_cm,
      weight_kg,
      known_conditions,
      current_medications,
      allergies,
      smoking_or_alcohol,
      med_id,
      donor_id,
    ];
    const query3 = `
      UPDATE organ_donations SET
        organs_to_donate = ?, donation_type = ?, emergency_contact = ?
      WHERE donation_id = ? AND donor_id = ?`;
    const val3 = [
      organs_to_donate,
      donation_type,
      emergency_contact,
      donation_id, //primary
      donor_id, //forei
    ];

    pool.execute(query1, val1, (err1, result1) => {
      if (err1) {
        console.error("Error updating donors:", err1);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
          msg: "Failed to update donor data",
          error: err1.message,
        });
      }

      pool.execute(query2, val2, (err2, result2) => {
        if (err2) {
          console.error("Error updating medical info:", err2);
          return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            msg: "Failed to update medical info",
            error: err2.message,
          });
        }

        pool.execute(query3, val3, (err3, result3) => {
          if (err3) {
            console.error("Error updating organ donation:", err3);
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
              msg: "Failed to update organ donation info",
              error: err3.message,
            });
          }

          return res.status(StatusCodes.OK).json({
            msg: "Donor updated successfully",
            result: result3,
          });
        });
      });
    });
  } catch (error) {
    response
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send({ message: "Something went wrong" });
  }
};

export const deleteDonor = (req, res) => {
    try {
  const id = parseInt(req.params.donation_id);
  const data = req.body;
  const deleteDonationQuery = `DELETE FROM organ_donations WHERE donation_id = ?`;
  const deleteDonorQuery = `DELETE FROM donors 
                            WHERE donor_id = (
                              SELECT donor_id FROM organ_donations WHERE donation_id = ?
                            )`;
    pool.execute(deleteDonationQuery, (error, result) => {
        if (error) {
          console.log(error);
          response
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .send({ message: "Problem in fetching data" });
        } else {
          response.status(StatusCodes.OK).send({ message: "Donor Deleted!" });
        }
      });
    } catch (error) {
      response
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .send({ message: "Something went wrong" });
    }
  }