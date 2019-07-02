<template>
    <div>
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a class="mui-control-item mui-active" @click="getPhoto(0)">
                        推荐
                    </a>
                    <a class="mui-control-item" @click="getPhoto(1)">
                        生活旅行
                    </a>
                    <a class="mui-control-item" @click="getPhoto(2)">
                        科技
                    </a>
                    <a class="mui-control-item" @click="getPhoto(3)">
                        家居生活
                    </a>
                    <a class="mui-control-item" @click="getPhoto(4)">
                        明星美女
                    </a>
                </div>
            </div>

        </div>
        <ul class="photoList">
            <li v-for="item in imgList" :key="item.url">
                <img v-lazy="item.url">
                <div class="info">
                    <h1 class="info-title">{{item.title}}</h1>
                    <div class="info-body">{{item.info}}</div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import mui from '../../lib/mui/js/mui.js'
    export default {
        data(){
             return{
                imgList:[]
             }
        },
        created(){
           this.getPhoto(0)
        },
        mounted(){
            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            });
        },
        methods:{
              getPhoto(id){
                  this.imgList=[]
                 this.$http.get("photo.json").then(result=>{
                     if(result.body.status===0){
                         for(var i=0;i<result.body.photo.length;i++){
                             if(result.body.photo[i].id==id){
                                 this.imgList.push(result.body.photo[i])
                             }
                         }
                     }
                 })
              }
        }
    }
</script>

<style scoped>
.photoList{
    list-style: none;
    margin: 0;
    padding: 5px;
    padding-bottom: 0;
}
.photoList li{
    background-color: #cccccc;
    text-align: center;
    margin-bottom: 5px;
    box-shadow: 0 0 10px #999;
    position: relative;

}
li img[lazy=loading] {
    width: 40px;
    height: 300px;
    margin: auto;

}
img{
   width: 100%;
   vertical-align: middle;
    height: 250px;
}
.info{
    color: white;
    text-align: left;
    position: absolute;
    bottom: 0;
    background-color: rgba(0,0,0,0.4);
    max-height: 60px;
}
.info .info-title{
    font-size: 14px;

}
.info .info-body{
    font-size: 12px;
}
</style>