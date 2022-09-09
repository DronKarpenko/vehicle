<template>
    <div class="v-shadowBlock">
        <div class="v-shadowBlock__title">{{shadowBlock_data.title}}</div>
        <div class="v-shadowBlock__text">{{shadowBlock_data.text}}</div>
    </div>
</template>

<script>
export default {
    name: 'v-shadowBlock',

    props:{
        shadowBlock_data: {
            type: Object,
            default() {
                return {}
            }
        },
    }
}
</script>

<style lang="sass">

.v-shadowBlock
    box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1)
    border-radius: 5px
    box-sizing: border-box
    box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1)
    border-radius: 5px
    padding: 25px 35px 20px
    &__title
        font-weight: 700
        font-size: 45px
        line-height: 140.5%
        color: #41456B
    &__text
        margin-bottom: 5px
        font-weight: 400
        font-size: 16px
        line-height: 180%
        letter-spacing: 0.02em
        color: #606276

@media screen and (max-width: 767.98px)
  .v-shadowBlock__title
    font-size: 30px
</style>