<template>
  <Header class="request-header"/>
  <main class="request-wrapper">
    1
  </main>
</template>

<script>
import Header from "@/components/Header";
export default {
  name: "RequestPage",
  components: {Header}
}
</script>

<style lang="sass">

.request-header
  .to-request-btn
    display: none

.request-wrapper
  display: flex
  justify-content: center
  align-items: center

</style>