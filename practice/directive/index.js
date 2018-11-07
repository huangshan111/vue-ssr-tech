import Vue from 'vue'

new Vue({
    template: `
    <div>
        <div v-if="text==0"></div>
        <div v-else-if='text==1'>1</div>
        <div v-else>不是0也不是1</div>
        <div v-show='active'>show data </div>
        <p v-html='html'></p>
        <ul>
            <li v-for='(item,index) in arr'>{{item}}:{{index}}</li>
        </ul>
        <ul>
            <li v-for='(value,key,index) in obj'>{{value}}:{{key}}:{{index}}</li>
        </ul>
        <input type="text" v-model.lazy="text" />
        <div>{{text}}</div>
        <input type="checkbox" v-model="active"/>checkbox1

        <div>
            <input type="checkbox"  value="1" v-model="arr"/>1
            <input type="checkbox"  value="2" v-model="arr"/>2
            <input type="checkbox"  value="3" v-model="arr"/>3
            <input type="radio" value="one" v-model="picked"/>
            <input type="radio" value="two" v-model="picked"/>
        </div>
    </div>
    `,
    el: '#root',
    data: {
        picked:"",
        text: 0,
        active: true,
        html: '<span>i am jack<span>',
        arr: [],
        obj: {
            a: '1',
            b: '2',
            c:'3'
        }
    }
})