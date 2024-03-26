import mongoose, { Schema } from 'mongoose';

const contactSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    message: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { versionKey: false, timestamps: true }
);

// Initialize the model
// let Contact = (mongoose.models = {});

// // Check if the model is already defined
// Contact = mongoose.models['Contact'] || model('Contact', contactSchema);

let Contact: any;

if (mongoose.models.Contact) {
  Contact = mongoose.models.Contact;
} else {
  Contact = mongoose.model('Contact', contactSchema);
}

export default Contact;
