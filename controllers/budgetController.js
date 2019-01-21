
var Budget = require('../models/budget');
var async = require('async');

// Display list of all budgets
exports.budget_list = function (req, res, next) {

    Budget.find()
        .sort([['name', 'ascending']])
        .exec(function (err, list_budgets) {
            if (err) { return next(err); }
            // Successful, so render.
            res.render('budget_list', { title: 'Budget List', budget_list: list_budgets });
        })

};

// Display detail page for a specific Budget.
exports.budget_detail = function (req, res, next) {

    async.parallel({
        budget: function (callback) {
            Budget.findById(req.params.id)
                .exec(callback)
        },
    }, function (err, results) {
        if (err) { return next(err); } // Error in API usage.
        if (results.budget == null) { // No results.
            var err = new Error('Budget not found');
            err.status = 404;
            return next(err);
        }
        // Successful, so render.
        res.render('budget_detail', { title: 'Budget Detail', budget: results.budget });
    });

};

// Display budget form
exports.budget_form = function(req, res) {
    res.render('budget_form', { title: 'Create Budget' });
};

//Handle budget submit
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
            res.redirect(budget.url);
        });
    }
] 
