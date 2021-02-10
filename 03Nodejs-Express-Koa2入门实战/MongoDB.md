# MongoDB

## 基本操作

```shell
#显示所有数据库
show dbs
#进入数据库
use database_name
#删除当前数据库
db.dropDatabase()
#插入数据
db.collection_name.insert({'name':'zhangshan'}) 
#显示所有集合
show collections
#删除集合
db.collection_name.drop()
-----查询------
#查找数据
db.collection_name.find()
#过滤相同数据
db.collection_name.distinct('name')
#查找指定数据
db.col_name.find({'name':'zhangshan',age:22})
#查找大于n的数据
db.col_name.find({'age':{$gt:n}})
#查找小于n的数据
db.col_name.find({'age':{$lt:n}})
#查找大于等于n的数据
db.col_name.find({'age':{$gte:n}})
#查找小于等于n的数据
db.col_name.find({'age':{$lte:n}})
#查找大于等于m，小于等于n的数据
db.col_name.find({'age':{$gte:m,lte:n}})
#查找包含'aaa'的数据
db.col_name.find({'name':/aaa/})
#查找包含'aaa'开头的数据
db.col_name.find({'name':/^aaa/})
#查找包含'aaa'结尾的数据
db.col_name.find({'name':/aaa$/})
#结果只显示name
db.col_name.find({},{'name':1})
#结果升序和降序
db.col_name.find().sort({'age':1})
db.col_name.find().sort({'age':-1})
#查询前n条数据
db.col_name.find().limit(n)
#查询跳过前n条数据
db.col_name.find().skip(n)
#查询有多少条数据
db.col_name.find().count()
#查询or
db.col_name.find({$or:[{'age':22},{'age':25}]})
#查询一条数据
db.col_name.findOne()
-----修改-----
#替换数据
db.col_name.update({'age':25},{'age':15})
#修改数据
db.col_name.update({'name':'zhangshan'},{$set:{'name':'lisi'}},{multi:true})
-----删除-----
#删除数据
db.col_name.remove({'age':18},{justOne:true})
-----索引-----
#查询时间
db.col_name.find().explain('executionStats')
#设置索引
db.col_name.ensureIndex({'age':1})
#获取索引
db.col_name.getIndexes()
#删除索引
db.col_name.dropIndex({'age':1})
#复合索引(单独查询只有第一个索引有效)
db.col_name.ensureIndex({'name':1},{'age':-1})
#唯一索引(不能重复)
db.col_name.ensureIndex({'name':1},{'unique':true})
-----管理-----
#创建超级管理员
---1---
use admin
show users
---2---
db.createUser({
  user:'username',
  pwd:'123456',
  roles:[{role:'root',db:'admin'}]
})
role:
  1.数据库用户角色
    read: 只读数据权限
    readWrite:读写数据权限
  2.数据库管理角色
    dbAdmin: 在当前db中执行管理操作的权限
    dbOwner: 在当前db中执行任意操作
    userADmin: 在当前db中管理user的权限
  3.备份和还原角色
    backup restore
  4.所有数据库角色/夸库角色
    readAnyDatabase: 在所有数据库上都有读取数据的权限
    readWriteAnyDatabase: 在所有数据库上都有读写数据的权限
    userAdminAnyDatabase: 在所有数据库上都有管理user的权限
    dbAdminAnyDatabase: 管理所有数据库的权限
  5.集群管理角色
    clusterAdmin: 管理机器的最高权限
    clusterManager: 管理和监控集群的权限
    clusterMonitor: 监控集群的权限
    hostManager: 管理Server
  6.超级权限
    root: 超级用户
---3---
bin/mongod.cfg 打开
security:authorization:enabled
---4---
mongo col_name -u name -p 123456
#删除当前库下的用户
db.dropUser('username')
#修改用户密码
db.updateUser('username',{pwd:'newpwd'})
#密码认证
db.auth('username':'password')
-----聚合管道-----
#聚合管道
db.col_name.aggregate([
  {$project:{name:1,age:1}}, 显示内容
  {$match:{'age':{$gte:18}}}, 条件
  {$group:{age:'$age',total:{$sum:'$sum'}}}, 分组统计
  {$sort:{'age':1}}, 排序
  {$limit:n}, 显示n条数据
  {$skip:n}, 跳过n条数据
  {$skip:n}, 跳过n条数据  
])
    $project：修改输入文档的结构。可以用来重命名、增加或删除域，也可以用于创建计算结果以及嵌套文档。
    $match：用于过滤数据，只输出符合条件的文档。$match使用MongoDB的标准查询操作。
    $limit：用来限制MongoDB聚合管道返回的文档数。
    $skip：在聚合管道中跳过指定数量的文档，并返回余下的文档。
    $unwind：将文档中的某一个数组类型字段拆分成多条，每条包含数组中的一个值。
    $group：将集合中的文档分组，可用于统计结果。
    $sort：将输入文档排序后输出。
    $geoNear：输出接近某一地理位置的有序文档。
# group表达式
    $sum 计算总和
    $avg 计算平均值
    $min 获取集合中所有文档对应值得最小值
    $max 获取集合中所有文档对应值得最大值
    $push 在结果文档中插入值到一个数组中
    $addToSet 在结果文档中插入值到一个数组中，但不创建副本
    $first 根据资源文档的排序获取第一个文档数据
    $last 根据资源文档的排序获取最后一个文档数据
#关联查询
db.col_name.aggregate([
  {$lookup:{
    from: "col2_name",
    localField: "name", //col_name
    foreignField: "name", //col2_name
    as: "class" //放入位置
  }}
])
-----备份还原-----
#备份
mongodump -h dbhost -d dbname -o dbdirectory
    -h  MongDB所在服务器地址127.0.0.1:27017
    -d  需要备份的数据库实例 database_name
    -c  指明collection的名字 col_name
    -o  备份的数据存放位置 c:\data\dump
#恢复
mongorestore -h <hostname><:port> -d dbname <path>
    --host <:port>, -h <:port>  MongoDB所在服务器地址localhost:27017
    --db -d  需要恢复的数据库实例 database_name
    -c  指明collection的名字 col_name
    --drop  恢复的时候,先删除当前数据,然后恢复备份的数据
    <path>  设置备份数据所在位置c:\data\dump
    不能同时指定 <path> 和 --dir
    --dir  设置备份数据所在位置c:\data\dump
```

## node.js + MongoDB

```shell
npm install mongodb --save
```

```javascript
const {MongoClient} = require('mongodb')
const url = "mongodb://localhost:27017"
const dbName = 'MallData'
const client = new MongoClient(url, {useUnifiedTopology: true})

client.connect((err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log('连接成功')
  let db = client.db(dbName)

  //查询数据
  db.collection('home').find({}).limit(10).toArray(((error, data) => {
    console.log(data)
    client.close()
  }))
  //插入数据
  db.collection('test').insertOne({'name': 'zhangsan'}, (error, result) => {
    console.log('插入数据', result)
    client.close()
  })
  //修改数据
  db.collection('test').updateOne({'name': 'zhangsan'}, {$set: {'name': 'lisi'}}, (error, result) => {
    console.log('修改数据', result)
    client.close()
  })
  // 删除数据
  db.collection('test').deleteOne({'name': 'lisi'}, (error, result) => {
    console.log('删除数据', result)
    client.close()
  })
  // 关闭数据库
  client.close()
})
```