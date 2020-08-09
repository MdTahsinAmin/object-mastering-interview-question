const normalPerson ={
    firstName : "Rahim",
    lastName  : "Amin",
    salary    : 15000,
    getFullName : function(){
        console.log(this.firstName , this.lastName);
    },
    chargeBill : function(tips,amount){
        console.log(this);
        if(this.salary >= 5000){
            this.salary = this.salary + tips + (amount*0.5) - (this.salary)*0.15;
        }
        else this.salary = this.salary+tips-(amount*0.1);

        return this.salary;
    }
}

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
// 2  call => work normal argument pass korle hobe

//normalPerson.chargeBill.call(actorPerson,100,800);

//normalPerson.chargeBill.call(myselfPerson,400,700);

//console.log(actorPerson.salary);

//console.log(myselfPerson.salary);


// 3  apply work => parameter use koro tahole argument gulo array akate dite hobe

normalPerson.chargeBill.apply(myselfPerson,[456,780]);
normalPerson.chargeBill.apply(actorPerson,[178,560]);

console.log(myselfPerson.salary);

console.log(actorPerson.salary);
