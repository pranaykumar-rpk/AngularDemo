
export class Employees {
    id : number | undefined;
    firstName : String | undefined;
    lastName : String | undefined;
    email : String | undefined;
    mobile : String | undefined;
    salary : String | undefined;
    

    constructor(id : number,firstName :String ,lastName:String,email:String,mobile:String,salary:String){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.mobile = mobile;
        this.salary = salary;
    }

}