<template>
  <div class="preloader" v-if="!isLoadedPage">
    <div class="preloader-content">
      <img src="@/assets/img/icons/logo.svg" alt="Loading..." class="preloader-img">
      <p class="preloader-text">Loading <img src="@/assets/img/icons/loader-dots.svg" alt="dots" class="preloader-dots"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-preloader",
  data: () => {
    return {
      isLoadedPage: false
    }
  },
  mounted() {
    document.onreadystatechange = () => {
      if (document.readyState == "complete") {
        this.isLoadedPage = true;
      }
    }
  },
}
</script>

<style lang="sass">
  .preloader
    position: fixed
    z-index: 99
    left: 0
    right: 0
    top: 0
    bottom: 0
    display: flex
    align-items: center
    justify-content: center
    background-color: #ffffff
  .preloader-content
    width: 100px
    display: flex
    flex-direction: column
    align-items: center
  .preloader-img
    width: 95px
    height: 60px
  .preloader-text
    position: relative
    margin-top: 20px
    margin-right: 10px
    font-weight: 400
    font-size: 16px
    line-height: 180%
    text-align: center
    letter-spacing: 0.02em
    color: #606276
  .preloader-dots
    position: absolute
    bottom: 6px
    right: -25px

</style>