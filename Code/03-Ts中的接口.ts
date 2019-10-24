//接口
/*
接口的作用：在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作的规范，在程序设计里面，接口起到一种限制和规的作用，
接口定义了某一批所需要遵守的规范，接口不关心这些类的内部状态数据，也不关心这些类里方法的实现细节，它只规定这批类里必须要提
供某些方法，提供这些方法的类就可以满足实际需要，Ts中的接口类似于java，同时还增加了更灵活的接口类型，包括属性、函数、可索引
和类等。
*/

//1.属性接口  对json的约束
// 就是对传入对象的约束  属性接口
// interface FullName {
//     firstName: string;
//     secondName: string;
// }

// function printName(name: FullName): void {
//     console.log(name.firstName + '---' + name.secondName)
// }

// var o = {
//     age: 18,
//     firstName: "张三",
//     secondName: '李四',
// }

// printName(o)

//2.接口可选属性
interface FullName {
    firstName: string;
    secondName?: string; //设置可选属性
}

function getFullName(name: FullName): void {
    console.log(`${name.firstName}---${name.secondName}`)
}

var o = {
    firstName: "张三",
    // secondName:"李四" //此处可以不要对应属性
}
// getFullName(o)

//利用Ts中的接口封装的ajax请求
interface Config {
    type: string;
    url: string;
    data?: string;
    dataType: string;
}


//原生js封装的ajax(不兼容Ie6)
function ajax(config: Config) {
    var oReq = new XMLHttpRequest();
    oReq.open(config.type, config.url, true);
    oReq.send();
    oReq.onreadystatechange = function () {
        if (oReq.readyState == 4 && oReq.status == 200) {
            console.log('请求成功！')
            if (config.dataType == 'json') {
                console.log(JSON.parse(oReq.responseText))
            } else {
                console.log(oReq.responseText)
            }
        }
    }
}

// ajax({
//     type: 'get',
//     url: 'http://localhost:3300/getProduct',
//     dataType: 'json'
// })

//可索引接口,对数组,对象的约束(不常用)

//可索引的接口,对数组的约束
interface UserArr {
    [index: number]: string  //约束类型是字符串类型
}
var arrx: UserArr = ["123", "qer"]
// var arrx:UserArr = [1243,"qer"] //这是错误的写法
// var arrx:UserArr = [1234,"qer"] //any类型下可以这么写
console.log(arrx.valueOf())

//可索引的接口,对对象的约束

interface Person {
    [index: string]: string
}

var stu: Person = { name: "zs" }


//类类型接口,对类的约束和抽象类很像
// interface Animal{
//     name:string;
//     eat(str:string):void;
// }

// class Dog implements Animal{
//     name:string;
//     constructor(name:string){
//         this.name = name
//     }
//     eat(str:string):string{
//         return `${this.name}在吃饭!${str}`
//     }
// }

// var d = new Dog("小黑")
// console.log(d.eat("狗"))



//接口扩展 接口可以继承接口

interface Animal {
    eat(): void;
}

interface Tiger extends Animal {
    run(): void;
}

class Programer {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    coding(str: string) {
        console.log(`我在学习${str}`)
    }
}

class DongBeiHu extends Programer implements Tiger {
    constructor(name: string) {
        super(name)
    }
    eat() {
        console.log("我在吃!")
    }
    run() {
        console.log("我在跑!")
    }
}

var t = new DongBeiHu("小虎");
t.eat();
t.run();
t.coding("java")


//泛型:可以支持不特定的数据类型    要求:传入什么类型返回什么类型
function getData<T>(value: T): T {
    return value;
}

var res = getData<number>(123)
var res2 = getData<string>("字符串")
console.log(res)
console.log(res2)

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
class MinFix<T>{
    public list: T[] = []

    add(val: T):void {
        this.list.push(val)
    }

    fidMin(): T {
        //字符串类型通过Asll的值来比较
        var minVal = this.list[0];
        this.list.forEach(item => {
            if (minVal > item) {
                minVal = item
            }
        })
        return minVal;
    }
}

var m = new MinFix<number>();
m.add(21)
m.add(23)
m.add(76)
console.log(m.fidMin())

var m2 = new MinFix<string>();
m2.add("c")
m2.add("f")
m2.add("a")
console.log(m2.fidMin())