    // // CLASS 
class User {
   constructor(name,year){
    this.name = year
    this.name = name
   }
   age() {return 2024 - this.year}
}

// EXTENDS 
class Students extends User{
    currentYear = 2024
    constructor(name,year,school,group){
        super(name,year)
        this.school = school
        this.group = group
    }
    info(){
        return this.name + ' ' + this.year + "da tug`ilgan"
    }
    set Mark(mark){
        this.mark = mark
    }
    get Mark(){return this.mark}
    get age() {
        this.#salom()
        return this.currentYear - this.year
    }
    // PRIVATE
    #salom() {console.log('dfghjkl');}
}

// GETTER va BETTER
let u = new Students('Sardor',1989,'IT park')
