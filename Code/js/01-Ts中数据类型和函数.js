"use strict";
console.log("你好，Typescript!");
//布尔类型
var flag = true;
flag = false;
console.log(flag);
//数字类型
var num = 123;
num = 456;
console.log(num);
//字符串类型
var str = "你好";
str = "haha";
console.log(str);
//数组类型
//第一种表示方式
var arr = [1, 2, 3, 4, 5];
console.log(arr.toString());
//第二种表示方式
var arr2 = [1, 2, 3, 4, 5];
console.log(arr2.toString());
//第三种表示方式
var arr6 = [1, 'zs', 3, true, 5];
console.log(arr6.toString());
//元组类型
var arr3 = [234, 123, 'hello'];
console.log(arr3.toString());
//枚举类型
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 1] = "success";
    Flag[Flag["error"] = 3] = "error";
})(Flag || (Flag = {}));
var c = Flag.error;
console.log(c);
var Color;
(function (Color) {
    Color[Color["blue"] = 0] = "blue";
    Color[Color["red"] = 1] = "red";
    Color[Color["orange"] = 2] = "orange";
})(Color || (Color = {}));
var e = Color.red;
var x = Color.orange;
console.log(e); //会输出对应下标
console.log(x);
var Err;
(function (Err) {
    Err[Err["undefined"] = -1] = "undefined";
    Err[Err["null"] = -2] = "null";
    Err[Err["success"] = 1] = "success";
})(Err || (Err = {}));
var s = Err.null;
console.log(s);
//任意类型（any）
var num1 = 123;
num1 = 'str';
console.log(num1);
var obj = document.getElementById("content");
obj.style.color = "red";
//null 和 undefined 类型
var result;
result = 123;
console.log(result);
var result1;
console.log(result1);
var result3;
result3 = null;
console.log(result3);
var result4;
result4 = 123;
console.log(result4);
//void类型
function run() {
    console.log('run');
}
run();
//Typescript 函数
//1.函数声明法
function fun() {
    return 123;
}
console.log(fun());
//2.函数表达式法（匿名函数法）
var fun2 = function () {
    return 'zs';
};
console.log(fun2());
//Ts中定义方法传参
function getInfo(name, age) {
    return "\u6211\u53EB" + name + "\uFF0C\u4ECA\u5E74" + age + "\u5C81\u4E86"; //这里用到了模板自变量表示法
}
console.log(getInfo('zs', 18));
//没有返回值的方法
function getInfo2(name, age) {
    console.log(name + age);
}
getInfo2('ls', 20);
//方法可选参数
//Es5里面方法的实参和形参可以不一样，如果不一样就需要配置可选参数
function getPersonalInfo(name, age) {
    if (age) {
        return name + "---" + age;
    }
    else {
        return name + "---\u5E74\u9F84\u4E0D\u544A\u8BC9\u4F60";
    }
}
console.log(getPersonalInfo('ww'));
//注意：可选参数必须配置到参数的最后面
/*
function getPersonalInfo(name？: string, age: number): string {
    if (age) {
        return `${name}---${age}`
    } else {
        return `${name}---年龄不告诉你`
    }
}
console.log(getPersonalInfo('ww'))
以上这种写法是错误的
*/
//默认参数（默认参数也可以叫做可选参数）
function getPersonalInfo2(name, age) {
    if (age === void 0) { age = 20; }
    if (age) {
        return name + "---" + age;
    }
    else {
        return name + "---\u5E74\u9F84\u4E0D\u544A\u8BC9\u4F60";
    }
}
console.log(getPersonalInfo2('lyy', 30)); //调用方法时传入默认参数的值会覆盖原来默认参数的值
//三点运算符（用于解决形参个数太多不好表示的问题）
function add() {
    var result = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        result[_i] = arguments[_i];
    }
    var sum = 0;
    result.forEach(function (item) {
        sum += item;
    });
    return sum;
}
console.log(add(1, 2, 3, 4, 5));
function add2(num) {
    var result = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        result[_i - 1] = arguments[_i];
    }
    var sum = num;
    result.forEach(function (item) {
        sum += item;
    });
    return sum;
}
console.log(add(1, 2, 3, 4, 5));
function postInfo(arr) {
    if (typeof (arr) == 'string') {
        return "\u6211\u7684\u540D\u5B57\u662F" + arr;
    }
    else {
        return "\u6211\u7684\u5E74\u9F84\u662F" + arr;
    }
}
console.log(postInfo('zs'));
console.log(postInfo(13));
function patchInfo(name, age) {
    if (age) {
        return "\u6211\u7684\u59D3\u540D\u662F" + name + ",\u5E74\u9F84\u662F" + age;
    }
    else {
        return "\u6211\u7684\u59D3\u540D\u662F" + name;
    }
}
console.log(patchInfo('lyy'));
console.log(patchInfo('ddt', 21));
//Ts中的箭头函数（同Es6中的用法一样）箭头函数中的this指向上下文
//未使用箭头函数
setTimeout(function () {
    console.log("---");
}, 3000);
//使用箭头函数
setTimeout(function () {
    console.log("===");
}, 3000);
