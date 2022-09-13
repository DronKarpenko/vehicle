<template>
  <Header/>
  <main>
    <div class="container car-container">
      <h1 class="car-title">Porsche Panamera 4S</h1>
      <p class="car-watching">Watching now 8 people</p>
      <div class="car-description">
        <div class="car-photo__slider">
          <swiper
              :style="{'--swiper-navigation-color': '#fff','--swiper-pagination-color': '#fff'}"
              :grabCursor="true"
              :spaceBetween="10"

              :thumbs="{ swiper: thumbsSwiper }"
              class="mySwiper2"
          >
            <swiper-slide
                v-for="(exteriorImg, index) in exteriorPhoto"
                :key="exteriorImg.id"
                v-if="isActiveExterior"
            >
              <img :src=" require('@/assets/img/inventory-gallery/' + exteriorImg.img) " alt="exteriorPhoto">
            </swiper-slide>
            <swiper-slide
                v-for="(interiorImg, index) in interiorPhoto"
                :key="interiorImg.id"
                v-if="isActiveInterior"
            >
              <img :src=" require('@/assets/img/inventory-gallery/' + interiorImg.img) " alt="interiorPhoto">
            </swiper-slide>
            <div class="switch-buttons">
              <button
                  class="switch-button
                         exterior-button"
                  :class="{'active': isActiveExterior}"
                  @click="activatedExteriorImg"
              >
                exterior
              </button>
              <button
                  class="switch-button
                         interior-button"
                  :class="{'active': isActiveInterior}"
                  @click="activatedInteriorImg"
              >
                interior
              </button>
            </div>
          </swiper>
          <swiper
              @swiper="setThumbsSwiper"
              :grabCursor="true"
              :spaceBetween="10"
              :slidesPerView="3.5"
              :navigation="true"
              :freeMode="true"
              :watchSlidesVisibility="true"
              :watchSlidesProgress="true"
              class="mySwiper"
          >
            <swiper-slide
                v-for="(exteriorImg, index) in exteriorPhoto"
                :key="exteriorImg.index"
                v-if="isActiveExterior"
            >
              <img :src=" require('@/assets/img/inventory-gallery/' + exteriorImg.img) " alt="exteriorPhoto">
            </swiper-slide>
            <swiper-slide
                v-for="(interiorImg, index) in interiorPhoto"
                :key="interiorImg.id"
                v-if="isActiveInterior"
            >
              <img :src=" require('@/assets/img/inventory-gallery/' + interiorImg.img) " alt="interiorPhoto">
            </swiper-slide>
          </swiper>
        </div>
        <div class="car-info">
          <div class="car-info__main">
            <div class="car-info__main-price">
              <h4 class="car-info__block-title">Price</h4>
              <p class="car-info__main-value">34 000 $</p>
            </div>
            <div class="car-info__main-body car-info__main-item">
              <h4 class="car-info__block-title">Body</h4>
              <p class="car-info__main-value">Sedan</p>
            </div>
            <div class="car-info__main-year car-info__main-item">
              <h4 class="car-info__block-title">Year</h4>
              <p class="car-info__main-value">2018</p>
            </div>
            <div class="car-info__main-transmission car-info__main-item">
              <h4 class="car-info__block-title">Transmission</h4>
              <p class="car-info__main-value">Automatic</p>
            </div>
            <div class="car-info__main-kilometres car-info__main-item">
              <h4 class="car-info__block-title">Kilometres</h4>
              <p class="car-info__main-value">20 000</p>
            </div>
          </div>
          <div class="car-info__detail">
            <h4 class="car-info__block-title">Detail</h4>
            <div class="car-info__detail-more">
              <ul class="detail-more__items">
                <li>Rear wheel drive</li>
                <li>6 cylinders</li>
                <li>11 l. per 100 km.</li>
                <li>Rear wheel drive</li>
              </ul>
              <ul class="detail-more__items">
                <li>2500-4000 rpm</li>
                <li>0-100 in 2.7 s.</li>
                <li>Power steering</li>
                <li>2500-4000 rpm</li>
              </ul>
            </div>
          </div>
          <div class="car-info__descr">
            <h4 class="car-info__block-title">Description</h4>
            <p class="car-info__descr-text">Porsche 911 - a sports car manufactured by the German company Porsche AG in the back of a two-door coupe or a convertible based on it, produced in different generations from 1964 to the present day. <br>The 911 index was not originally planned for the timeless designation of different generations of the same car, and was no more than one of many similar in the through three-digit internal factory numbering of all Porsche models assigned to a very specific 1964 model.</p>
          </div>
          <v-btn class="car-info__btn" title="Request more information"/>
        </div>
      </div>
    </div>
    <Calculator/>
  </main>
  <Footer/>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CarItem from "@/components/inventory/car-item";
import Calculator from "@/components/Calculator";
import VBtn from "@/components/v-btn";
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"
import SwiperCore, { Navigation,Thumbs } from 'swiper/core';
// install Swiper modules
SwiperCore.use([Navigation,Thumbs]);
export default {
  name: "OneCarPage",
  components: {VBtn, Calculator, CarItem, Footer, Header, Swiper, SwiperSlide},
  data() {
    return {
      exteriorPhoto: [
        {id: 1, img: 'exterior1.webp'},
        {id: 2, img: 'exterior2.webp'},
        {id: 3, img: 'exterior3.webp'},
        {id: 4, img: 'exterior4.webp'},
        {id: 5, img: 'exterior5.webp'},
        {id: 6, img: 'exterior6.webp'},
      ],
      interiorPhoto: [
        {id: 1, img: 'interior1.webp'},
        {id: 2, img: 'interior2.webp'},
        {id: 3, img: 'interior3.webp'},
        {id: 4, img: 'interior4.webp'},
        {id: 5, img: 'interior5.webp'},
      ],
      thumbsSwiper: null,
      isActiveExterior: true,
      isActiveInterior: false,
    }
  },
  methods: {
    setThumbsSwiper(swiper) {
      this.thumbsSwiper = swiper;
    },
    activatedExteriorImg() {
      this.isActiveExterior = true
      this.isActiveInterior = false

    },
    activatedInteriorImg() {
      this.isActiveExterior = false
      this.isActiveInterior = true
    },
  }
}

</script>

<style lang="sass" scoped>

//-----------------------------SWIPER-----------------------
.car-photo__slider
  .swiper-slide
    text-align: center
    font-size: 18px
    background: #fff
    display: -webkit-box
    display: -ms-flexbox
    display: -webkit-flex
    display: flex
    -webkit-box-pack: center
    -ms-flex-pack: center
    -webkit-justify-content: center
    justify-content: center
    -webkit-box-align: center
    -ms-flex-align: center
    -webkit-align-items: center
    align-items: center
  .swiper-slide img
    display: block
    width: 100%
    height: auto
    object-fit: cover
  .swiper
    width: 100%
    margin-left: auto
    margin-right: auto
  .swiper-slide
    background-size: cover
    background-position: center
    //cursor: pointer
  .mySwiper2
    width: 100%
  .mySwiper
    box-sizing: border-box
    padding: 10px 0
    position: relative
  .mySwiper .swiper-slide
    width: 25%
    height: 100%
    &:hover
      opacity: 0.7


//-----------------------BUTTONS----------------
.switch-buttons
  display: flex
  gap: 7px
  position: absolute
  left: 20px
  bottom: 20px
  z-index: 2
.switch-button
  padding: 10px 20px
  background: rgba(215, 215, 215, 0.2)
  border-radius: 2px
  font-weight: 700
  font-size: 16px
  line-height: 14px
  text-align: center
  letter-spacing: 0.02em
  text-transform: uppercase
  color: #FFFFFF
  cursor: pointer
  &:hover
    background: rgba(215, 215, 215, 0.7)

.switch-button.active
  color: #41456B
  background: rgba(255, 255, 255, 1)
  &:hover
    background: rgba(255, 255, 255, .7)

//-------------------------------END-SWIPER-------------------
.container.car-container
  margin-top: 84px
  margin-bottom: 220px

.car-title
  padding-top: 40px
  font-weight: 700
  font-size: 45px
  line-height: 140.5%
  color: #41456B
.car-watching
  margin-bottom: 20px
  font-weight: 500
  font-size: 16px
  line-height: 159%
  color: #606276

.car-description
  display: flex
  justify-content: space-between

.car-photo__slider
  width: calc(650px/1200px*100%)

.car-info
  width: calc(500px/1200px*100%)
  display: flex
  flex-direction: column

.car-info__block-title
  font-weight: 500
  font-size: 16px
  line-height: 159%
  color: #606276

.car-info__main
  margin-bottom: 40px
  display: flex
  flex-wrap: wrap
.car-info__main-value
  font-weight: 700
  font-size: 25px
  line-height: 140%
  letter-spacing: 0.02em
  color: #41456B
.car-info__main-item
  margin-bottom: 20px
  width: 50%
.car-info__main-price
  margin-bottom: 20px
  width: 100%
  .car-info__main-value
    color: #7481FF

.car-info__detail
  padding: 60px 0
  border-top: 1px solid #D7D7D7
  border-bottom: 1px solid #D7D7D7
.car-info__detail-more
  margin-top: 20px
  display: flex
  justify-content: space-between
.detail-more__items
  display: flex
  flex-direction: column
  gap: 20px
  font-weight: 600
  font-size: 20px
  line-height: 25px
  color: #41456B

.car-info__descr
  margin-top: 60px
.car-info__descr-text
  font-weight: 400
  font-size: 16px
  line-height: 180%
  letter-spacing: 0.02em
  color: #606276
  margin-top: 20px
  margin-bottom: 40px

.car-info__btn
  width: 70%

//-------------------------MEDIA---------------------
@media screen and (max-width: 1024px)
  .car-description
    flex-direction: column
    align-items: center
  .car-photo__slider,
  .car-info
    width: 80%
  .car-photo__slider
    margin-bottom: 120px
  .car-info__detail-more
    justify-content: flex-start
    gap: 30%

@media screen and (max-width: 767.98px)
  .container.car-container
    margin-top: 0
    margin-bottom: 80px

@media screen and (max-width: 640px)
  .car-photo__slider,
  .car-info
    width: 90%
  .car-info__btn
    width: 100%
  .car-photo__slider
    margin-bottom: 80px
  .car-info__detail
    padding: 40px 0
  .car-info__descr
    margin-top: 40px
  .car-title
    padding-top: 0
    font-size: 30px
    line-height: 140.5%

@media screen and (max-width: 480px)
  .car-photo__slider,
  .car-info
    width: 100%
  .car-info__detail-more
    flex-direction: column
    gap: 20px
</style>