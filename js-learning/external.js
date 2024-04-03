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
}

let str = "Hello, World!";
let stringOps = new StringOperations(str);

console.log(stringOps.toUpperCase()); // 大写
console.log(stringOps.toLowerCase()); // 小写
console.log(stringOps.getLength()); // 字符串的长度，Output: 13
console.log(stringOps.startsWith("Hello")); // 判断字符串是否以指定字符串开头，Output: true
console.log(stringOps.endsWith("World!")); // 判断字符串是否以指定字符串结尾，Output: true
console.log(stringOps.indexOf("World")); // 字符串首次出现的位置，Output: 7
console.log(stringOps.replace("World", "Universe")); // 替换字符串，Output: Hello, Universe!
console.log(stringOps.split(",")); // 分割字符串为数组，Output: ["Hello", " World!"]
console.log(stringOps.trim()); // 删除字符串两端的空格，Output: Hello, World!




