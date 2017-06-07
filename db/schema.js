var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

var CreditSchema = new Schema ({
  amount: Number;
  note: String;
  createdAt: Date
});

var ExpensesSchema = new Schema ({
  amount: Number;
  note: String;
  createdAt: Date
});

CreditSchema.pre('save', function (next) {
  now = new Date();
  if (!this.createdAt) {
    this.createdAt = now;
  }
  next();
});


ExpensesSchema.pre('save', function (next) {
  now = new Date();
  if (!this.createdAt) {
    this.createdAt = now;
  }
  next();
});


var CreditModel = mongoose.model('Credit', CreditSchema);
var ExpenseModel = mongoose.model('Expense', ExpenseSchema);

module.exports = {
  Credit, CreditModel,
  Expense: ExpenseModel
};
