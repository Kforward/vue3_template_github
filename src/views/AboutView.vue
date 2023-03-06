<template>
  <div class="about">
    <el-button v-for="item in list" :key="item.id" @click="traversal">{{ item.name }}</el-button>
  </div>
</template>

<script lang="ts">
<<<<<<< HEAD
import { defineComponent } from "vue";
=======
import { defineComponent, reactive } from "vue"

import {stack, stackObj} from '../utils/StackArray.js';
>>>>>>> 76f06d1 (feat: 数据结构练习-栈)

export default defineComponent({
  name: "AboutComponent",
  setup(props, ctx) {
    // const { attrs, slots, emit, expose } = ctx
    console.log("ctx", ctx);
    console.log("props", props);
<<<<<<< HEAD
  },
});
=======
    const list = reactive([
      {
        id: 1000,
        name: 1,
      },{
        id: 2000,
        name: 2
      },{
        id: 3000,
        name: 3
      }, {
        id: 4000,
        name: 4
      },
      {
        id: 2000,
        name: 5
      }
    ])
    
    stackObj.push(1)
    stackObj.push(2)
    stackObj.push(3)
    stackObj.push(4)
    

    stack.push(1);
    stack.size();

    console.log(stack.size());

    console.log(stack);
    console.log(stackObj);

    console.log(stackObj.peek())
    console.log(stackObj.pop())
    console.log(stackObj.size())
    

    function timeConsuming(inputVal: number, time = 0){
      const timerId = setTimeout(() => {
        console.log(inputVal)
      }, time)
    }
    
    function traversal(){
      for(let i = 0; i < 5; i++){
        let timer = i === 4 ? 2500 : i * 1000;
        timeConsuming(i, timer)
      }
    }

    return {list, traversal}
  }
})
>>>>>>> 76f06d1 (feat: 数据结构练习-栈)
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
