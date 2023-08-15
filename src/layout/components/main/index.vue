<template>
    <div class="main-wrapper">
        <RouterView class="content-view"/>
    </div>
</template>

<style lang="scss" scoped>
.main-wrapper {
    padding: 16px;
    background-color: rgb(200 200 200 / 20%);
    flex: 1;
}

.content-view {
    height: 100%;
    padding: 8px;
    border-radius: 4px;
    background-color: #ffffff;
}
</style>