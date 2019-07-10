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
//导入vuex包
import Vuex from 'vuex'
Vue.use(Vuex)
//初始化购物车数据
var car=JSON.parse(localStorage.getItem('shopCar')|| '[]')
var store=new Vuex.Store({
    state:{
       car:car
    },
    mutations:{
        //将商品添加到购物车
        addToCar(state,goodsInfo){
           var flag=false
            state.car.some(item=>{
                if(item.id==goodsInfo.id){
                    item.count+=parseInt(goodsInfo.count)
                    flag=true
                    return true
                }
            })
         if(!flag){
             state.car.push(goodsInfo)
         }
         //存储购物车信息到本地，让数据持久化
        localStorage.setItem('shopCar',JSON.stringify(state.car))
        },
        //更新购物车列表
        updateCount(state,goodsInfo){
            state.car.some(item=>{
                if(item.id==goodsInfo.id){
                    item.count=parseInt(goodsInfo.count)
                    return true
                }
            })
            //更新本地数据
            localStorage.setItem('shopCar',JSON.stringify(state.car))
        },
        //删除购物车列表
        removeData(state,id){
            state.car.some((item,i)=>{
                if(item.id==id){
                    state.car.splice(i,1)
                    return true
                }
            })
            localStorage.setItem('shopCar',JSON.stringify(state.car))
        },
        //同步购物车状态到store，并存储到本地存储
        updateSelected(state,info){
           state.car.some(item=>{
               if(item.id==info.id){
                   item.select=info.selected
                   return true
               }
           })
         localStorage.setItem('shopCar',JSON.stringify(state.car))
        }
    },
    getters:{
        getAllCount(state){
            var count=0
            state.car.forEach(item=>{
                count+=item.count
            })
            return count
        },
       /* getGoodsSelected(state){
            var o={}
            state.car.forEach(item=>{
                o[item.id]=item.selected
            })
           return o
        }*/
        getAllCountAndAmount(state){
            var o={
                count:0,
                amount:0
            }//创建一个用于存储勾选商品件数和商品总价的对象
            state.car.forEach(item=>{
                if(item.selected){
                   o.count+=item.count
                   o.amount+=item.price * item.count
                }
            })
            return o
        }
    },
    actions:{}
})
Vue.use(VueResource)
//创建一个VUE实例
        var  vm=new Vue({
            el:'#app',
            data:{

            },
            render:function (c) {
                return c(app)
                  },
            router:router,
            store:store
})