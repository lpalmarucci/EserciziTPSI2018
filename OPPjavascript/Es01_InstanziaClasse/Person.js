var Person = function (firstName) {
  console.log('instance created');
  this.firstName=firstName;
};

Person.prototype.sayHello=function(){
	console.log("Hello, i'm "+this.firstName);
}
/*var Person=function(){

}/*/

