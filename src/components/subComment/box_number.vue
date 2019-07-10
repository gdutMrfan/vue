<template>
    <div class="mui-numbox" style="width: 180px;height: 60px;font-weight: bold;font-size: 30px" data-numbox-min='1'>
        <button class="mui-btn-numbox-minus" type="button">-</button>
        <input class="mui-input-numbox" type="number" value="1" @change="countChange" ref="numbox"/>
        <button class="mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>

<script>
    import mui from '../../lib/mui/js/mui.js'
    export default {
       mounted() {
           mui('.mui-numbox').numbox()
       },
       methods:{
           countChange(){
               this.$emit("getCount",parseInt(this.$refs.numbox.value))
           }
       }
    }
</script>

<style scoped>

</style>