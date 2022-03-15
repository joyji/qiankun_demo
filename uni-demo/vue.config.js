/*
 * @Description: 
 * @Author: jiying079
 * @Date: 2022-01-29 22:17:19
 * @LastEditTime: 2022-03-15 11:32:06
 */
const packageName = require('./package.json').name;

module.exports = {
    devServer: {
      port: 8090, //这里的端口是必须和父应用配置的子应用端口一致
      headers: {
        //因为qiankun内部请求都是fetch来请求资源，所以子应用必须允许跨域
        "Access-Control-Allow-Origin": "*"
      }
    },
    configureWebpack: {
      output: {
        //资源打包路径
        library: `${packageName}`,
        libraryTarget: "umd",
        jsonpFunction: `webpackJsonp_${packageName}`
      }
    }
  }
  