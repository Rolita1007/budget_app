var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

var CreditSchema = new Schema ({
  amount: Number;
  note: String;
  createdAt: Date;
  updatedAt: Date
});

var ExpensesSchema = new Schema ({
  amount: Number;
  note: String;
  createdAt: Date;
  updatedAt: Date
});

CreditSchema.pre('save', function (next) {
  now = new Date();
  if (!this.createdAt) {
    this.createdAt = now;
  }
  next();
});

CreditSchema.pre('save', function (next) {
  now = new Date();
  if (!this.updatedAt) {
    this.updatedAt = now;
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

ExpensesSchema.pre('save', function (next) {
  now = new Date();
  if (!this.updatedAt) {
    this.updatedAt = now;
  }
  next();
});

var CreditModel = mongoose.model('Credit', CreditSchema);
var ExpenseModel = mongoose.model('Expense', ExpenseSchema);

module.exports = {
  Credit, CreditModel,
  Expense: ExpenseModel
};
