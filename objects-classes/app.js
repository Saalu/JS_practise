
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

// Instantiation
const person = new Client('Saalu', 300)


console.log(person.clientInfo())

function Business(name, balance, phone, category){
    Client.call(this, name, balance);
    this.phone = phone;
    this.category = category;
}

// Inherit the prototype of Client
Business.prototype = Object.create(Client.prototype);
// Return the constructor as Business
Business.prototype.constructor = Business;

Business.prototype.businessInfo= function(){
    return `Name: ${this.name}, Balance: ${this.balance},
     Phone: ${this.phone}, Category: ${this.category}`;
}

const business = new Business('TechGarage', 2000000, 233456234565, 'Technology');


console.log(business);
console.log(business.businessInfo());


