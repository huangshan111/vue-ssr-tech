import Vue from 'vue'

const component = {
    props: {
        active: {
            type: Boolean,
            default:true
        },
        propOne: String
    },
    template: `
        <div>
            <input v-if="active" type="text" v-model="text">
            <span>{{propOne}}</span>
            <p v-text="text"></p>
        </div>
    `,
    data() { 
        return {
            text:0
        }
    },
    mounted() { 
        console.log("component mounted")
    }
}

const parent = new Vue({
    name:"parent"
})

const component2 = {
    // parent:parent,
    extends: component,
    data() {
        return {
            text:1
        }
    },
    mounted() { 
        console.log(this.$parent.$options.name)
    }
}

new Vue({
    parent:parent,
    name:"ROOT",
    el: "#root",
    components: {
        Comp:component2
    },
    template: "<div><comp></comp></div>",
    mounted() { 
        console.log(this.$parent.$options.name)
    }
})

// const myComp = Vue.extend(component)

// new myComp({
//     el: '#root',
//     propsData: {
//         active: true,
//         propOne:"child"
//     },
//     data: {
//         text:'my text'
//     },
//     mounted() { 
//         console.log("instance mounted")
//     }
// })