window.onload=function(){
	console.log("window.onlaod");
	//var person1=new Person();
	var person1 = new Person("Alice");
	var person2 = new Person("Paolo");
	console.log();
	console.log("person1 is "+person1.firstName);
	console.log("person1 is "+person2.firstName);
	console.log();

	person1.sayHello();
	person2.sayHello();

	//un'altro modo per richiamare il metodo
	//var helloFunction=person1.sayHello;
	//helloFunction.call(person1); "Hello, i'm Alice"
}