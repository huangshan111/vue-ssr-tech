import Vue from 'vue'

const app = new Vue({
    el: '#root',
    //template: '<div>{{text}}</div>',
    data:{
        text:0
    },
    beforeCreate (){
        console.log(this,'beforeCreate')
    },
    created (){
        console.log(this,'created')
    },
    beforeMount (){
        console.log(this,'beforeMount')
    },
    mounted (){
        console.log(this,'mounted')
    },
    beforeUpdate (){
        console.log(this,'beforeUpdate')
    },
    updated (){
        console.log(this,'updated')
    },
    beforeDestroy (){
        console.log(this,'beforeDestroy')
    },
    beforeCreate (){
        console.log(this,'beforeCreate')
    },
    destroyed (){
        console.log(this,'destroyed')
    },
    render (h){
        throw new TypeError('渲染错误')
        return h('div',{}, this.text)
    },
    renderError (h, err){
        return h('div',{}, err.stack)
    },
    errorCaptured () {
        
    }
})

// app.text = 2;