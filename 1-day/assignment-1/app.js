// - Create a Palindrome app in Javascript which will print whether a string is a palindrome or not

console.log("######## PALINDROME APP ########")
function isPalindrome(str) {
    reverseStr = ""
    for (let i = str.length-1; i >= 0; i--) {
        console.log(i)
        reverseStr += str[i]
    }
    console.log(reverseStr)
    return reverseStr === str    
    
    // if (reverseStr === str) {
    //     return true
    // } else {
    //     return false
    // }
}

console.log(isPalindrome("dog"))
console.log(isPalindrome("radar"))
console.log(isPalindrome("apple"))

//     - Create an app which removes duplicates from an array

// Example: ["John", "Mary", "Alex", "Steve", "Mary", "John"]

// Result should be: ["John", "Mary", "Alex", "Steve"]

console.log("######## REMOVE DUPLICATES ########")
function removeDuplicates(array){
    newArr = []
    for (let i = 0; i < array.length; i++){
        if (newArr.includes(array[i])) {
            //pass
        } else {
            newArr.push(array[i])
        }
    }
    return newArr
}

console.log(removeDuplicates(["John", "Mary", "Alex", "Steve", "Mary", "John"]))
// ["John", "Mary", "Alex", "Steve"]



//     - Create an app whichs returns true / false depending on if the item is in the array
console.log("######## FIND IN ARRAY ########")
function findInArray(arr, item) {
    return arr.includes(item)
}

console.log(findInArray(["John", "Mary", "Alex", "Steve", "Mary", "John"], "apple"))

// - Create an app which finds the largest number in an array
// import max from Math

// arr1 = [1,2,9,3]
// console.log(arr1.max())
console.log("######## LARGEST NUMBER IN ARRAY ########")

function largestNumInArray(arr2){
    return(Math.max(...arr2))
}
console.log(largestNumInArray([1,2,3,4,892742,5,6,7]))

// - Create an app which finds the smalest number in an array
console.log("######## SMALLEST NUMBER IN ARRAY ########")
function smallestNumInArray(arr3){
    return(Math.min(...arr3))
}

console.log(smallestNumInArray([9,8,7,1,-1]))
//- Create FizzBuzz app
console.log("######## FIZZ BUZZ APP ########")
function fizzBuzz3and5(num){
    for (let i = 0; i <= num; i++){
        if ((i % 3) && (i % 5)){
            console.log('Fizz Buzz')
        } else if (i % 3) {
            console.log('Fizz')
        } else if (i % 5) {
            console.log('Buzz')
        } else {
            console.log(i)
        }
    }
}

fizzBuzz3and5(25)

//- Create an app which determines whether the number is even or odd. 
console.log("######## EVEN OR ODD? ########")
function evenOrOdd(num1){
    return (num1 % 2 == 0) // how to one line EVEN AND ODD
}

console.log(evenOrOdd(4))


// - Take the array[3, 4, 56, 7, 8, 1] and sort them in ascending and descending order. 
console.log("######## ARRAY SORTING ########")
function arraySorter(arr4){
    return arr4.sort((a, b) => a - b)
}


console.log(arraySorter([3, 4, 56, 7, 8, 1]))
// returns [ 1, 3, 4, 56, 7, 8 ] 
// sort converts to strings - and sorted in place ( A new array isn't made)

// So... need to use the optional compareFunction parameter
// sort(compareFunction(firstel, 2ndel))

// function arraySorter()



// -------------------------------------------------------

//     In this assignment you are going to test your knowledge of class composition.Your task is to create a class which represent a "Bank Account".The Bank Account will have the following properties.

// Bank Account:
// - First Name
//     - Last Name
//         - Middle Name
//             - Account Type
//                 - Balance
//                 - Status(Opened / Closed / Freeze)

// Here are the features that needs to be implement:
// - A user should be able to open a bank account provided they have the initial balance of $100
//     - User should be able to transfer money from one bank account to another
//         - A user should be able to withdraw money from the bank account
//             - The app should charge $ - 35 fees if the bank account is below $0

class BankAccount {
    constructor(firstName, lastName, middleName = "", balance = 0, accountType) {
        this.balance = balance
        this.firstName = firstName
        this.lastName = lastName
        this.middleName = middleName
        this.accountType = accountType
        if (this.balance >= 100) {
            this.accountStatus = "Open"
        } else {
            accountStatus = "Closed"
        }
    }

    depositInAccount(depositAmount){
        this.balance += depositAmount
        console.log("Deposited " + depositAmount + " dollars")
    }

    withdrawFromAccount(withdrawalAmount){
        this.balance -= withdrawalAmount
        console.log("Withdrew " + withdrawAmount + " dollars")
    }

    transferToAccount(transferAmount, targetAccount){
        this.balance -= transferAmount
        targetAccount += transferAmount
        console.log(`Transfered ${transferAmount} from ${this.accountType} with current balance of ${targetAccount.balance} \
        to ${targetAccount} with current balance of ${this.balance}`) 
    }

    accountStatusUpdater(status){
        this.status = status
    }

    overDrawPenalty(){
        if (this.balance < 0){
            balance -= 35
        }
    }
}
let myChecking = new BankAccount("Victor", "Petsev", "S", 100, "Checking")

console.log(myChecking)

let mySavings = new BankAccount("Victor", "Petsev", "S", 100, "Checking")

console.log(mySavings)
// can make a function to automatically aply overdraw penalty

console.log("######### Extra Activities #########")

console.log("######### Creating a Pyramid #########")


// function pyramidMaker(rows){
//     let row_num = 0
//     let str = ""
//     while (row_num < rows){
//         str += "*"
//         row_num++
//         console.log((str))
//     }
// }

    // Gives a pyramid from the left, not centered
function pyramidMaker(rows) {
    let row_num = 1
    for (row_num; row_num <= rows; row_num++){
        let str = ""
        for (let i = 0; i < rows - row_num; i++){
            str += " "
        }
        for (let star = 0; star < row_num; star++){
            str += "* " // needs a space
        }
        console.log((row_num + str))
    }
}



pyramidMaker(5)
