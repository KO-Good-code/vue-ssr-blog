# nodejs读写xlsx
首先安装必备模块`xlsx`
```cmd
npm i --save -dev xlsx
```
读取文件：
```js
let XLSX = require("xlsx");
let fs = require("fs")
let buf = fs.readFileSync(path)//path是文件路径
let ws = XLSX.read(buf,{type:"buffer"}) //ws是xlsx文件对象
```
返回Excel sheetName数组：
```js
let SheetArr = ws.SheetNames
//SheetName：['one','two']
```
返回单个表：
```js
ws.Sheets[sheet_name]
let Sheet = ws.Sheets[ws.SheetName[0]]//这是输出第一个表
```
将表格转化为Json：
```js
let Sheet = ws.Sheets[ws.SheetName[0]]//获取第一个表
let row = XLSX.utils.sheet_to_json(Sheet)//将表内容转为Json
```
[官方链接](https://github.com/sheetjs/js-xlsx)