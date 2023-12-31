var obj = {
    name:"object",
    weight:30,
    isObject:true,
    arr:[1,2,3],
    obj:{property:1}
};

console.log("For 구문으로 object property 반복하기");

var property_list = object.keys(obj);
console.log("Property List : ", property_list);

for(var i = 0; i < property_list.length; i++){
    var propertyName = property_list[i];
    console.log("\t", propertyName, ": ", obj[propertyName]);
}

console.log("\n\nFor in 구문으로 object property 반복하기");

for(var propertyName in obj){
    console.log("\t", propertyName, ": ", obj[propertyName]);
}

// for 구문 사용
// var property_list = Object.keys(obj);

// for( var i=0 ; i<property_list.length ; i++ ){
//     var propertyName = property_list[i];
//     console.log( "\t", propertyName, ": ", obj[propertyName] );
// }
// for in 구문 사용
// for( var propertyName in obj ){
//     console.log( "\t", propertyName, ": ", obj[propertyName] );
// }