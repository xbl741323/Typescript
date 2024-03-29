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
//原生js封装的ajax(不兼容Ie6)
function ajax(config) {
    var oReq = new XMLHttpRequest();
    oReq.open(config.type, config.url, true);
    oReq.send();
    oReq.onreadystatechange = function () {
        if (oReq.readyState == 4 && oReq.status == 200) {
            console.log('请求成功！');
            if (config.dataType == 'json') {
                console.log(JSON.parse(oReq.responseText));
            }
            else {
                console.log(oReq.responseText);
            }
        }
    };
}
var arrx = ["123", "qer"];
// var arrx:UserArr = [1243,"qer"] //这是错误的写法
// var arrx:UserArr = [1234,"qer"] //any类型下可以这么写
console.log(arrx.valueOf());
var stu = { name: "zs" };
function setData(value) {
    return value;
}
var p = setData;
console.log(p("asc"));
