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
getFullName(o)

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

ajax({
    type: 'get',
    url: 'http://localhost:3300/getProduct',
    dataType: 'json'
})
