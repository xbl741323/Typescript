"use strict";
//接口
/*
接口的作用：在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作的规范，在程序设计里面，接口起到一种限制和规的作用，
接口定义了某一批所需要遵守的规范，接口不关心这些类的内部状态数据，也不关心这些类里方法的实现细节，它只规定这批类里必须要提
供某些方法，提供这些方法的类就可以满足实际需要，Ts中的接口类似于java，同时还增加了更灵活的接口类型，包括属性、函数、可索引
和类等。
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
var Programer = /** @class */ (function () {
    function Programer(name) {
        this.name = name;
    }
    Programer.prototype.coding = function (str) {
        console.log("\u6211\u5728\u5B66\u4E60" + str);
    };
    return Programer;
}());
var DongBeiHu = /** @class */ (function (_super) {
    __extends(DongBeiHu, _super);
    function DongBeiHu(name) {
        return _super.call(this, name) || this;
    }
    DongBeiHu.prototype.eat = function () {
        console.log("我在吃!");
    };
    DongBeiHu.prototype.run = function () {
        console.log("我在跑!");
    };
    return DongBeiHu;
}(Programer));
var t = new DongBeiHu("小虎");
t.eat();
t.run();
t.coding("java");
//泛型:可以支持不特定的数据类型    要求:传入什么类型返回什么类型
function getData(value) {
    return value;
}
var res = getData(123);
var res2 = getData("字符串");
console.log(res);
console.log(res2);
//类的泛型
//利用泛型实现返回数组下最小值的方法
//传统实现(没用泛型)
// class MinFix {
//     public list: number[] = []
//     // constructor(list: number[]) {
//     //     this.list = list
//     // }
//     add(val: number): void {
//          this.list.push(val)
//     }
//     FindMin():number {
//         var minVal = this.list[0]
//         this.list.forEach(item => {
//             if (minVal > item) {
//                 minVal = item
//             }
//         })
//         return minVal;
//     }
// }
// var m = new MinFix();
// m.add(1)
// m.add(4)
// m.add(12)
// console.log(m.FindMin())
//通过使用泛型实现实现
var MinFix = /** @class */ (function () {
    function MinFix() {
        this.list = [];
    }
    MinFix.prototype.add = function (val) {
        this.list.push(val);
    };
    MinFix.prototype.fidMin = function () {
        //字符串类型通过Asll的值来比较
        var minVal = this.list[0];
        this.list.forEach(function (item) {
            if (minVal > item) {
                minVal = item;
            }
        });
        return minVal;
    };
    return MinFix;
}());
var m = new MinFix();
m.add(21);
m.add(23);
m.add(76);
console.log(m.fidMin());
var m2 = new MinFix();
m2.add("c");
m2.add("f");
m2.add("a");
console.log(m2.fidMin());
