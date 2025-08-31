import { model, models, Schema } from "mongoose";

const orderSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please provide your full name."],
  },
  email: {
    type: String,
    required: [true, "Please provide your email."],
  },
  phone: {
    type: String,
    default: "",
  },
  service: {
    type: String,
    required: [true, "Please select a service."],
    enum: [
      "Full Stack Development",
      "Frontend Development",
      "Backend Development",
      "E-commerce Solutions",
      "UI/UX Design",
      "Consulting",
      "Other",
    ],
  },
  description: {
    type: String,
    required: [true, "Please provide a message."],
  },
});


const Order = models.Order || model("Order", orderSchema);

export default Order;
