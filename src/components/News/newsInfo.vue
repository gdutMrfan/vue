<template>
    <div class="newsInfo-container">
        <h1 class="title">{{newInfo.title}}</h1>
        <p class="subTitle">
            <span>发表时间：{{newInfo.time}}</span>
            <span>点击{{newInfo.click}}数</span>
        </p>
        <hr>
        <div class="content" v-html="newInfo.content"></div>
        <cmt-content :Id="this.id"></cmt-content>

    </div>
</template>

<script>
    import comment from '../subComment/comment.vue'
    export default {
       data(){
           return{
               id:this.$route.params.id,
               newInfo:{}
           }
       },
        created(){
           this.getInfo()
        },
        methods:{
           getInfo(){
               this.$http.get("newListsData.json").then(result=>{
                   if(result.ok==true){
                       for(var i=0;i<result.body.newList.length;i++){
                           if(result.body.newList[i].id==this.id){
                               this.newInfo=result.body.newList[i]
                           }
                       }
                   }
               })
           }
        },
        components:{
           "cmt-content":comment
        }
    }
</script>

<style>
.newsInfo-container .title{
    font-size: 35px;
    text-align: center;
    padding: 0 10px;
    color: red;
    width: 100%;
}
.newsInfo-container .subTitle{
    color: blue;
    display: flex;
    justify-content: space-between;
    font-size: 25px;
}
.content{
    margin: 0;
    font-size: 25px;
    line-height: 40px;
    padding: 5px;
}
.content img{
    width: 100%;
    margin-bottom: 10px;
}
.newsInfo-container hr{
    margin: 5px 0px;
}
</style>