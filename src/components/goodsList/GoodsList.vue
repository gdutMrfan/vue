<template>
    <div class="goods-list">
        <div class="goods-item" v-for="item in goodsList" :key="item.id" @click="getDetail(item.id)">
          <img :src="item.url" >
          <h1 class="title">{{item.title}}</h1>
          <div class="info">
                   <p class="price">
                      <span class="new">￥{{item.nPrice}}</span>
                      <span class="old">￥{{item.oPrice}}</span>
                   </p>
                   <p class="sell">
                      <span>热卖中</span>
                      <span>剩余{{item.GS}}件</span>
                  </p>
      </div>
      </div>

    </div>
</template>

<script>
    export default {
        data(){
           return {
               goodsList:[]
           }
        },
        created(){
          this.getGoodsInfo()
        },
        methods:{
            getGoodsInfo(){
                this.$http.get("GoodsList.json").then(result=>{

                    if(result.body.status==0){
                        this.goodsList=result.body.goodsInfo
                    }
                })
            },
            getDetail(id){
                this.$router.push( '/home/goodsInfo/'+id)
            }
        }
    }
</script>

<style scoped>
.goods-list{
    display: flex;
    flex-wrap: wrap;
    padding: 13px;
    justify-content: space-between;

}
.goods-list .goods-item{
        width: 49%;
        box-shadow: 0 0 10px #cccccc;
        border: 2px solid #cccccc;
        margin: 8px 0;
        padding: 5px;
        min-height: 450px;
       flex-direction: column;
       justify-content: space-between;
       display: flex;

       }
.goods-item img{
    width: 100%;
    min-height: 400px;
}
.goods-list .goods-item .title{
    font-size: 35px;
}
 .goods-list .goods-item .info{
    background-color: #eeeeee;
     width: 100%;
}
.info .price{
    padding: 10px;
}
.info .price .new{
    font-size: 30px;
    color: red;
    padding: 10px;
    font-weight: bold;
}
.info .price .old{
    text-decoration: line-through;
    font-size: 25px;
}
.info .sell{
    font-size: 30px;
    display:flex;
    justify-content:space-between;
}
</style>