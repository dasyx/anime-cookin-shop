const mongoose = require("mongoose");
const customerSchema = mongoose.Schema({
  lastname: {
    type: String,
    required: [true, "Inscrivez votre nom svp"],
  },
  firstname: {
    type: String,
    required: [true, "Inscrivez votre prénom svp"],
  },
  phone: {
    type: String,
    required: [true, "Inscrivez votre numéro de téléphone svp"],
  },
});
const orderSchema = new mongoose.Schema({
  clientId: {
    type: mongoose.Types.ObjectId,
    ref: "Client",
  },
  items: [String],
  total: Number,
});
const messageSchema = new mongoose.Schema({
  clientId: {
    type: mongoose.Types.ObjectId,
    ref: "Client",
  },
  message: String,
  date: Date,
});

const customer = mongoose.model("Client", customerSchema);
const order = mongoose.model("Commande", orderSchema);
const message = mongoose.model("Message", messageSchema);

module.exports = customer;
module.exports = order;
module.exports = message;