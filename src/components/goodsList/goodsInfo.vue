<template>
    <div class="goodsInfo-container">
       <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
           <div class="ball" v-show="ballFlag" ref="ball"></div>
       </transition>
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner show">
                   <img :src="info.url">
                 </div>
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-header title">{{info.title}}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                   <p class="price">
                       <span class="new_price">现价：￥{{info.nPrice}}</span>
                       <del class="old_price">原价：￥{{info.oPrice}}</del>
                   </p>
                   <p>
                       <span class="number">购买数量：<number @getCount="getNumber"></number></span>
                   </p>
                   <p>
                       <mt-button type="primary" size="small" class="btn-font">立即购买</mt-button>
                       <mt-button type="danger" size="small" class="btn-font" @click="addShopCar">加入购物车</mt-button>
                   </p>
                </div>
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                   <p>商品货号：{{info.GN}}</p>
                   <p>库存情况：{{info.GS}}</p>
                   <p>上架时间：{{info.GT}}</p>
                </div>
            </div>
            <div class="mui-card-footer">
              <mt-button type="primary" size="large" class="btn-font1">图文介绍</mt-button>
              <mt-button type="danger" size="large" class="btn-font1">商品评论</mt-button>
            </div>
        </div>
    </div>
</template>

<script>
    import numBox from  '../subComment/box_number.vue'
    export default {
        data() {
            return {
                info: {},
                id: this.$route.params.id,
                ballFlag:false,
                selectCount:1

            }
        },
        created() {
            this.getPhoto()
        },
        methods: {
            getPhoto() {
                this.$http.get("GoodsList.json").then(result => {
                    if (result.body.status == 0) {
                        for (var i = 0; i < result.body.goodsInfo.length; i++) {
                            if (result.body.goodsInfo[i].id == this.id) {
                                this.info = result.body.goodsInfo[i]
                            }
                        }
                    }
                })
            },
            addShopCar(){
                this.ballFlag=!this.ballFlag
                var goodsInfo={
                    id:this.id,count:this.selectCount,price:this.info.nPrice,selected:true,url:this.info.url,title:this.info.title
                }
                this.$store.commit("addToCar",goodsInfo)
            },
            beforeEnter(el){
                el.style.transform="translate(0,0)"
            },
            enter(el,done){
                el.offsetHeight
                const ballPosition=this.$refs.ball.getBoundingClientRect();
                const badgePosition=document.getElementById("badge").getBoundingClientRect()
                const X=badgePosition.left-ballPosition.left
                const Y=badgePosition.top-ballPosition.top
                el.style.transform=`translate(${X}px,${Y}px)`
                el.style.transition="all 0.5s cubic-bezier(.03,-0.3,.83,.67)"
                done()

            },
            afterEnter(el){
                this.ballFlag=!this.ballFlag
            },
            getNumber(count){
                this.selectCount=count
            }
        },
        components:{
           number:numBox
        }
    }
</script>

<style scoped>
.goodsInfo-container{
    background-color: #ccc;
    overflow: hidden;
}
img{
        height: 600px;
        min-height: 500px;
    }
.show{
    display: flex;
    align-items: center;
    justify-content: center;


}
.title{
    font-size: 40px;
}
p{
    margin-top: 20px;
    line-height: 50px;
}
.new_price{
    font-size: 35px;
    font-weight: bold;
    color: red;
    margin: 0 10px;
}
.old_price{
    font-size: 35px;
    margin: 0 10px;
}
.number{
    font-size: 35px;
}
.btn-font{
    font-size: 35px;
    height: 60px;
    margin-right:  20px;
}
.mui-card-footer{
    display: block;

}
.btn-font1{
        margin: 30px 0;
        height: 60px;
        font-size:30px ;
    }
.mui-card-content-inner p{
    font-size: 35px;
}
.mui-card-header{
    font-size: 40px;
    font-weight: bold;
}
.ball{
    background-color: red;
    width: 30px;
    height: 30px;
    border-radius: 52%;
    position: absolute;
    z-index: 99;
    top: 915px;
    left: 277px;

}
</style>