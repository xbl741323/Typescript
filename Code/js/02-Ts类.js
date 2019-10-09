"use strict";
// 1.Ts中类的定义
/*
function Person(name){
    this.name = name;
    this.run = function(){
        this.console.log(this.name)
    }
}

var p = new Person("张三")
p.run()
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// class Person { //上述Es5中的类的声明实例化过程，在Ts中写法如下
//     name: string;   //属性前面省略了public关键词
//     constructor(name: string) { //构造函数实例化类的时候触发的方法
//         this.name = name;
//     }
//     run(): void {
//         console.log(this.name)
//     }
// }
// var p = new Person("张三")
// p.run()
// class Person {
//     name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
//     getName(): string {
//         return this.name;
//     }
//     setName(name: string): void {
//         this.name = name;
//     }
// }
// var p = new Person("李四")
// console.log(p.getName())
// p.setName("王五")
// console.log(p.getName())
//2.Ts中实现继承 extends、super
// class Person {
//     public name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
//     run(): string {
//         return `${this.name}在运动！`
//     }
// }
// // var p = new Person("张三")
// // console.log(p.run())
// //继承实现如下
// class Web extends Person {
//     constructor(name: string) {
//         super(name)  //初始化父类的构造函数
//     }
//     run(): string { //子类中可以重写父类中的方法，当子类调用和父类相同方法名的方法时，调用的是子类中重写后的方法
//         return `${this.name}在学习！`
//     }
//     work(): void { //子类除了可以继承父类的属性和方法之外，还可以定义自己的方法
//         console.log(`${this.name}在工作！`)
//     }
// }
// var w = new Web("李四");
// console.log(w.run())
// w.work();
//3.类里面的修饰符 Ts里面定义属性的时候给我们提供了三种修饰符
/*
public:公有类型           在类里面、子类、类外面都可以访问
protected:保护类型        在类里面、子类里面可以访问，在类外部没法访问
private:私有类型          在类里面可以访问，子类、类外部都没法访问

属性不加修饰符，默认是public
*/
// class Person {
//     public name: string;
//     // protected name: string;  属性在类里面、子类里面可以访问，在类外部没法访问
//     // private name: string; 属性在类里面可以访问，子类、类外部都没法访问
//     constructor(name: string) {
//         this.name = name;
//     }
//     run(): void {
//         console.log(`${this.name}在奔跑~`)
//     }
// }
// class Student extends Person {
//     constructor(name: string) {
//         super(name)
//     }
//     study(): void {
//         console.log(`${this.name}在学习~`) //子类中
//     }
// }
// var p = new Person("小明")
// console.log(p.name) //类内部
// p.run() //类外部
// var a = new Student("小黑")
// a.study()
//4.Ts中的静态方法
// class Person {
//     public name: string;
//     static age = 18;
//     constructor(name: string) {
//         this.name = name;
//     }
//     run(): void { //Ts中的实例方法
//         console.log(`${this.name}在奔跑~`)
//     }
//     static ski() { //静态方法的定义 注意：静态方法里只能调用静态属性
//         console.log(`在调用静态方法中的静态属性${this.age}`)
//     }
// }
// var p = new Person("王五")
// p.run() //调用实例方法，实例对象.方法名
// Person.ski()  //调用静态方法，类名.静态方法名
// console.log(Person.age)
//5.多态：父类定义一个方法不去实现，让继承它的子类去实现，每一个子类有不同的表现
// //多态属于继承
// class Animal {
//     public name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
//     eat(): void { //具体吃什么不知道，具体吃什么让继承它的子类去实现，每个子类的表现不一样
//         console.log("吃的方法~")
//     }
// }
// class Dog extends Animal {
//     constructor(name: string) {
//         super(name)
//     }
//     eat(): string {
//         return `${this.name}吃肉!`
//     }
// }
// class Cat extends Animal {
//     constructor(name: string) {
//         super(name)
//     }
//     eat(): string {
//         return `${this.name}吃鱼！`
//     }
// }
// var d = new Dog("小白"); 
// console.log(d.eat())
// var ca = new Cat("小黑");
// console.log(ca.eat())
//6.Ts中的抽象类，它是提供其它类继承的基类，不能直接被实例化
//用abstract关键词定义抽象类和方法，抽像类中的抽象方法不包含具体的实现并且必须在派生类中实现
//abstract抽象方法只能放在抽象类中
//抽象类和抽象方法用来定义标准，抽象方法必须被派生类继承和实现
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.ski = function () {
        console.log("抽象类中的其他方法！"); //派生类可以不继承
    };
    return Animal;
}());
// var a = new Animal("小白"); 抽象类不能被实例化
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.eat = function () {
        return this.name + "\u5728\u5403\u8089\uFF01";
    };
    Dog.prototype.run = function () {
        console.log("其它方法~"); //派生类中可以写自己的方法
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.eat = function () {
        return this.name + "\u5728\u5403\u9C7C\uFF01";
    };
    Cat.prototype.run = function () {
        console.log("其它方法~"); //派生类中可以写自己的方法
    };
    return Cat;
}(Animal));
var d = new Dog("小白");
console.log(d.eat());
d.run();
var ca = new Cat("小黑");
console.log(ca.eat());
