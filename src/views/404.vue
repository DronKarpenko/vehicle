<template>
<div class="page-not-found">
  <div class="page-not-found__wrap">
    <img src="@/assets/img/icons/404.svg" alt="404" class="page-not-found__img">
    <h1 class="page-not-found__title">404 page</h1>
    <p class="page-not-found__text">Page not found or such pages do not exist.</p>
    <router-link to='/'>
      <v-btn title="Go home"/>
    </router-link>
  </div>
</div>
</template>

<script>
import VBtn from "@/components/v-btn";
export default {
  name: "PageNotFound",
  components: {VBtn}
}
</script>

<style lang="sass">
.page-not-found
  width: 100%
  height: 100vh
  display: flex
  justify-content: center
  align-items: center
  &__wrap
    display: flex
    flex-direction: column
    align-items: center
  &__title
    margin: 20px 0 5px 0
    font-weight: 700
    font-size: 45px
    line-height: 140.5%
    color: #41456B
  &__text
    margin-bottom: 40px
    font-weight: 400
    font-size: 16px
    line-height: 180%
    text-align: center
    letter-spacing: 0.02em
    color: #606276
@media screen and (max-width: 480px)
  .page-not-found__wrap
    width: 50%
  .page-not-found__title
    font-size: 30px
</style>