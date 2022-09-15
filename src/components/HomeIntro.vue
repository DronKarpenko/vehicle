<template>
    <section class="intro">
        <div class="container intro-container">
            <div class="intro-descr">
                <h1 class="intro-title">The easiest way to buy a car in Canada</h1>
            </div>
            
            <vSlider
                class="intro-slider"
                :slider_data="sliderItems"
            />
          <router-link to='/request'>
            <v-btn
                :light = true
                title="Request a car"
            />
          </router-link>
        </div>
    </section>
</template>
<script>
import vSlider from '@/components/slider/Slider.vue'
import vBtn from '@/components/v-btn.vue'

export default {
    name: 'HomeIntro',
    data(){
        return{
            sliderItems: [
                {id: 1, name: 'car_1', img: 'introSliderCar1.png'},
                {id: 2, name: 'car_2', img: 'introSliderCar2.png'},
                {id: 3, name: 'car_3', img: 'introSliderCar3.png'},
                {id: 4, name: 'car_4', img: 'introSliderCar4.png'},
            ]
        }
    },
    props: {
    
    },
    components: {
        vSlider, vBtn
    }
}
</script>
<style lang="sass">
    .intro
        background-image: url(@/assets/img/intro-bg.jpg)
        background-position: center center
        background-repeat: no-repeat
        background-size: cover
        background-color: #7481FF
        padding: 120px 0 185px
        color: #fff

    .intro-container
        display: flex
        justify-content: space-between
        align-items: center
        flex-wrap: wrap

    .intro-descr
        width: 40%

    .intro-title
        font-weight: 800
        font-size: 60px
        line-height: 108.5%
        letter-spacing: 0.02em
        margin-bottom: 60px

    .intro-btn
        padding: 16px 40px 15px

// -------------------MEDIA-----------------
@media screen and (max-width: 1199.98px)
    .intro-container
        flex-direction: column
    .intro
      padding-top: 60px
      padding-bottom: 130px
    .intro-descr
      width: 85%
      text-align: center
    .intro-slider
      margin-bottom: 60px

@media screen and (max-width: 767.98px)
  .intro
    padding-top: 50px
    padding-bottom: 100px
  .intro-container
    align-items: center
  .intro-title
    font-size: 35px
    line-height: 108.5%
    margin-bottom: 40px
  .intro-slider
    margin-bottom: 40px
</style>