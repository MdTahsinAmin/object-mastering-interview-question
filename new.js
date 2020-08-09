class Person {
    constructor(firstName , lastName ,salary) {
            this.firstName = firstName;
            this.lastName  = lastName;
            this.salary    =  salary;
    }
}
// new keyword uses (class convert to object);
// same type ar onke gulo object dorkar tader akta template / patten / formal =  class => object (banbo)  
const heroPerson = new Person("Md","Tahsin","18000");

console.log(heroPerson);

const actorPerson = new Person("ABM","Shifar Emitiuz", 100000);

// use function for declear object

function OldObject(firsName,lastName,salary){
    this.firsName = firsName;
    this.lastName = lastName;
    this.salary = salary;
}

const oldObject = new OldObject("Grand","Papa","15000");

console.log(oldObject);