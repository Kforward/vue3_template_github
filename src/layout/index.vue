<template>
    <div class="common-layout">
      <el-container>
        <el-aside class="side-bar">
            <Logo />
            <SideBar />
        </el-aside>

        <container class="main-container">
            <Header />
            <Main />
        </container>
      </el-container>
    </div>
</template>

<script lang="ts" setup>
import Logo from "./components/logo/index.vue";
import SideBar from "./components/sideBar/index.vue";
import Header from "./components/header/index.vue";
import Main from "./components/main/index.vue";
</script>

<style lang="scss" scoped>
.common-layout,
.el-container {
    height: 100%;
}
.main-container {
    display: flex;
    flex-direction: column;
    flex: 1;
    flex-shrink: 0;
}
.side-bar {
    width: 200px;
    flex-shrink: 0;
    height: 100%;
}

.el-aside {
    border-right: solid 1px var(--el-menu-border-color);
}
</style>