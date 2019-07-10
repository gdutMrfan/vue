<template>
    <div class="mui-numbox" style="width: 180px;height: 50px;font-weight: bold;font-size: 30px" data-numbox-min='1'>
        <button class="mui-btn-numbox-minus" type="button">-</button>
        <input class="mui-input-numbox" type="number" :value="initCount" @change="countChange" ref="numbox"/>
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
                this.$store.commit('updateCount',{count:this.$refs.numbox.value,id:this.id})
            }
        },
        props:['initCount','id']
    }
</script>

<style scoped>

</style>