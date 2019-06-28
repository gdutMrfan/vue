const path=require('path');
const htmlWebpackPlugin=require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports={
    entry:path.join(__dirname,'./src/js/main.js'),
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },
    plugins:[
        new VueLoaderPlugin(),
        new htmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),
            filename: 'index.html'
        })
    ],
    module:{
        rules:[
            {
                test:/\.css$/,use:['style-loader','css-loader']
            },
            {
                test:/\.vue$/,use:'vue-loader'
            },
            {
                test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {test:/.(png|gif|jpg|svg|ttf)$/, use:['file-loader']
            }
        ]
    },
    resolve:{
        alias:{
         /*   'vue$':'vue/dist/vue.js'*/
        }
    }
}