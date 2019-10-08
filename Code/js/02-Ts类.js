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
var Person = /** @class */ (function () {
    // protected name: string;  属性在类里面、子类里面可以访问，在类外部没法访问
    // private name: string; 属性在类里面可以访问，子类、类外部都没法访问
    function Person(name) {
        this.name = name;
    }
    Person.prototype.run = function () {
        console.log(this.name + "\u5728\u5954\u8DD1~");
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name) {
        return _super.call(this, name) || this;
    }
    Student.prototype.study = function () {
        console.log(this.name + "\u5728\u5B66\u4E60~"); //子类中
    };
    return Student;
}(Person));
var p = new Person("小明");
console.log(p.name); //类内部
p.run(); //类外部
var a = new Student("小黑");
a.study();
