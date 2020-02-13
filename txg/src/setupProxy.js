/*
 * @Author: your name
 * @Date: 2020-02-04 15:43:46
 * @LastEditTime : 2020-02-10 17:39:39
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \3dchoujiange:\实训\年假\bossNode\1704B\Project2\txxg\src\setupProxy.js
 */
const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    // app.use(proxy('/fact', {        //请求地址的前缀
    //     target: 'https://vp.fact.qq.com/',  // 代理的服务器
    //     changeOrigin: true, // 是否切换域名
    //     pathRewrite: {  // 地址改写
    //         '^/fact': ''
    //     }    
    // }));
    // app.use(proxy('/wechat', { 
    //     target: 'https://wechat.wecity.qq.com/',
    //     changeOrigin: true,
    //     pathRewrite: {
    //         '^/wechat': ''
    //     }    
    // }));
    // app.use(proxy('/inews', { 
    //     target: 'https://view.inews.qq.com/' ,
    //     changeOrigin: true,
    //     pathRewrite: {
    //         '^/inews': ''
    //     }    
    // }));
    // app.use(proxy('/api', { 
    //     target: 'https://api.dreamreader.qq.com' ,
    //     changeOrigin: true,
    //     pathRewrite: {
    //         '^/api': ''
    //     }    
    // }));
};