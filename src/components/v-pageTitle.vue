<template>
    <div class="page-title">
        <div class="container">
            <h1 class="page-title__name">{{pageTitle}}</h1>
        </div>
    </div>
</template>

<script>

export default {
    name: 'page-title',
    props: {
        pageTitle: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="sass">
    .page-title
        margin-top: 84px
        padding: 40px 0
        background-image: url(@/assets/img/pageTitle-bg.jpg)
        background-position: center center
        background-repeat: no-repeat
        background-size: cover
        &__name
            font-weight: 800
            font-size: 60px
            line-height: 108.5%
            letter-spacing: 0.02em
            color: #FFFFFF
@media screen and (max-width: 767.98px)
  .page-title
    margin-top: 0
    &__name
      font-size: 35px

</style>