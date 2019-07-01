<template>
    <div class="cmt-container">
        <h1>发表评论</h1>
        <hr>
        <textarea placeholder="请输入评论内容（最多不超过120个字）" class="text"></textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item" v-for="(item,i) in comment" :key="item.user" >
                <div class="cmt-title">第{{i+1}}楼&nbsp;&nbsp;用户：{{item.user}}&nbsp;&nbsp;发表时间：{{item.time}}</div>
                <div class="cmt-content">{{item.content}}</div>
            </div>
        </div>
        <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui'
    export default {
        data() {
            return {
                comment:[],
                tag:0

            }
        },
        created(){
            this.getComment()
        },
        methods: {
            getComment(){
                this.$http.get("cmtList.json").then(result=>{
                    if(result.body.status===200){
                        for(var i=0;i<result.body.message.length;i++){
                            if(result.body.message[i].id===this.Id&&result.body.message[i].tag==this.tag){
                                this.comment.push(result.body.message[i])
                            }else{
                                if(this.tag>1){
                                    Toast("无更多数据加载！")
                                }
                            }
                        }
                    }
                    else {
                        Toast("获取数据失败！")
                    }
                })
            },
            getMore(){
                this.tag++
                this.getComment()
            }
        },
        props:["Id"]
    }
</script>

<style scoped>
.cmt-container h1{
    font-size: 18px;
}
.cmt-container hr{
    margin: 5px 0px;
}
.cmt-container .text{
    font-size: 12px;
    height: 85px;
    margin: 5px;
}
.cmt-list .cmt-title{
    font-size: 13px;
    background-color:#cccccc;
    line-height: 30px;
}
.cmt-list .cmt-content{
    font-size: 13px;
    text-indent: 2em;
    line-height:30px
}
.cmt-container .cmt-list{
    margin: 5px 0;
}
</style>