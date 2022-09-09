<template>
  <Header/>
  <main>
    <div class="container car-container">
      <h1 class="car-title">Porsche Panamera 4S</h1>
      <p class="car-watching">Watching now 8 people</p>
      <div class="car-description">
        <div class="car-photo__slider">
          <img src="@/assets/img/inventory/porsche-panamera.jpg" alt="panamera" class="car-photo__slider-img">
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
export default {
  name: "OneCarPage",
  components: {VBtn, Calculator, CarItem, Footer, Header}
}
</script>

<style lang="sass" scoped>
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

.car-photo__slider-img
  width: 100%
  height: auto

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
</style>