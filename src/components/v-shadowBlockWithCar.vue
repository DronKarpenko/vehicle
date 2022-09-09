<template>
    <div class="shadowBlockWithCar">
        <div class="container shadowBlockWithCar-container">
            <div class="bigShadowBlock">
                <h2 class="bigShadowBlock-title">{{title}}</h2>
                <p class="bigShadowBlock-descr">{{description}}</p>
                <vBtnVue title="Request a Car"/>
            </div>
            <img :src=" require('@/assets/img/cars/' + carPhoto)" alt="carsPhoto" class="bigShadowBlock-carPhoto">
        </div>
    </div>
</template>

<script>
import vBtnVue from './v-btn.vue';
export default {
    name: 'v-shadowBlockWithCar',
    data(){
        return{

        }
    },
    props: {
        title:{
            type: String,
            default: 'Title'
        },
        description:{
            type: String,
            default: 'Some Text'
        },
        carPhoto: {
            type: String,
            default: ''
        }
    },
    components: {
        vBtnVue
    }
}
</script>

<style lang="sass">
    .shadowBlockWithCar
        margin: 40px 0 220px
    .shadowBlockWithCar-container
        display: flex
        justify-content: space-between
        align-items: flex-end
    .bigShadowBlock
        box-sizing: border-box
        width: 48%
        box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1)
        border-radius: 5px
        padding: 60px
    .bigShadowBlock-descr
        font-weight: 400
        font-size: 16px
        line-height: 180%
        letter-spacing: 0.02em
        color: #606276
        margin: 20px 0 40px

    .bigShadowBlock-carPhoto
        display: inline-block
        width: 45%
        height: auto

//---------------MEDIA-----------------
@media screen and (max-width: 1023.98px)
  .shadowBlockWithCar
    margin-bottom: 160px
  .shadowBlockWithCar-container
    flex-direction: column
    align-items: center
  .bigShadowBlock,
  .bigShadowBlock-carPhoto
    width: 85%
  .bigShadowBlock
    padding: 40px
    margin-bottom: 40px
@media screen and (max-width: 767.98px)
  .shadowBlockWithCar
    margin-bottom: 80px
  .bigShadowBlock,
  .bigShadowBlock-carPhoto
    width: 100%
</style>