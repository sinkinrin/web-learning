console.log('控制台打印');
console.log('通过 let 定义的变量不会被提升到顶部，而是在定义的位置初始化。变量从块的开头一直处于“暂时死区”，直到声明为止：');
console.log('var来声明变量，let和const来声明变量，let和const的区别是let声明的变量可以修改，const声明的变量不可以修改，' +
    'const声明的变量必须初始化，不然会报错，const声明的变量不可以修改，但是可以修改对象的属性，因为对象的属性是引用类型，const只是保证引用地址不变，但是引用地址指向的对象的属性是可以修改的。' +
    'var和let的区别是var声明的变量可以提升，let声明的变量不可以提升，var声明的变量可以重复声明，let声明的变量不可以重复声明。');
console.log('const声明的对象不可以修改，但是可以修改对象的属性，因为对象的属性是引用类型，const只是保证引用地址不变，但是引用地址指向的对象的属性是可以修改的。');
let object={
    name: "John", age: 30, city: "New York",
    name111 : function() {
        return this.name;
    }
};
console.log("this is" + " " + object.name111());
console.log(object.name + "'s age is " + object.age);     // John's age is 30
console.log(object.name + "'s city is " + object.city);         // John's city is New York
object.age = 40;
object.city = "Chicago";
console.log(object.name + "'s age is " + object.age);     // John's age is 40
console.log(object.name + "'s city is " + object.city);// John's city is Chicago


