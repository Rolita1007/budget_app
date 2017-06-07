CreditsController.$inject = ['CreditsService'];

function CreditsController(CreditsService) {

    let vm = this;

    vm.creditEntries = [
        {
            amount: 2000,
            note: 'Payday',
            createdAt: Date(),
        },
        {
            amount: 100,
            note: Birthday Gift,
            createdAt: Date(),
        },
        {
            amount: 500,
            note: Lottery,
            createdAt: Date()
        },
        {
            amount: 2000,
            note: Payday,
            createdAt: Date()
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
