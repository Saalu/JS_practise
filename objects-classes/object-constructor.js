

function Client(name, balance){
    this.name = name;
    this.balance = balance;
  
}

Client.prototype.membership = function(){
    let name; 

    if(this.balance > 1000){
        name = 'Gold';
    }else if (this.balance > 500){
        name = 'Platinum';
    }else{
        name = 'Normal';
    }
    return name;
}

Client.prototype.clientInfo = function(){
    return `Name: ${this.name}, Balance: ${this.balance},
    Membership Status: ${this.membership()}`;
}

Client.prototype.deposit = function(amount){
    return this.balance += amount
}

Client.prototype.withdraw = function(amount){
    return this.balance -= amount

}
Client.prototype.getBalance = function(){
    return this.balance 

}


// Instantiation...Object Constructor
const person = new Client('Saalu', 300)

console.log('==========Initial===========')
console.log(person.clientInfo())
console.log(person.getBalance())
console.log('==========After Deposit===========')
person.deposit(900);
console.log(person.getBalance())
console.log(person.clientInfo())
console.log('=========After Withdrawal============')
person.withdraw(500);
console.log(person.clientInfo())
console.log(person.getBalance())

