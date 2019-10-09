"use strict";
//接口
/*
接口的作用：在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作的规范，在程序设计里面，接口起到一种限制和规的作用，
接口定义了某一批所需要遵守的规范，接口不关心这些类的内部状态数据，也不关心这些类里方法的实现细节，它只规定这批类里必须要提
供某些方法，提供这些方法的类就可以满足实际需要，Ts中的接口类似于java，同时还增加了更灵活的接口类型，包括属性、函数、可索引
和类等。
*/
function getFullName(name) {
    console.log(name.firstName + "---" + name.secondName);
}
var o = {
    firstName: "张三",
};
getFullName(o);
