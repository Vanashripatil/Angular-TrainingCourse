var Person = /** @class */ (function () {
    function Person(id, name) {
        //this.Id = id;
        //this.Name = name;
    }
    Person.prototype.showInfo = function () {
        console.log("id= ".concat(this.Id));
        console.log("name= ".concat(this.Name));
    };
    return Person;
}());
var personObj = new Person(1, "EE");
personObj.showInfo();
