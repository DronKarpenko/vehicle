<template>
  <section class="about-advantage">
    <div class="container about-advantage__container">
      <div class="about-advantage__car">
        <img src="@/assets/img/cars/nissan.png" alt="Nissan" class="about-advantage__img">
      </div>
      <div class="about-advantage__descr">
        <h2 class="about-advantage__title">Get your dream car</h2>
        <div class="about-advantage__text">
          <p>We want to make simple for you to find the car you want. We also want to make sure you are 100% comfortable with the terms of the conditions of your auto loan.</p>
          <p>Buying a car has never been easier. You pick out the car you want on our website. You work with one of our Qualified Agents to secure financing. Then we bring the car to you—all before you sign anything. You test drive the vehicle, and if you like it, you sign the loan documents right there and the car is yours.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "aboutAdvantage"
}
</script>

<style lang="sass">
.about-advantage
  margin: 220px 0
.about-advantage__container
  display: flex
  justify-content: space-between
  align-items: flex-end
.about-advantage__descr
  width: calc(550px/1200px*100%)
.about-advantage__car
  width: calc(568px/1200px*100%)
.about-advantage__img
  width: 100%
  height: auto
.about-advantage__text
  p:first-child
    margin: 20px 0
//---------------MEDIA-----------------
@media screen and (max-width: 1199.98px)
  .about-advantage
    margin: 160px 0
@media screen and (max-width: 1023.98px)
  .about-advantage__container
    flex-direction: column-reverse
    align-items: center
  .about-advantage__descr,
  .about-advantage__car
    width: calc(600px/768px*100%)
  .about-advantage__descr
    margin-bottom: 40px
@media screen and (max-width: 639.98px)
  .about-advantage
    margin: 40px 0 80px 0
  .about-advantage__descr,
  .about-advantage__car
    width: 100%
</style>