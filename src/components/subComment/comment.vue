<template>
    <div class="cmt-container">
        <h1>发表评论</h1>
        <hr>
        <textarea placeholder="请输入评论内容（最多不超过120个字）" class="text" v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click="postComment" class="font">发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item" v-for="(item,i) in comment" :key="i" >
                <div class="cmt-title">第{{i+1}}楼&nbsp;&nbsp;用户：{{item.user}}&nbsp;&nbsp;发表时间：{{item.time | dateFormat}}</div>
                <div class="cmt-content">{{item.content}}</div>
            </div>
        </div>
        <mt-button type="danger" size="large" @click="getMore" class="font">加载更多</mt-button>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui'
    export default {
        data() {
            return {
                comment:[],
                tag:0,
                msg:''

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
            },
            postComment(){
                if(this.msg.trim().length===0){
                 return   Toast("评论内容不能为空")
                }
                var cmt={user:"匿名用户",time:new Date(),content:this.msg}
                this.comment.unshift(cmt)
            }
        },
        props:["Id"],
        filters:{
            'dateFormat':function (dateStr,pattern='') {
                var dt = new Date(dateStr);
                var y = dt.getFullYear();
                var m = dt.getMonth().toString().padStart(2, "0");
                var d = dt.getDate().toString().padStart(2, "0");
                if (pattern.toLowerCase() == "yyyy-hh--dd") {
                    return `${y}-${m}-${d}`;
                } else {
                    var h = dt.getHours().toString().padStart(2, "0");
                    var min = dt.getMinutes().toString().padStart(2, "0");
                    var sec = dt.getSeconds().toString().padStart(2, "0");
                    return `${y}-${m}-${d} ${h}-${min}-${sec} `;
                }
            }
        }
    }
</script>

<style scoped>
.cmt-container h1{
    font-size: 35px;
}
.cmt-container hr{
    margin: 5px 0px;
}
.cmt-container .text{
    font-size: 25px;
    height: 85px;
    margin: 5px;
}
.cmt-list .cmt-title{
    font-size: 25px;
    background-color:#cccccc;
    line-height: 30px;
}
.cmt-list .cmt-content{
    font-size: 25px;
    text-indent: 2em;
    line-height:30px
}
.cmt-container .cmt-list{
    margin: 5px 0;
}
    .font{
        font-size: 25px;
        height: 80px;
    }
</style>