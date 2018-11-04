import Vue from 'vue'

const app = new Vue({
    // el: '#root',
    template: '<div ref="test">{{text}} {{obj.a}}</div>',
    data: {
        text: 0,
        obj: {}
    }
    // watch:{
    //     text (newValue, oldValue) {
    //         console.log(`new ${newValue},old ${oldValue}`)
    //     }
    // }
})

app.$mount('#root')

let i = 1

setInterval(() => {
    //  app.text += 1
    // app.$options.data.text+=1
    // app.$data.text+=1
    //app.$set(app.obj,'a',i++)
    app.$data.text+=1
    app.$data.text+=1
    app.$data.text+=1
    app.$data.text+=1
    app.$data.text+=1
}, 1000)


app.$nextTick(()=>{
    console.log('dom is update')
})

// console.log(app.$data)
// console.log(app.$props)
// console.log(app.$options)
// console.log(app.$el)
// console.log(app.$options.data.text)
// console.log(app.text===app.$options.data.text)
// app.$options.render = (h) => {
//     return h('div',{},'new render function')
// }
// console.log(app.$refs)
//console.log(app.$el)
// console.log(app.$root==app)
// console.log(app.$scopedSlots)
// console.log(app.$slots)
// console.log(app.$isServer)

// const unwatch = app.$watch('text',(newValue, oldValue) => {
//     console.log(`new ${newValue},old ${oldValue}`)
// })

// setTimeout(() => {
//     unwatch()
// }, 10000);

app.$once('test',()=>{
    console.log('test ----------------')
})

app.$emit('test')
app.$emit('test')
app.$emit('test')