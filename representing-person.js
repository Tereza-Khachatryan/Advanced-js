//task.3.1

const obj = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
  
  
   toString (){
    return `"Name:${this.firstName} ${this.lastName} ,Age:${this.age}"` 
    }
  }
  
  console.log(String(obj))