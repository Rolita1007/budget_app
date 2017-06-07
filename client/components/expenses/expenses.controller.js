ExpensesController.$inject = ['$http'];

function ExpensesController($http) {

    let vm = this;

    vm.expensesEntries = [
        {
            amount: 2000,
            note: Payday,
            createdAt: Date(),
            updatedAt: Date()
        },
        {
            amount: 456,
            note: 456,
            createdAt: 456,
        }
    ]

    /**
     *
     *  NEED TO READ ALL OF THE CREDIT ENTRIES FROM THE DB WHEN PAGE LOADS
     *
     */


    vm.addCredit = function () {

        // make an ajax call to save the new Credit to the database

        // only push to the creditEntries array if the ajax call is successful

        vm.creditEntries.push({
            amount: vm.newCreditAmount,
            note: vm.newCreditNote,
            createdAt: new Date()
        })

        resetForm();
    }

    function resetForm() {
        vm.newCreditAmount = '';
        vm.newCreditNote = '';
    }

}

module.exports = CreditsController;
