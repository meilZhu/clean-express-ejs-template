/***
 * @file:
 * @author: linkun.he
 * @Date: 2020-01-08 13:45:50
 */
// const host = "http://172.16.20.64";
// const host = "http://192.168.16.13:9501";
var fetchUrlConfig = require('./fetch-url.config');
var fileUrlConfig = require('./file-url.config');

const fetchUrl = process.env.npm_config_dtfetchurl || fetchUrlConfig;
const fileUrl = process.env.npm_config_dtfileurl || fileUrlConfig;

console.log('请求后端地址为：', fetchUrl);
console.log('文件服务器地址为：', fileUrl);

var BASE_CONFIG = {
  token: 'token',
  serverName: {
    admin: `${fetchUrl}/ithinkdt-srm-scm-new`
  },
  imgBase: `${fileUrl}/ithinkdt-file/pub/bus/file/image?fileId=`,
  imgDownloadBase: `${fileUrl}/ithinkdt-file/pub/bus/file/download.do?fileId=`,
  publicPath: '',
  mode: ''
};

module.exports = BASE_CONFIG;
