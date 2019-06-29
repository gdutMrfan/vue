<template>
    <div>
        <!--轮播图-->
        <mt-swipe :auto="5000" :defaultIndex="0">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
    export default {
    data(){
        return{

        }
    },
    created(){
      this.getImages()
    },
    methods:{
        getImages(){
            this.$http.get("../../image.php").then(result=>{
                console.log(JSON.parse(result.body))
            },error=>{
                alert(123)
            })
        }
    }
}
</script>

<style scoped>
 .mint-swipe{
     height: 200px;
 }
.mint-swipe-item:nth-child(1){
     background-color: red;
 }
 .mint-swipe-item:nth-child(2){
     background-color: blue;
 }
 .mint-swipe-item:nth-child(3){
     background-color: green;
 }
</style>