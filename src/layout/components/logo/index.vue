<template>
    <div class="logo-wrapper">
        <img
          alt="Vue logo"
          class="logo"
          src="@/assets/logo.svg"
          width="24"
          height="24"
        />
        <div>后台管理系统</div>
    </div>
</template>

<style lang="scss" scoped>
.logo-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;

    height: var(--header-height-value);

    border-bottom: 1px solid var(--el-menu-border-color);
}
.logo {
    display: block;
    margin-right: 8px;
}
</style>