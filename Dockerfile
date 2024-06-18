# 使用 Node.js 官方镜像作为基础镜像
FROM node:18-alpine

# 镜像创建者信息
MAINTAINER studentming

# 复制文件到镜像，自动解压（文件类型为：tar.gz 或 tar.bz2）
ADD . /app

# 设置容器启动后的默认运行目录
WORKDIR /app

# 复制文件到镜像，不解压
# COPY package*.json ./

# 运行命令，安装依赖
# RUN 命令可以有多个，但是可以用 && 连接多个命令来减少层级。
# 例如 RUN npm install && cd /app && mkdir logs
# RUN npm install --registry=https://registry.npm.taobao.org 淘宝镜像已经更新，后续要更改
RUN npm install

# 暴露端口
EXPOSE 3000

# CMD 指令只能一个，是容器启动后执行的命令，算是程序的入口。
# 如果还需要运行其他命令可以用 && 连接，也可以写成一个shell脚本去执行。
# 例如 CMD cd /app && ./start.sh
CMD node app.js
