//task 3.4

const obj = {
    1: "item1",
    2: "item2",
    3: "item3",
  
    toString(){
      return `"1:${this[1]} 2:${this[2]} 3:${this[3]}"`
    }
  }
  
  console.log(String(obj))