import Vue from 'vue'

const component = {
    props: {
        active: {
            type: Boolean,
            validator(value) {
                return typeof value === 'boolean'
            }
        },
        propOne: String
    },
    template: `
        <div>
            <input type="text" v-model="text">
            <span v-if="active" @click="handleChange">{{propOne}}</span>
        </div>
      
    `,
    data() { 
        return {
            text:0
        }
    },
    methods: {
        handleChange() { 
            this.$emit('change')
        }
    }
}

// Vue.component("comp",component)

new Vue({
    data:{
        prop1:"s"
    },
    components: {
        CompOne:component
    },
    mounted() {
        console.log(this.$refs.comp1)
    },
    el: "#root",
    template: `
    <div> 
       <comp-one ref="comp1" :active="false" :prop-one="prop1" @change="handleChange"></comp-one> 
       <comp-one prop-one="2"></comp-one>
    </div>
    `,
    methods: {
        handleChange() { 
            this.prop1+="s"
        }
    }
})