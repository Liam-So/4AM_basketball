import mongoose from 'mongoose';

// Stores every registration form submission. This is the source of truth --
// Google Sheets is a convenience mirror of this data, kept in sync on each
// submission. If the Sheets write ever fails, nothing is lost: it's still
// safe in here and can be re-synced later.
const registrationFormSchema = mongoose.Schema({
  campId: String, // the _id of the registration/camp product (girls or boys)
  campType: String, // "Girls" or "Boys"
  campName: String, // e.g. "Girls Camp"
  transactionId: String, // PayPal order id, links to the /transactions record

  athleteName: String,
  grade: String,
  school: String,
  team: String,
  email: String,
  emergencyContactName: String,
  emergencyContactPhone: String,
  tshirtSize: String,
  comments: String,

  // Waiver (clickwrap, collected as step 2 of checkout, appended here
  // rather than stored separately since it's the same submission).
  parentGuardianName: String,
  waiverDate: String,
  waiverAgreed: Boolean,

  // Set when payment was bypassed (free/sponsored athlete or a valid
  // special code), so it's easy to spot these in the sheet later.
  paymentMethod: String, // "Paid" | "Free - Name Match" | "Free - Special Code"

  submittedAt: { type: Date, default: Date.now },
});

export default mongoose.model('registrationForm', registrationFormSchema);
