//task3.5

const obj ={
    balance: 1000,
    interestRate:5,
  
    valueOf(){
      const balance = this.balance
      const interestRate = this.interestRate
      let res = balance * interestRate / 100
      return result =  balance + res 
  
    }
  }
  
  console.log(Number(obj))