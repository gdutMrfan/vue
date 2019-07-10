<template>

   <div class="App-container">
       <!--头部区域-->
       <mt-header fixed title="vue项目" class="header">
           <span  slot="left" v-show="flag">
               <mt-button icon="back" @click="goBack">返回</mt-button>
           </span>
       </mt-header>
       <!--主体区域-->
      <transition>
          <router-view></router-view>
      </transition>
       <!--页脚区域-->
       <nav class="mui-bar mui-bar-tab">
           <router-link class="mui-tab-item-lib" to="/home">
               <span class="mui-icon mui-icon-home"></span>
               <span class="mui-tab-label">首页</span>
           </router-link>
           <router-link  class="mui-tab-item-lib " to="/member">
               <span class="mui-icon mui-icon-contact"></span>
               <span class="mui-tab-label">会员</span>
           </router-link >
           <router-link  class="mui-tab-item-lib " to="/shopCar">
               <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge " id="badge">{{$store.getters.getAllCount}}</span></span>
               <span class="mui-tab-label">购物车</span>
           </router-link >
           <router-link  class="mui-tab-item-lib" to="/search">
               <span class="mui-icon mui-icon-search"></span>
               <span class="mui-tab-label">搜索</span>
           </router-link >
       </nav>


   </div>
</template>

<script>
export  default {
    data(){
        return {
           flag:false
        }
    },
    created(){
      if(this.$route.path==='/home'){
          this.flag=false
      }else {
          this.flag=true
      }
    },
    methods:{
        goBack(){
            this.$router.go(-1)
        }
    },
    watch:{
        "$route.path":function (newVal) {
            if(newVal==='/home'){
              this.flag=false
            }else {
              this.flag=true
            }
        }
    }
}
</script>

<style scoped>
.App-container{
    padding-top: 100px;
    padding-bottom: 120px;
    font-size: 40px;
    overflow-x: hidden;
}
.header{
    height: 100px;
    font-size: 40px;
}
.v-enter{
    opacity: 0;
    transform: translateX(100%);

}
.v-leave-to{
    opacity: 0;
    transform: translateX(-100%);
    position: absolute;
}
.v-enter-active,.v-leave-active{
    transition: all 0.5s ease;
}
.mint-header{
    z-index: 99!important;
}
.mui-bar-tab{
    height: 120px;
}
.mui-bar-tab .mui-tab-item-lib .mui-icon~.mui-tab-label{
    font-size: 30px;
    overflow: visible;
    display: block;
    text-overflow: ellipsis;

}
.mui-bar-tab .mui-tab-item-lib .mui-icon  {
    width: 50px;
    height: 50px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar .mui-icon {
    font-size: 60px;
    position: relative;
    z-index: 20;
    padding-bottom: 10px;
    margin-bottom: 20px;
}
.mui-bar-tab .mui-tab-item-lib.mui-active{
    color: #007aff;
}
.mui-bar-tab .mui-tab-item-lib{
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-lib .mui-icon{
    width: 50px;
    height: 50px;
    padding-top: 0;
    padding-bottom: 0;
}
#badge{
    font-size: 25px;
    border-radius: 50%;
    font-weight: bold;
}
.mint-header .mint-button{
    font-size: 35px;
}
</style>