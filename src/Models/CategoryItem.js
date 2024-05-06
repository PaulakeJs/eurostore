const mongoose = require("mongoose");
const ItemSchema = new mongoose.Schema({
  categoryName: String,
  itemName: String,
  itemDescription: String,
  tags: String,
  imageUrl: String,
});

const Item = mongoose.model("Category-Items", ItemSchema);

module.exports = Item;
