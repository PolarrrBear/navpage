# NavPage


## [导航首页](https://polarrrrbearrr.github.io/navpage/dist/index.html)

* 默认搜索引擎为百度
* 监听键盘事件，敲下对应方块显示字母=>打开该页面
* 使用localStorage存储


## 开发

```
yarn global add parcel-bundler
parcel src/index.html

```

## build 命令

```
rm -rf dist
parcel src/index.html
parcel build src/index.html  --no-minify
```

```
(option)parcel build src/index.html  --no-minify --public-url ./
```
