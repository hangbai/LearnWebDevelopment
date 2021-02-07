# js语法

### for循环

![image-20201223164451296](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201223164451296.png)

![image-20201223164602859](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201223164602859.png)

![image-20201223164654253](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201223164654253.png)

### filter

![image-20201223164926186](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201223164926186.png)

### map

![image-20201223165036588](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201223165036588.png)

### reduce

![image-20201223165547936](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201223165547936.png)

![image-20201223165938101](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201223165938101.png)

![image-20201223170219714](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201223170219714.png)

![image-20201223165746809](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201223165746809.png)

# Vue语法

var vm = new Vue({
el:指向id
data：{a:1,b:2}
computed：{a:function(){}} 直接引用a
{a：{set:function(){},get:function(){}}}
methods：{a:function(){}}引用a()
})
v-once
v-html
v-text
v-pre
v-cloak

### v-if/v-else-if/v-else

### v-show

### v-for

![image-20201226105425240](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201226105425240.png)

### v-on 事件监听

：点击click 缩写@

![image-20201226105211298](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201226105211298.png)

![image-20201226105222389](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201226105222389.png)



### v-bind 事件绑定 

缩写：

### v-model双向绑定

![image-20201223171211927](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201223171211927.png)

![image-20201223171357562](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201223171357562.png)

#### radio

![image-20201223172106737](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201223172106737.png)

![image-20201223172320020](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201223172320020.png)

![image-20201223172523872](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201223172523872.png)

#### CheckBox

![image-20201223172855800](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201223172855800.png)

![image-20201223172917911](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201223172917911.png)

![image-20201223172937432](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201223172937432.png)

![image-20201223173236231](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201223173236231.png)

![image-20201223173249104](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201223173249104.png)

![image-20201223173327680](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201223173327680.png)

#### select

![image-20201223174240692](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201223174240692.png)

![image-20201223174305803](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201223174305803.png)

![image-20201223174411157](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201223174411157.png)

![image-20201223174433768](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201223174433768.png)

![image-20201223174502527](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201223174502527.png)

#### input值绑定

![image-20201223175032436](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201223175032436.png)

![image-20201223175047052](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201223175047052.png)

#### lazy

回车或者失去聚焦时加载

![image-20201223175434491](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201223175434491.png)

#### number

input输入的字符串转化为数字类型

![image-20201223195250018](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201223195250018.png)

#### trim

删除输入字符串两端的文字

![image-20201223202006521](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201223202006521.png)

## 组件

### 全剧组件

1 创建 2 注册 3使用

![image-20201223205855287](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201223205855287.png)

语法糖

![image-20201224174214683](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201224174214683.png)

![image-20201223205914526](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201223205914526.png)



### 局部组件

在#app中注册 只能在单独的id中使用

![image-20201223205736025](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201223205736025.png)

语法糖

![image-20201224174428440](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201224174428440.png)



### 父组件/子组件

![image-20201224221134083](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201224221134083.png)

在组件构造器中注册

![image-20201224165053912](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201224165053912.png)

### 组件模板分离

![image-20201224174949781](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201224174949781.png)

![image-20201224175106270](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201224175106270.png)

### 组件的数据存放

![image-20201224175503580](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201224175503580.png)

![image-20201224175528749](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201224175528749.png)

### 父子组件的通信

#### props 父传子

![image-20201224212742980](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201224212742980.png)

方式一：字符串数组

![image-20201224215601466](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201224215601466.png)

![image-20201224215652725](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201224215652725.png)

![image-20201224215728756](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201224215728756.png)

方式二：对象

![image-20201224220115075](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201224220115075.png)

![image-20201224220058116](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201224220058116.png)

![image-20201224220649896](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201224220649896.png)

![image-20201224220824725](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201224220824725.png)

![image-20201224221733364](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201224221733364.png)

#### $emit 子传父

![image-20201225113147891](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201225113147891.png)

![image-20201225113323225](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201225113323225.png)

 ![image-20201225113637168](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201225113637168.png)

![image-20201225113726729](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201225113726729.png)

键盘输入数据传出

![image-20201226113139505](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201226113139505.png)

#### watch

监听改变

### 父子组件的访问方式 

#### $children

#### $refs

#### 访问父组件 $parent

![image-20201226164440726](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201226164440726.png)

#### 访问根组件 $root

![image-20201226164539860](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201226164539860.png)

### 插槽 slot

![image-20201226165756909](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201226165756909.png)

![image-20201226165629538](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201226165629538.png)

![image-20201226165445997](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201226165445997.png)

#### 具名插槽

![image-20201226170325389](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201226170325389.png)

![image-20201226170338870](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201226170338870.png)

#### 作用域插槽

![image-20201226172046886](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201226172046886.png)

获取子组件中的数据

![image-20201226173025704](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201226173025704.png)

## 模块化

![image-20201226181933449](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201226181933449.png)

### 匿名函数

![image-20201226181844873](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201226181844873.png)

![image-20201226194348785](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201226194348785.png)

![image-20201226195349158](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201226195349158.png)

![image-20201226195740820](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201226195740820.png)

![image-20201226200103020](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201226200103020.png)

![image-20201226200143207](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201226200143207.png)

导出默认函数 只能有一个 导入时可以自己命名

![image-20201226200829937](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201226200829937.png)

![image-20201226200842711](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201226200842711.png)

![image-20201226201113268](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201226201113268.png)

![image-20201226195814678](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201226195814678.png)

![image-20201226200446163](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201226200446163.png)

## webpack

![image-20201226210200476](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201226210200476.png)

![image-20201226211506362](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201226211506362.png)

![image-20201226211616396](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201226211616396.png)

![image-20201227093253128](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201227093253128.png)

![image-20201227093330466](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201227093330466.png)

![image-20201227124123244](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201227124123244.png)

![image-20201227130452686](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201227130452686.png)

![image-20201227130507940](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201227130507940.png)

![image-20201227130230047](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201227130230047.png)

![image-20201227130816867](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201227130816867.png)

![image-20201227132541763](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201227132541763.png)

![image-20201227133246225](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201227133246225.png)

![image-20201227133120628](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201227133120628.png)

![image-20201227134546086](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201227134546086.png)

![image-20201227134926493](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201227134926493.png)

![image-20201227134941903](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201227134941903.png)

#### Plugin

##### 横幅

![image-20201227151219035](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201227151219035.png)

##### HtmlWebpack

![image-20201227151340710](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201227151340710.png)

![image-20201227173538941](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201227173538941.png)

![image-20201227173716780](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201227173716780.png)

##### js压缩

![image-20201227173852149](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201227173852149.png)

![image-20201227174127219](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201227174127219.png)

#### 搭建本地服务区

![image-20201227174446444](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20201227174446444.png)

## Vue CLI

```
npm install -g @vue/cli
vue create hello-world
```

### 拉取 2.x 模板 (旧版本)

```
npm install -g @vue/cli-init
vue init webpack my-project
```

## Router

## Vuex

## 网络模块封装

![image-20210101161204838](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20210101161204838.png)

![image-20210101161227838](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20210101161227838.png)

![image-20210101161818833](C:\Users\baihang\AppData\Roaming\Typora\typora-user-images\image-20210101161818833.png)

