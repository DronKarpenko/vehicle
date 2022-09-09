<template>
    <div class="slider-buttons">
        <div class="slider-wrap">
            <div class="slider" :style="{'margin-left': '-'+(100*currentSlideIndex)+'%'}">
                <vSliderElement 
                    v-for="element in slider_data"
                    :key="element.id"
                    :element_data="element"                    
                />
            </div>
        </div>

        <button class="slider__btn slider__prev" @click="prevSlide">
          <svg width="13" height="24" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 23L1 12L12 0.999985" stroke="#7481FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>

        <button class="slider__btn slider__next" @click="nextSlide">
          <svg width="13" height="24" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1.00001L12 12L1 23" stroke="#7481FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
    </div>
</template>

<script>
import vSliderElement from '@/components/slider/SliderElement.vue'

export default {
    name: 'Slider',
    components: {
        vSliderElement
    },
    props: {
        slider_data: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            currentSlideIndex: 0
        }
    },
    methods: {
        prevSlide(){
            if (this.currentSlideIndex > 0) {
                this.currentSlideIndex--
            }else{
                this.currentSlideIndex = this.slider_data.length-1
            }           
        },
        
        nextSlide(){
            if(this.currentSlideIndex >= this.slider_data.length-1){
                this.currentSlideIndex = 0
            }else{
                this.currentSlideIndex++
            }            
        }
    },
}
</script>

<style lang="sass">
    .slider-buttons
        position: relative
    .slider-wrap
        max-width: 490px
        overflow: hidden
        margin-right: 53px
    .slider
        display: flex
        align-items: center
        transition: all .5s
        &__btn
            position: absolute
            top: 50%
            transform: translateY(-50%)
            width: 53px
            height: 53px
            border-radius: 50%
            background-color: rgba(255, 255, 255, .8)
            svg
                position: absolute
                left: 50%
                top: 50%
                transform: translate(-50%, -50%)
                transition: all .5s
        &__next
            right: -10px
            &:hover
                svg
                    left: 75%
        &__prev
            left: -60px
            &:hover
                svg
                    left: 25%
    @media screen and (max-width: 1199.98px)
      .slider-wrap
        margin-right: 0
      .slider__next
        right: -60px
    @media screen and (max-width: 767.98px)
      .slider-buttons
        text-align: center
      .slider-wrap
        max-width: 300px
      .slider__btn
        width: 35px
        height: 35px
        svg
          width: 7px
          height: 14px
    @media screen and (max-width: 479.98px)
      .slider__prev
        left: -25px
      .slider__next
        right: -25px
</style>