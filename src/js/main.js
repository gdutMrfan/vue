//项目入口文件
//导入vue
import Vue from 'vue'
//导入App组件import app from  './App.vue'
import app from '../App.vue'
//按需导入mint-UI中的组件
/*import {Header,Swipe, SwipeItem,Button} from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)*/
import MintUi from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUi)
//导入Mint-UI样式
import 'mint-ui/lib/style.css'
//导入MUI样式
import '../lib/mui/css/mui.min.css'
//导入图标样式
import '../lib/mui/css/icons-extra.css'
//导入路由模块
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'
//导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)
//创建一个VUE实例
        var  vm=new Vue({
            el:'#app',
            data:{

            },
            render:function (c) {
                return c(app)
                  },
            router:router
})