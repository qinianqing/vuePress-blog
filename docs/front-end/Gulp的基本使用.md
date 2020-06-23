---
title: gulp的基本使用
tags:
  - Vue
  - JS
  - Gulp
---



### Gulp是什么?

  Gulp 是基于node.js的一个前端自动化构建工具,开发这可以使用它构建自动化工作流程（前端集成开发环境）. 使用gulp你可以简化工作量,让你把重点放在功能的开发上,从而提高你的开发效率和工作质量.说简单点，gulp和webpack一样,都是基于Node.js的前端工程化打包工具.所以在使用之前，必须安装[Node.js](https://nodejs.org/en/).
  <!-- more -->

### 如何使用Gulp？

  全局安装
  ```
  npm install gulp -g
  ```
  查看是否安装成功
  ```
  gulp -v
  ```
  打开命令行,进入项目根路径
  初始化项目
  ```
  npm init
  ```
  为项目安装gulp依赖包
  ```
  npm install gulp --save-dev
  ```
  执行gulp(运行项目)
  ```
  gulp
  ```
