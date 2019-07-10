<template>
    <div class="shopCar-container">
        <div class="goods-list">
            <div class="mui-card" v-for="(item,i) in goodsList" :key="item.id">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner goods">
                        <mt-switch v-model="item.selected" @change="selectedChange(item.id,item.selected)"></mt-switch>
                        <img :src="item.url">
                        <div class="info">
                           <h1 class="title">{{item.title}}</h1>
                            <p>
                                <span class="price">￥{{item.price}}</span>
                                <numbox :initCount="item.count" :id="item.id"></numbox>

                            </p>
                        </div>
                        <a href="" @click.prevent="remove(item.id,i)">删除</a>
                    </div>
                </div>
            </div>
            <div class="mui-card">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner settle">
                       <div class="left">
                           <p>总计（不含运费）</p>
                           <p>已勾选商品<span>{{$store.getters.getAllCountAndAmount.count}}件</span>，合计<span>￥{{$store.getters.getAllCountAndAmount.amount}}</span></p>
                       </div>
                       <mt-button type="danger" class="btn">去结算</mt-button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import numbox from '../subComment/shopCar_number.vue'
    export default {
        components:{
           numbox:numbox
        },
        data(){
            return {
                goodsList:[]
            }
        },
        created(){
            this.getGoodsList()
        },
        methods:{
            getGoodsList(){
                this.goodsList=this.$store.state.car
            },
            remove(id,index){
                this.goodsList.splice(index,1)
                this.$store.commit('removeData',id)
            },
            selectedChange(id,selected){
                this.$store.commit("updateSelected",{id:id,selected:selected})
            }
        }
    }
</script>

<style scoped>
.shopCar-container{
    background-color: #eeeeee;
    overflow: hidden;
}
.goods-list img{
    width: 150px;
    height: 150px;
    margin-right: 50px;
}
.price{
    color: red;
    font-size: 30px;
    font-weight: bold;
    margin-right: 20px;
}
a{
    font-size: 30px;
    margin-left: 280px;
}
.goods{
    display: flex;
    align-items: center;
}
.info{
    height: 130px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

}
.settle{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.left p{
    font-size: 35px;
    font-weight: bold;
    line-height: 50px;
}
span{
    color: red;
    font-weight: bolder;
}
.btn{
    font-size: 40px;
    height: 100px;
}
</style>