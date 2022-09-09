<template>
    <div class="v-blogItem">
        <img :src=" require('@/assets/img/blog/' + blogItem_data.photo) " alt="blog1" class="v-blogItem__photo">
        <div class="v-blogItem__descr">
            <p class="v-blogItem__data">{{blogItem_data.data}}</p>
            <h3 class="v-blogItem__title">{{blogItem_data.title}}</h3>
        </div>
    </div>
</template>

<script>

export default {
    name: 'v-blogItem',

    props:{
        blogItem_data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
}
</script>

<style lang="sass">
.v-blogItem
    box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1)
    border-radius: 5px
    width: 30%
    &__photo
        width: 100%
        height: auto
    &__descr
        padding: 20px 30px 30px 30px
    &__data
        font-weight: 400
        font-size: 16px
        line-height: 180%
        letter-spacing: 0.02em
        color: #606276
    &__title
        font-weight: 600
        font-size: 20px
        line-height: 25px
        color: #41456B
</style>