# nodejs

## 模块

### http模块

```javascript
let http = require('http');
// request 获取浏览器传入信息
// response 浏览器相应
http.createServer(function (request, response) {
// 响应头
  response.writeHead(200, {'Content-Type': 'text/plain'});
// 输出并结束相应
  response.end('Hello World');
}).listen(8081);

console.log('Server running at http://localhost/8081')
```

```javascript
let http = require('http');
// request 获取浏览器传入信息
// response 浏览器相应
http.createServer((request, response) => {
  // 获取url
  console.log(request.url)
  // 响应头
  response.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'});
  // 写入数据
  response.write("<head><meta charset='UTF-8'></head>") // 如果有乱码
  response.write('你好 this is nodejs.')
  response.write("<h2>你好</h2>")
  // 输出并结束相应
  response.end('end');
}).listen(8081);

console.log('Server running at http://localhost:8081')
```

### url模块

```javascript
let url = require('url')
let api = 'http://www.baidu.com?name=zhangsan&age=18'
let getUrl = url.parse(api, true).query
console.log(getUrl)
console.log(`姓名：${getUrl.name}--年龄：${getUrl.age}`)
```

### fs模块

操作文件和文件夹

```javascript
const fs = require('fs')

// 1.检测文件还是目录
fs.stat('fs.js', (err, data) => {
  if (err) {
    // console.log(err)
    return console.error(err)
  }
  console.log(`文件：${data.isFile()}`) //true
  console.log(`目录：${data.isDirectory()}`) //false
})

// 2.创建目录
// 更好的目录创建包  // npm i mkdirp
fs.mkdir('./css', err => {
// 上级目录../css  当前目录./css
  if (err) {
    return console.error(err)
  }
  console.log(`创建成功`)
})

// 3.创建写入文件
fs.writeFile('./css/test.css', 'div{color:red}', err => {
  if (err) {
    return console.error(err)
  }
  console.log(`创建成功`)
})

// 4.追加文件
fs.appendFile('./css/test.css', 'div{color:black}', err => {
  if (err) {
    return console.error(err)
  }
  console.log(`创建成功`)
})

// 5.读取文件
fs.readFile('./css/test.css', (err, data) => {
  if (err) {
    return console.error(err)
  }
  console.log(data) // Buffer
  console.log(data.toString())
})

// 6.读取目录
fs.readdir('./css', (err, data) => {
  if (err) {
    return console.error(err)
  }
  console.log(data)
})

// 7.重命名 移动文件
fs.rename('./css/test.cs', './css/index.css', err => {
  if (err) {
    return console.error(err)
  }
  console.log('重命名成功')
})

// 8.删除目录
fs.rmdir('./css', err => {
  if (err) {
    return console.error(err)
  }
  console.log('删除目录成功')
})

// 9.删除文件
fs.unlink('./css/index.css', err => {
  if (err) {
    return console.error(err)
  }
  console.log('删除文件成功')
})

// 10.文件流读取数据
let count = 0
let readStream = fs.createReadStream('./test.jpg')
readStream.on('data', (data) => {
  str += data
  count++
})
readStream.on('end', () => {
  // console.log(str)
  console.log(count)
  console.log('end')
})
readStream.on('error', () => {
  console.log('error')
})

// 11.文件流写入
let str = ''
for (let i = 0; i < 5000; i++) {
  str += `第${i}行写入的数据。\n`
}
let writeStream = fs.createWriteStream('text.txt')
writeStream.write(str)
writeStream.end()
writeStream.on('finish', () => {
  console.log('写入完成')
})

// 12.管道流
let read = fs.createReadStream('test.jpg')
let write = fs.createWriteStream('./test/new.jpg')
read.pipe(write)
```

## 语法+特性

### 模板字符串

```javascript
let name = '张三';
let age = 18;
console.log(`姓名：${name}，年龄：${age}`);
```

### 箭头函数

```javascript
let a = function () {
}

let b = () => {
}
```

### 回调函数

```javascript
function getData(callback) {
  setTimeout(() => {
    let name = '张三'
    callback(name)
  })
}

getData((res) => {
  console.log(res)
})
```

### Promise

```javascript
function getData(resolve, reject) {
  setTimeout(() => {
    let name = '张三'
    resolve(name)
  })
}

let p = new Promise(getData)
p.then(data => {
  console.log(data)
})

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let name = '李四'
    resolve(name)
  })
})

p1.then(data => {
  console.log(data)
})
```

### async

```javascript
async function getData() {
  return '张三'
}

async function getData() {
  return new Promise((function (resolve, reject) {
    resolve('张三')
  }))
}

async function main() {
  let data = await getData()
  console.log(data)
}

main()
```

