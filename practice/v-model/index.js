import Vue from 'vue'

const component = {
    model: {
        prop: 'value1',
    },
    props:['value1'],
    template: `
        <div>
            <input type="text" :value="value1" @input="handleChange">
        </div>
    `,
    methods: {
        handleChange(e) { 
            this.$emit('input',e.target.value)
        }
    }
}

new Vue({
    el: "#root",
    data: {
        value:"123"
    },
    components: {
        comp:component
    },
    template: "<comp v-model='value'></comp>",
})