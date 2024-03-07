class Person
{
  Id: number;
  Name: string;

  constructor(id?: number, name?: string)
  {
    //this.Id = id;
    //this.Name = name;
  }

  showInfo() : void
  {
    console.log(`id= ${this.Id}`)
    console.log(`name= ${this.Name}`)
  }
}

let personObj = new Person(1, "EE")
personObj.showInfo();