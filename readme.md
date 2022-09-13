## qiankun-demo

main-vue2 与 vue 2 使用 node 10.24.1 版本。

使用的qiankun版本为2.7.5。

### 安装方法

到每个应用目录下执行 npm install 。

### 运行方法

基座应用，可以直接使用npm run start 运行，也可以使用Nginx部署。

为方便支持跨域和单页刷新，子应用打包后使用Nginx进行部署。Nginx配置文件示例如下所示：

```
// cors.conf
add_header Access-Control-Allow-Origin * always;
add_header Access-Control-Allow-Methods 'GET, POST, OPTIONS';
add_header Access-Control-Allow-Headers 'DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization';
if ($request_method = 'OPTIONS') {
	return 204;
}
```

```
server {
	listen 8000;
	server_name  localhost;
	location / {
		root qiankun-demo/main-vue2/dist;
		index  index.html index.htm;
		try_files $uri $uri/ /;
	}
}

server {
	listen  8100;
	server_name  localhost;
	include cors.conf;
	location / {
		root qiankun-demo/vue2/dist;
		index  index.html index.htm;
		try_files $uri $uri/ /;
	}
}
```

### vue 2 项目修改配置项的方式

本仓库中 vue 2 项目是使用命令 vue init webpack 创建的（参考 [Vue2项目搭建](https://blog.csdn.net/qq_24349695/article/details/90514900)）。

该项目修改webpack配置可参考：[@vue cli-init 创建项目学习webpack配置](https://blog.csdn.net/shadowfall/article/details/120085183)

vue.config.js配置不生效的原因见： [vue.config.js中的配置不生效](https://blog.csdn.net/qq_34370249/article/details/117744089)



