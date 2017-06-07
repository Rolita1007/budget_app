ExpensesController.$inject = ['ExpensesServices'];

function ExpensesController(ExpensesServices) {

    let vm = this;

    vm.expensesEntries = [
        {
            amount: 800,
            note: Mortgage,
            createdAt: Date()
        },
        {
            amount: 35,
            note: Gas,
            createdAt: Date(),
        },
        {
            amount: 200,
            note: Sports,
            createdAt: Date()
        },
        {
            amount: 40,
            note: Pookie Bear Food,
            createdAt: Date()
        },
    ];

    /**
     *
     *  NEED TO READ ALL OF THE CREDIT ENTRIES FROM THE DB WHEN PAGE LOADS
     *
     */


    vm.addExpenses = function () {

        // make an ajax call to save the new Credit to the database

        // only push to the creditEntries array if the ajax call is successful

        vm.expensesEntries.push({
            amount: vm.newExpenseAmount,
            note: vm.newExpenseNote,
            createdAt: new Date(),
        })

        resetForm();
    }

    function resetForm() {
        vm.newExpenseAmount = '';
        vm.newExpenseNote = '';
    }

}

module.exports = ExpensesController;
