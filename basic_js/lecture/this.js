function f(){
    console.log(this);
    console.log("F is called");
}

function setName(name){
    this.name=name;
}

var o={name:"object", method:f, setName:setName};
var o2={name:"", setName:setName};

f();
o.setName("object");
o2.setName("object2");

console.log(o, o2);