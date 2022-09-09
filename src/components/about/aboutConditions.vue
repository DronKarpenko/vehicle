<template>
  <section class="about-conditions">
    <div class="container about-conditions__container">

      <div class="about-conditions__descr">
        <h2 class="about-conditions__title">Get a car at the best prices and conditions</h2>
        <div class="about-conditions__text">
          <p>Not only is buying a car with VAC easy, it’s also the best way to save money. We have partnerships with Canada’s largest lenders. That allows us to help you secure loans at the best interest rates available.</p>
          <p>Because convenience and transparency are our founding principles, we take the time to answer all of your questions about the vehicle and the auto loan. We will send you pictures and videos of any part of the car you like before you request a test drive.</p>
        </div>
      </div>

      <div class="about-conditions__slogan">
        <h3 class="conditions-slogan__title">We think that VAC is the best way to buy a car in Canada. Try it for yourself and see how much time and money you can save.</h3>
        <p class="conditions-slogan__text">There are never any hidden fees or costs. We never ask you to sign anything until we have explained it clearly and you have had a chance to read it.</p>
        <v-btn
            class="conditions-slogan__btn"
            title="Request a Car"
        />
      </div>

    </div>
  </section>
</template>

<script>
import vBtn from '@/components/v-btn.vue'
export default {
  name: "aboutConditions",
  components: {vBtn}

}
</script>

<style lang="sass">

.about-conditions__container
  display: flex
  justify-content: space-between
  align-items: flex-start
.about-conditions__descr
  width: calc(550px/1200px*100%)
.about-conditions__text
  p:first-child
    margin: 20px 0

.about-conditions__slogan
  width: calc(550px/1200px*100%)
.conditions-slogan__title
  font-weight: 700
  font-size: 25px
  line-height: 140%
  letter-spacing: 0.02em
  color: #41456B
.conditions-slogan__text
  margin: 20px 0 40px


//---------------MEDIA-----------------
@media screen and (max-width: 1023.98px)
  .about-conditions__container
    flex-direction: column
    align-items: center
  .about-conditions__descr,
  .about-conditions__slogan
    width: calc(600px/768px*100%)
  .about-conditions__descr
    margin-bottom: 40px
@media screen and (max-width: 639.98px)
  .about-advantage
    margin: 80px 0
  .about-conditions__descr,
  .about-conditions__slogan
    width: 100%
@media screen and (max-width: 480px)
  .conditions-slogan__btn
    width: 100%
</style>