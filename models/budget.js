var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BudgetSchema = new Schema({
    name: {type: String, required: true},
    income: {type: Number, required: true},
    expenses: [{type: Number, required: true}],
});

// Export model.
module.exports = mongoose.model('Budget', BudgetSchema);
