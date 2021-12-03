const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AppointmentSchema = Schema({
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    disease: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Disease',
        required: true,
    },
    appointmentDate: {
        type: Date,
        required: true,
    },
    appointmentStatus: {
        type: String,
        enum: ["pending","open","rejected","cancelled","completed"],
        required: true,
    }
});

const Appointment = mongoose.model("Appointment",AppointmentSchema);
module.exports = Appointment;
