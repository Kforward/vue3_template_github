<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutComponent",
  setup(props, ctx) {
    // const { attrs, slots, emit, expose } = ctx
    console.log("ctx", ctx);
    console.log("props", props);
  },
});
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
