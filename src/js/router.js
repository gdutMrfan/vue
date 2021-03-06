import VueRouter from 'vue-router'
//导入路由组件
import HomeContainer from '../components/tabbar/HomeContainer.vue'
import MemberContainer from '../components/tabbar/MemberContainer.vue'
import SearchContainer from '../components/tabbar/SearchContainer.vue'
import ShopCarContainer from '../components/tabbar/ShopcarContainer.vue'
import newLists from  '../components/News/NewsLists.vue'
import newsInfo from  '../components/News/newsInfo.vue'
import photo from  '../components/photoShare/photo.vue'
import GoodsList from '../components/goodsList/GoodsList.vue'
import goodsInfo from  '../components/goodsList/goodsInfo.vue'
var router=new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:HomeContainer},
        {path:'/member',component:MemberContainer},
        {path:'/search',component:SearchContainer},
        {path:'/shopCar',component:ShopCarContainer},
        {path:'/home/newLists',component:newLists},
        {path:'/home/newsInfo/:id',component:newsInfo},
        {path:'/home/photoShare',component:photo},
        {path:'/home/goodsList',component:GoodsList},
        {path:'/home/goodsInfo/:id',component:goodsInfo}

    ],
    linkActiveClass:'mui-active'//覆盖默认的路由高亮的类，router-link-active
})
export default router
