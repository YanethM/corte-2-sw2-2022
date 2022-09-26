const mongoose = require("mongoose");
const customer_schema = mongoose.Schema({
  user_name: {
    type: Object,
    require: true,
    first_name: { type: String, require: true },
    last_name: { type: String, require: true },
    full_name: { type: String, require: true },
    slug: { type: String, require: true, unique: true },
  },
  contact: {
    type: Object,
    require: true,
    ubication: {
      type: Object,
      require: true,
      city: { type: String, require: true },
      code_zip: { type: Number, require: true },
      address: { type: Array, require: true },
    },
  },
});
module.exports = mongoose.model("CustomerCollection", customer_schema);
