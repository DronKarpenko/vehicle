<template>
  <section class="rates-benefits">
    <div class="container rates-benefits__container">
      <div class="rates-benefits__descr">
        <h2 class="rates-benefits__title">Benefits of getting an auto loan with VAC</h2>
        <div class="rates-benefits__text">
          <p class="rates-benefits__problem">We want to make simple for you to find the car you want. We also want to make sure you are 100% comfortable with the terms of the conditions of your auto loan.</p>
          <p class="rates-benefits__decision">When you work with VAC, there are never any hidden costs or fees! We lay out all the terms and conditions so that you know exactly what details of the loan are before you sign anything.</p>
          <router-link to='/request'>
            <v-btn
                title="Request a car"
            />
          </router-link>
        </div>
      </div>

      <div class="rates-benefits__car">
        <img src="@/assets/img/cars/nissan.png" alt="Nissan" class="rates-benefits__img">
      </div>
    </div>
  </section>
</template>

<script>
import VBtn from "@/components/v-btn";
export default {
  name: "ratesBenefits",
  components: {VBtn}
}
</script>

<style lang="sass">
.rates-benefits__container
  display: flex
  justify-content: space-between
  align-items: flex-end
.rates-benefits__descr
  width: calc(550px/1200px*100%)
.rates-benefits__car
  width: calc(600px/1200px*100%)
.rates-benefits__img
  width: 100%
  height: auto
.rates-benefits__decision
  font-weight: 600
  font-size: 20px
  line-height: 25px
  color: #41456B
  margin: 20px 0 40px 0

//---------------MEDIA-----------------
@media screen and (max-width: 1023.98px)
  .rates-benefits__container
    flex-direction: column
    align-items: center
  .rates-benefits__descr,
  .rates-benefits__car
    width: calc(600px/768px*100%)
  .rates-benefits__descr
    margin-bottom: 40px

@media screen and (max-width: 639.98px)
  .rates-benefits__descr,
  .rates-benefits__car
    width: 100%
</style>