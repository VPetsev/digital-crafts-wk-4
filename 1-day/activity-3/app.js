// Create a BankAccount class with the following features

// Properties:

// - balance

//     - accountType

// Functions:

// deposit(amount)

// withdraw(amount)



// Create an instance of the BankAccount class and make sure that the user provides initial amount and accountType in order to create the BankAccount object.After that deposit $100 in the account.Next withdraw $50 from the account.Finally, print out the remaining balance of the account. 

// New Way
class BankAccount {
    constructor(balance = 0) {
        this.balance = balance
    }

    depositInAccount(depositAmount) {
        this.balance += depositAmount
        console.log("Deposited " + depositAmount + " dollars")
    }

    withdrawFromAccount(withdrawAmount) {
        this.balance -= withdrawAmount
        console.log("Withdrew " + withdrawAmount + " dollars")
    }
}

let accountOne = new BankAccount()
console.log(accountOne)

accountOne.depositInAccount(100)
accountOne.withdrawFromAccount(50)
console.log(accountOne)


// // Old way with prototypes
// function OldBankAccount(balance = 0) {
//     this.balance = balance
// }


// function deposit(depositAmount) {
//     this.balance += depositAmount
//     console.log("Deposited " + depositAmount + " dollars")
// }

// function withdraw(withdrawAmount) {
//     this.balance -= withdrawAmount`
//     console.log("Withdrew " + withdrawAmount + " dollars")
// }

// // Need to attach functions to the class if the functions are declared seperately
// OldBankAccount.prototype.deposit = deposit
// OldBankAccount.prototype.withdraw = withdraw

// // Method so you dont have to attach functions seperately

// oldBankAccount.prototype.deposit = function(depositAmount) {
//     this.balance += depositAmount
//     console.log("Deposited " + depositAmount + " dollars")
// }

// oldBankAccount.prototype.withdraw = function(withdrawAmount) {
//     this.balance -= withdrawAmount
//     console.log("Withdrew " + withdrawAmount + " dollars")
// }

// let oldAccount = new OldBankAccount()
// console.log(oldAccount)

// oldAccount.deposit(100)
// console.log(oldAccount)

// oldAccount.withdraw(50)
// console.log(oldAccount)


