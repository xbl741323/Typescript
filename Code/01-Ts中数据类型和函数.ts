console.log("你好，Typescript!")

//布尔类型
var flag: boolean = true;
flag = false;
console.log(flag)

//数字类型
var num: number = 123;
num = 456;
console.log(num)

//字符串类型
var str: string = "你好"
str = "haha"
console.log(str)

//数组类型
//第一种表示方式
var arr: number[] = [1, 2, 3, 4, 5]
console.log(arr.toString())

//第二种表示方式
var arr2: Array<number> = [1, 2, 3, 4, 5]
console.log(arr2.toString())

//第三种表示方式
var arr6: any = [1, 'zs', 3, true, 5]
console.log(arr6.toString())

//元组类型
var arr3: [number, number, string] = [234, 123, 'hello']
console.log(arr3.toString())

//枚举类型
enum Flag { success = 1, error = 3 }
let c: Flag = Flag.error;
console.log(c)

enum Color { blue, red, 'orange' }
let e: Color = Color.red;
let x: Color = Color.orange
console.log(e)//会输出对应下标
console.log(x)

enum Err { 'undefined' = -1, 'null' = -2, 'success' = 1 }
let s: Err = Err.null
console.log(s)

//任意类型（any）
var num1: any = 123;
num1 = 'str'
console.log(num1)

var obj: any = document.getElementById("content")
obj.style.color = "red";

//null 和 undefined 类型
var result: number | undefined;
result = 123;
console.log(result)

var result1: null | undefined;
console.log(result1)

var result3: null;
result3 = null
console.log(result3)

var result4: number | null | undefined;
result4 = 123
console.log(result4)

//void类型
function run(): void {
    console.log('run')
}
run()

//Typescript 函数
//1.函数声明法
function fun(): number {
    return 123;
}
console.log(fun())
//2.函数表达式法（匿名函数法）
var fun2 = function (): string {
    return 'zs'
}
console.log(fun2())

//Ts中定义方法传参
function getInfo(name: string, age: number): string {
    return `我叫${name}，今年${age}岁了`//这里用到了模板自变量表示法
}

console.log(getInfo('zs', 18))

//没有返回值的方法
function getInfo2(name: string, age: number): void {
    console.log(name + age)
}
getInfo2('ls', 20)

//方法可选参数
//Es5里面方法的实参和形参可以不一样，如果不一样就需要配置可选参数

function getPersonalInfo(name: string, age?: number): string {
    if (age) {
        return `${name}---${age}`
    } else {
        return `${name}---年龄不告诉你`
    }
}

console.log(getPersonalInfo('ww'))

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
function getPersonalInfo2(name: string, age: number = 20): string {
    if (age) {
        return `${name}---${age}`
    } else {
        return `${name}---年龄不告诉你`
    }
}
console.log(getPersonalInfo2('lyy', 30))//调用方法时传入默认参数的值会覆盖原来默认参数的值

//三点运算符（用于解决形参个数太多不好表示的问题）
function add(...result: number[]): number {
    var sum = 0;
    result.forEach(item => {
        sum += item
    })
    return sum;
}
console.log(add(1, 2, 3, 4, 5))

function add2(num: number, ...result: number[]): number {
    var sum = num;
    result.forEach(item => {
        sum += item
    })
    return sum;
}
console.log(add(1, 2, 3, 4, 5))

//Ts函数重载
// java中方法的重载，重载指的是方法的名字一样，但是形参的类型，个数，排列顺序不同，这是
//会出现重载的情况

// Typescript中的重载，通过为同一个同名函数提供多个函数类型来实现多种功能的目的

// Ts为了兼容Es5  以及 Es6 重载的写法和java中有区别

//Es5中出现同名函数，后面的函数会直接覆盖前面的函数
/*
function test(num){

}

function test(num,num2){

}
*/

//Ts中函数的重载写法如下所示（参数一样时）
function postInfo(name: string): string;

function postInfo(age: number): number;

function postInfo(arr: any): any {
    if (typeof (arr) == 'string') {
        return `我的名字是${arr}`
    } else {
        return `我的年龄是${arr}`
    }
}
console.log(postInfo('zs'))
console.log(postInfo(13))

//Ts中函数的重载写法如下所示（参数不一样时）
function patchInfo(name: string): string;

function patchInfo(name: string, age: number): string;

function patchInfo(name: any, age?: any): any {
    if (age) {
        return `我的姓名是${name},年龄是${age}`
    } else {
        return `我的姓名是${name}`
    }
}

console.log(patchInfo('lyy'))
console.log(patchInfo('ddt', 21))

//Ts中的箭头函数（同Es6中的用法一样）箭头函数中的this指向上下文
//未使用箭头函数
setTimeout(function () {
    console.log("---")
}, 3000)

//使用箭头函数
setTimeout(() => {
    console.log("===")
}, 3000)



