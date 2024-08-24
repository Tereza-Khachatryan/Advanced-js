//task 3.3

const date = {
    day: "08",
    month: 18,
    year:2024,
  
    toString(){
      return `${this.day}/${this.month}/${this.year}`
    },
  
    valueOf (){
      const date = new Date (this.year ,this.month , this.day)
      return date.getTime()
    }
  }
  
  console.log(Number(date))