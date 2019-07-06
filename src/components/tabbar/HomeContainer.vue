<template>
    <div>
        <!--轮播图-->
        <mt-swipe :auto="5000" :defaultIndex="0">
            <mt-swipe-item><img src="../../images/场景.jpg"></mt-swipe-item>
            <mt-swipe-item><img src="../../images/贵州风景.jpg"></mt-swipe-item>
            <mt-swipe-item><img src="../../images/田园.jpg"></mt-swipe-item>
        </mt-swipe>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link to="/home/newLists">
                <img src="../../images/新闻资讯.svg">
                <div class="mui-media-body">新闻资讯</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link to="/home/photoShare">
                <img src="../../images/图片分享.svg">
                <div class="mui-media-body">图片分享</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link to="/home/goodsList">
                <img src="../../images/商品购买.svg">
                <div class="mui-media-body">商品购买</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link to="#">
                <img src="../../images/留言反馈.svg">
                <div class="mui-media-body">留言反馈</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link to="#">
                <img src="../../images/视频专区.svg">
                <div class="mui-media-body">视频专区</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link to="#">
                <img src="../../images/联系我们.svg">
                <div class="mui-media-body">联系我们</div></router-link></li>

        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
    data(){
        return{

        }
    },
    methods: {}
}
</script>

<style scoped>
 .mint-swipe{
     height: 600px;
 }
 .mint-swipe-item img{
     width: 100%;
     height: 100%;
 }
 .mui-grid-view.mui-grid-9{
     background-color: white;
 }
 .mui-grid-view.mui-grid-9 .mui-table-view-cell{
     border: 0;
 }
 .mui-table-view-cell,.mui-media,.mui-col-xs-4,.mui-col-sm-4{
     height: 300px;
     text-align: center;
 }
 .mui-media-body{
     height: 80px!important;
     font-size: 30px!important;
     padding-top: 20px;
 }
 img{
        width: 150px;
        height: 150px;
    }
</style>