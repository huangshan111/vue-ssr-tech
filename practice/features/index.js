import Vue from 'vue'

const component = {
    // template: `
    //     <div :style="style">
    //         <slot name="header"></slot>
    //         <slot name="body"></slot>
    //     </div>
    // `,
    template: `
         <div :style="style">
            <slot :value="value" aaa="wocao"></slot>
         </div>
     `,
    data() {
        return {
            text:1,
            style: {
                width: '200px',
                height: '200px',
                border:'1px solid #aaa'
            },
            value:"这是组件里的value"
        }
    }
}

new Vue({
    el: "#root",
    data: {
        text:2
    },
    components: {
        CompOne:component
    },
    template: `
        <comp-one>
            <span slot-scope="props">{{props.value}}  {{props.aaa}}</span>
        </comp-one>
    `
})