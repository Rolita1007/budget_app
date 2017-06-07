var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/budget_app');

var Credit = require('../models/credit');
var Expense = require('../models/expense');

mongoose.Promise = global.Promise;

Credit.remove({}, function (error) {
  console.log(error);
});

Expense.remove({}, function (error) {
  console.log(error);
});

var credits = [
{amount: 2000, note: "Payday"},
{amount: 100, note: "Birthday Gift"},
{amount: 500, note: "Lottery"},
{amount: 2000, note: "Payday"}
];

var expenses =[
{amount: 800, note: "Mortgage"},
{amount: 35, note: "Sas"},
{amount: 200, note: "Sports"},
{amount: 40, note: "Pookie Bear's food"}
];

