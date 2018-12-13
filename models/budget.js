var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BudgetSchema = new Schema({
    name: {type: String, required: true},
});

// Export model.
module.exports = mongoose.model('Budget', BudgetSchema);
