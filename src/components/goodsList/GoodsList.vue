<template>
    <div class="goods-list">
        <div class="goods-item">
          <img src="../../images/苹果XS.jpg">
          <h1 class="title">苹果XS</h1>
          <div class="info">
                   <p class="price">
                      <span class="new">￥7999</span>
                      <span class="old">￥8099</span>
                   </p>
                   <p class="sell">
                      <span>热卖中</span>
                      <span>剩余60件</span>
                  </p>
      </div>
      </div>
        <div class="goods-item">
             <img src="../../images/苹果XR.jpg">
            <h1 class="title">苹果XR</h1>
            <div class="info">
                <p class="price">
                   <span class="new">￥5499</span>
                   <span class="old">￥5699</span>
                </p>
                <p class="sell">
                 <span>热卖中</span>
                 <span>剩余30件</span>
               </p>
       </div>
</div>
        <div class="goods-item">
             <img src="../../images/I8.jpg">
             <h1 class="title">苹果8</h1>
             <div class="info">
               <p class="price">
                  <span class="new">￥4399</span>
                  <span class="old">￥4599</span>
                </p>
               <p class="sell">
                  <span>热卖中</span>
                  <span>剩余100件</span>
               </p>
        </div>
</div>
        <div class="goods-item">
        <img src="../../images/P30.jpg">
        <h1 class="title">华为P30</h1>
        <div class="info">
            <p class="price">
                <span class="new">￥3988</span>
                <span class="old">￥4088</span>
            </p>
            <p class="sell">
                <span>热卖中</span>
                <span>剩余100件</span>
            </p>
        </div>
    </div>
        <div class="goods-item">
            <img src="../../images/P30P.jpg">
            <h1 class="title">华为P30 Pro</h1>
            <div class="info">
                <p class="price">
                    <span class="new">￥5488</span>
                    <span class="old">￥5688</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余100件</span>
                </p>
            </div>
        </div>
        <div class="goods-item">
            <img src="../../images/N5I.jpg">
            <h1 class="title">华为nova 5I</h1>
            <div class="info">
                <p class="price">
                    <span class="new">￥2199</span>
                    <span class="old">￥2399</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余200件</span>
                </p>
            </div>
        </div>
        <div class="goods-item">
            <img src="../../images/KXO.jpg">
            <h1 class="title">卡西欧男士运动手表</h1>
            <div class="info">
                <p class="price">
                    <span class="new">￥3299</span>
                    <span class="old">￥3699</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余100件</span>
                </p>
            </div>
        </div>
        <div class="goods-item">
            <img src="../../images/库里6.jpg">
            <h1 class="title">库里6篮球鞋</h1>
            <div class="info">
                <p class="price">
                    <span class="new">￥1199</span>
                    <span class="old">￥1299</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余88件</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GoodsList"
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