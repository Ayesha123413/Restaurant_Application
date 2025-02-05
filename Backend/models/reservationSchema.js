import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, "First name must contian atleast 3 characters!"],
        maxLength:[30,"First name cannot exceed 30 characters!"],
    },
   lastName: {
        type: String,
        required: true,
        minLength: [3, "Last name must contian atleast 3 characters!"],
        maxLength:[30,"Last name cannot exceed 30 characters!"],
    },
    email: {
        type: String,
        required: true,
        validate:[validator.isEmail,"Provide a valid Email!"]
    },
    phone: {
        type: String,
        required: true,
        minLength: [11, "Phone number must contian only 11 digits!"],
        maxLength:[11, "Phone number must contian only 11 digits!"],
    },
    time: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    }
})


export const Reservation=mongoose.model("Reservation",reservationSchema)