export class UserAddRequest{
  AuthAccount = undefined;
  AuthType =  "Default";
  Contact = new Contact();
  Groups:Array<Groups> = [];
  Name:string = "";
  Person = new Person();
  Reference = "";
  Role:string = "";
  State = "Active";
}

export class Contact{
  Email:string =''
}


export class Groups{
  GroupUId:string ='';
  Name:string ='';
  Status:boolean = true;
}

export class Person{
  FirstName:string = '';
}
