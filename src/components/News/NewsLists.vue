<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newsLists" :key="item.id">
                <router-link :to="'/home/newsInfo/'+item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.url">
                    <div class="mui-media-body">
                        <h1>{{item.title}}</h1>
                        <p class='mui-ellipsis'>
                            <span>发表时间：{{item.time}}</span>
                            <span>点击数次：{{item.click}}次</span>
                        </p>
                    </div>
                </router-link>
            </li>

        </ul>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui'
    export default {
        data(){
            return {
                newsLists:[]
            }
        },
        created(){
            this.getNewList()
        },
        methods:{
            getNewList(){
                this.$http.get("newListsData.json").then(result=>{
                    if(result.ok==true){
                        this.newsLists=result.body.newList
                    }
                },err=>{
                    Toast("请求数据失败")
                })
            }
        }
    }
</script>

<style scoped>
.mui-table-view h1{
        font-size: 35px;
    }
.mui-table-view .mui-ellipsis{
       padding-top: 10px;
       padding-bottom: 10px;
       font-size: 25px;
       color: blue;
       display: flex;
       justify-content: space-between;
}
.mui-table-view-cell,.mui-media{
    height: 100px;
}
    img{
        height: 86px!important;
    }
</style>