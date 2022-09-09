<template>
    <button 
        class="v-btn"
        :class="className"
        :disabled='isDisabled'
    >
        {{title}}
    </button>
</template>

<script>

export default {
    name: "v-btn",
    data() {
        return{}
    },
    props: {
        title: {
            type: String,
            default: 'Click'
        },
        isDisabled: {
            type: Boolean,
            default: false
        },
        light: {
            type: Boolean,
            default: false
        },
        small: {
            type: Boolean,
            default: false
        },
    },
    computed: {
        className() {
            return {
                'v-btn__light': this.light,
                'v-btn__small': this.small,
            }
        }
    },
    methods: {},
}
</script>

<style lang="sass">
    .v-btn
        text-transform: uppercase
        box-sizing: border-box
        font-weight: 700
        font-size: 16px
        line-height: 14px
        letter-spacing: 0.02em
        color: #fff
        background-color: #7481FF
        border: 1px solid #7481FF
        padding: 16px 50px 15px
        border-radius: 2px
        transition: all .5s
        &:hover
            background-color: #6270FF
            border: 1px solid #6270FF
        &:disabled
            opacity: 0.6
            cursor: not-allowed
            &:hover
                opacity: 0.6
                cursor: not-allowed
        &__small
            padding: 16px 34px 15px
        &__light
            color: #7481FF
            background-color: #fff
            border: 1px solid #7481FF
            &:hover
                color: #6270FF
                border-color: #6270FF
                background-color: #fff
    .v-btn.active
      color: #fff
      background-color: #7481FF
      border: 1px solid #7481FF
      &:hover
        background-color: #6270FF
        border: 1px solid #6270FF

  @media screen and (max-width: 767.98px)
    .v-btn
      font-size: 14px
      padding: 10px
</style>