<template>
    <Child @testHandle="handleEvent"/>
    <div>{{ message }}</div>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue';
import Child from './child.vue';

const message: Ref<string> = ref('我是我自己');
const taggle: Ref<boolean> = ref(false);

function handleClick(): void {
    console.log("被触发");
    
    message.value = taggle.value ? '我自己点击我自己' : '我又是我自己';
    taggle.value = !taggle.value
}

function handleEvent(param: string): void {
    console.log('接收');
    
    message.value = `我是我自己 - 来自子组件的消息 ===> ${param}`
}
</script>