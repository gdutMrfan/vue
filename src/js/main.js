//项目入口文件
//导入vue
import Vue from 'vue'
//导入App组件import app from  './App.vue'
import app from '../App.vue'
//按需导入mint-UI中的组件
import {Header} from 'mint-ui'
Vue.component(Header.name,Header)
//导入Mint-UI样式
import 'mint-ui/lib/style.css'
//导入MUI样式
import '../lib/mui/css/mui.min.css'
//创建一个VUE实例
        var  vm=new Vue({
            el:'#app',
            data:{

            },
            render:function (c) {
                return c(app)
    }
})