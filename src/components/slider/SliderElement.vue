<template>
    <div class="sliderElement">
        <img :src=" require('../../assets/img/intro/' + element_data.img) " alt="" class="slider-img">
    </div>
</template>

<script>
export default {
    name: 'SliderElement',
    props: {
        element_data: {
            type: Object,
            default: () => {}
        }
    },
    data() {
        return {
            
        }
    },
}
</script>

<style lang="sass">
    .sliderElement
        text-align: center
    .slider-img
        max-width: 490px
        height: auto
    @media screen and (max-width: 767.98px)
      .slider-img
        max-width: 300px
</style>