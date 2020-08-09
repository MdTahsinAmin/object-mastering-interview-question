// how use object method in another object 

// akta object ar method amr kibave onno arkta object use korte pari 


const normalPerson ={
    firstName : "Rahim",
    lastName  : "Amin",
    salary    : 15000,
    getFullName : function(){
        console.log(this.firstName , this.lastName);
    },
    chargeBill : function(tips){
        console.log(this);
        if(this.salary >= 5000){
            this.salary = this.salary - (this.salary)*0.15+tips;
        }
        return this.salary;
    }
}

// Three system 

const myselfPerson =  {
    firstName : "Md",
    lastName  : "Tahsin Amin",
    salary    :  10000
}
const actorPerson =  {
    firstName : "ABM",
    lastName  : "Shifar Emitiuz",
    salary    :  100000
}
 normalPerson.chargeBill();

// 1. bind  => return function
 const actorChargeBill = normalPerson.chargeBill.bind(actorPerson);

actorChargeBill(45);
console.log(actorPerson.salary);

const myselfChargeBill = normalPerson.chargeBill.bind(myselfPerson);

myselfChargeBill(45);

console.log(myselfPerson.salary);

