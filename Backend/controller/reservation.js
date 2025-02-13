import ErrorHandler from "../error/error.js";
import {
    Reservation
} from "../models/reservationSchema.js"


export const sendReservation = async (req, res, next) => {

    const {
        firstName,
        lastName,
        email,
        phone,
        date,
        time
    } = req.body;
    if (!firstName || !lastName || !email || !phone || !date || !time) {
        return next(new ErrorHandler("Please fill all fields", 400))
    }
    try {
        await Reservation.create({
            firstName,
            lastName,
            email,
            phone,
            date,
            time,
        });
        res.status(200).json({
            success: true,
            message: "Reservation sent Successfully!"
        })
    } catch (error) {
        console.log(error);
        if (error.name === "ValidationError") {
            const ValidationErrors = object.values(error.errors).map(
                err => err.message
            )
            return next(new ErrorHandler(ValidationErrors.join(","), 400))
        }

    }
}