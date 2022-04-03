
 import resolve from 'rollup-plugin-node-resolve';
 import commonjs from 'rollup-plugin-commonjs';
 import pkg from './package.json';
 export default {
    input: 'src/index.js',
    output: {
      file: pkg.browser, // 是打包后的目录
      format: 'umd', // umd是兼容amd/cjs/iife的通用打包格式，适合浏览器
      name: 'file' 
    },
    plugins:[
        resolve(),
        commonjs(),
    ]
 }