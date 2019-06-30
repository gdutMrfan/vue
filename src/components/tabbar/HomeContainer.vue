<template>
    <div>
        <!--轮播图-->
        <mt-swipe :auto="5000" :defaultIndex="0">
            <mt-swipe-item><img src="../../images/场景.jpg"></mt-swipe-item>
            <mt-swipe-item><img src="../../images/贵州风景.jpg"></mt-swipe-item>
            <mt-swipe-item><img src="../../images/田园.jpg"></mt-swipe-item>
        </mt-swipe>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/新闻资讯.svg">
                <div class="mui-media-body">新闻资讯</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/图片分享.svg">
                <div class="mui-media-body">图片分享</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/商品购买.svg">
                <div class="mui-media-body">商品购买</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/留言反馈.svg">
                <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/视频专区.svg">
                <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/联系我们.svg">
                <div class="mui-media-body">联系我们</div></a></li>

        </ul>
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
     height: 250px;
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
</style>