
class Person {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

    getCity() {
        return this.city;
    }

    setAge(newAge) {
        this.age = newAge;
    }

    setCity(newCity) {
        this.city = newCity;
    }
}
let person = new Person("John", 30, "New York");//let定义的对象不可修改，但对象的属性可以修改
console.log("This is " + person.getName());
console.log(person.getName() + "'s age is " + person.getAge());
console.log(person.getName() + "'s city is " + person.getCity());

person.setAge(40);
person.setCity("Chicago");
console.log(person.getName() + "'s age is " + person.getAge());
console.log(person.getName() + "'s city is " + person.getCity());


class StringOperations {
    constructor(str) {
        this.str = str;
    }

    toUpperCase() {
        return this.str.toUpperCase();
    }

    toLowerCase() {
        return this.str.toLowerCase();
    }

    getLength() {
        return this.str.length;
    }

    startsWith(substring) {
        return this.str.startsWith(substring);
    }

    endsWith(substring) {
        return this.str.endsWith(substring);
    }

    indexOf(substring) {
        return this.str.indexOf(substring);
    }

    replace(oldValue, newValue) {
        return this.str.replace(oldValue, newValue);
    }

    split(separator) {
        return this.str.split(separator);
    }

    trim() {
        return this.str.trim();
    }

    search(substring) {
        return this.str.search(substring);
    }
}

let str = "Hello, World!";
let stringOps = new StringOperations(str);

console.log(stringOps.toUpperCase()); // 大写
console.log(stringOps.toLowerCase()); // 小写
console.log(stringOps.getLength()); // 字符串的长度，Output: 13
console.log(stringOps.startsWith("Hello")); // 判断字符串是否以指定字符串开头，Output: true
console.log(stringOps.endsWith("World!")); // 判断字符串是否以指定字符串结尾，Output: true
console.log(stringOps.replace("World", "Universe")); // 替换字符串，Output: Hello, Universe!
console.log(stringOps.split(",")); // 分割字符串为数组，Output: ["Hello", " World!"]
console.log(stringOps.trim()); // 删除字符串两端的空格，Output: Hello, World!
console.log(stringOps.search("World")); // 查找字符串 search支持正则表达式
console.log(stringOps.indexOf("World")); // 字符串首次出现的位置，
console.log(str.match(/o/g)); // 查找所有的o，Output: ["o", "o"]， match支持正则表达式

template = `${stringOps.toLowerCase()}, ${person.getName()}!`;//模板字符串, 反引号,${}包裹变量
console.log(template); // Output: hello,world!, john!
var a=0.1+0.2;
console.log(a);

let number_methods = {
    toString: function () {//返回数字的字符串表示
        return this.value.toString();
    },
    toFixed: function (n) {//返回数字的字符串表示，保留n位小数
        return this.value.toFixed(n);
    },
    toPrecision: function (n) {//返回数字的字符串表示，保留n位有效数字
        return this.value.toPrecision(n);
    },
    valueOf: function () {  //返回数字的原始值
        return this.value;
    },
    toExponential: function (n) {//返回数字的字符串表示，使用指数计数法
        return this.value.toExponential(n);
    }
};
let number = 100;
let number_met = Object.create(number_methods);//object.create创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。new创建对象时，会调用构造函数，而Object.create不会调用构造函数
number_met.value = number;
console.log(number_met.toString());
console.log(number_met.toFixed(2));
console.log(number_met.toPrecision(2));
console.log(number_met.valueOf());
console.log(number_met.toExponential(2));
//2024-4-4
class ArrayOperations {
    constructor(array) {
        this.array = array;
    }

    getLength() {
        return this.array.length;
    }

    getElement(index) {
        return this.array[index];
    }

    setElement(index, value) {
        this.array[index] = value;
    }

    pushElement(value) {
        this.array.push(value);
    }

    popElement() {
        return this.array.pop();
    }

    shiftElement() {
        return this.array.shift();
    }

    unshiftElement(value) {
        this.array.unshift(value);
    }

    sliceArray(start, end) {
        return this.array.slice(start, end);
    }

    joinArray(separator) {
        return this.array.join(separator);
    }

    reverseArray() {
        return this.array.reverse();
    }

    sortArray() {
        return this.array.sort();
    }
    getmax(){
        return Math.max.apply(null,this.array);
    }
    Getmax(){
       var max=this.array[0];
         for(var i=1;i<this.array.length;i++){
              if(this.array[i]>max){
                max=this.array[i];
              }
         
        }
    return max;}
}

let arr = [1, 2, 3, 4, 5];
let arrayOps = new ArrayOperations(arr);

console.log(arrayOps.getLength()); // Output: 5
console.log(arrayOps.getElement(2)); // Output: 3

arrayOps.setElement(2, 10);
console.log(arrayOps.getElement(2)); // Output: 10

arrayOps.pushElement(6);
console.log(arrayOps.getLength()); // Output: 6

console.log(arrayOps.popElement()); // Output: 6
console.log(arrayOps.getLength()); // Output: 5

console.log(arrayOps.shiftElement()); // Output: 1
console.log(arrayOps.getLength()); // Output: 4

arrayOps.unshiftElement(0);
console.log(arrayOps.getLength()); // Output: 5

console.log(arrayOps.sliceArray(1, 4)); // Output: [2, 10, 4]
console.log(arrayOps.joinArray("-")); // Output: 0-2-10-4-5

console.log(arrayOps.reverseArray()); // Output: [5, 4, 10, 2, 0]
console.log(arrayOps.sortArray()); // Output: [0, 2, 4, 5, 10]
console.log(arrayOps.getmax());
console.log(arrayOps.Getmax());

class time{
    constructor(){
        this.date=new Date();
    }
    getYear(){
        return this.date.getFullYear();
    }
    getMonth(){
        return this.date.getMonth();
    }
    getDay(){
        return this.date.getDay();
    }
    getHours(){
        return this.date.getHours();
    }
    getMinutes(){
        return this.date.getMinutes();
    }
    getSeconds(){
        return this.date.getSeconds();
    }
    getMilliseconds(){
        return this.date.getMilliseconds();
    }
    getTime(){
        return this.date.getTime();
    }
    setDate(newDate){
        this.date=newDate;
    }
    setTime(newTime){
        this.date.setTime(newTime);
    }
}

class Math {
    static power(a, b) {
        return a ** b;
    }

    static squareRoot(a) {
        return Math.sqrt(a);
    }

    static absolute(a) {
        return Math.abs(a);
    }

    static round(a) {
        return Math.round(a);
    }

    static ceil(a) {
        return Math.ceil(a);
    }

    static floor(a) {
        return Math.floor(a);
    }

    static random() {
        return Math.random();
    }
}

switch (Math.floor(Math.random() * 5)) {
    case 0:
        console.log("0");
        break;
    case 1:
        console.log("1");
        break;
    case 2:
        console.log("2");
        break;
    case 3:
        console.log("3");
        break;
    case 4:
        console.log("4");
        break;
    default:
        console.log("default");
}
// For loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// While loop
let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}

// Do-while loop
let k = 0;
do {
    console.log(k);
    k++;
} while (k < 5);

// For-in loop (for iterating over object properties)
const obj = { a: 1, b: 2, c: 3 };
for (let prop in obj) {
    console.log(prop + ": " + obj[prop]);
}

// For-of loop (for iterating over iterable objects like arrays)
const arr2 = [1, 2, 3, 4, 5];
for (let element of arr) {
    console.log(element);
}
//正则表达式 ，太多，要用再找
try {
    // 供测试的代码块
}
catch(err) {
    // 处理错误的代码块
} 
finally {
    // 无论结果如何都执行的代码块
}
import copilot from './modules.js';//模块导入只适用于http协议，file协议不适用
for (let key in copilot) {
    console.log(key + ": " + copilot[key]);
}