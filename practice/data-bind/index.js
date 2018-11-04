import Vue from 'vue'

new Vue({
    el: '#root',
    template:
     `<div :id="aaa" @click="handleClick" :class="{red:isRed,haha:isActive}" :style="apple,bannae">
        <p v-html='html'></p>
      </div>`,
    data: {
        text: 0,
        aaa: 'main',
        isActive: true,
        isRed: true,
        arr: [1,2,3],
        html:'<span>xmss<span>',
        apple:{
            color:'red'
        },
        bannae:{
            color:'blue'
        }
    },
    methods:{
        handleClick(){
            alert("aaaaa")
        }
    }
})