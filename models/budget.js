var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BudgetSchema = new Schema({
    name: {type: String, required: true},
    income: {type: Number, required: true},
    expenses: [{type: Number, required: true}],
});

// Virtual for this author instance URL.
BudgetSchema
.virtual('url')
.get(function () {
  return '/catalog/budget/'+this._id
});

// Export model.
module.exports = mongoose.model('Budget', BudgetSchema);
