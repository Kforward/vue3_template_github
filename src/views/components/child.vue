<template>
    <el-button @click="handleClick">点击</el-button>
</template>

<script lang="ts" setup>
const emit = defineEmits(['testHandle'])

async function handleClick(): Promise<void> {
    const res: string = (await _promise()) as string;

    console.log(res)

    emit('testHandle', res)
}

function _promise() {
    return new Promise((resolve, reject) => {
        resolve('12345-param')
    })
}
</script>