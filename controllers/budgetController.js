
var Budget = require('../models/budget');
var async = require('async');


// Display list of all Budgets.
exports.budget_form = function(req, res) {
    res.render('budget_form', { title: 'Create Budget' });
};

exports.budget_create_post = [
    (req, res, next) => {

        var budget = new Budget(
            {
                name: req.body.name,
                income: req.body.income,
                expenses: req.body.expenses
            });
        budget.save(function (err) {
            if (err) { return next(err); }
            // Successful - redirect to new author record.
            res.send('success!');
        });
    }
] 
