<template>
<section class="rates-terms">
  <div class="container rates-terms__container">
    <h2 class="rates-terms__title">Interest rates and loan terms</h2>
    <div class="rates-terms__items">
      <div class="rates-terms__item term-item__percent">
        <div class="term-item__header">
          <img src="@/assets/img/icons/percent.svg" alt="percent" class="term-item__icon">
          <h3 class="term-item__title">What are my interest rate options?</h3>
        </div>
        <p class="term-item__descr">We work to secure customized auto loans from Canada’s largest lenders. Your interest rate is critical for determining the total cost of your auto financing. Interest rates are based on many factors including the loan amount, your credit score, and your budget. We help you find the lowest interest rates available for your auto loan.</p>
      </div>
      <div class="rates-terms__item term-item__time">
        <div class="term-item__header">
          <img src="@/assets/img/icons/time.svg" alt="time" class="term-item__icon">
          <h3 class="term-item__title">How long will my loan term be?</h3>
        </div>
        <p class="term-item__descr">Our goal is to find the right car and the right loan for you. Because we have relationships with so many different lenders, we can help you find the right term length for your budget. The longer the loan is, often the lower the monthly payments will be—but the more expensive the loan will be overall. Most of the loans we secure for our clients are between 36 and 72 months.</p>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: "ratesTerms"
}
</script>

<style lang="sass">
.rates-terms
  margin-bottom: 220px
.rates-terms__title
  margin-bottom: 60px
.rates-terms__items
  display: flex
  justify-content: space-between
.rates-terms__item
  width: calc(580px/1200px*100%)
  padding: 60px
  box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1)
  border-radius: 5px
  box-sizing: border-box
.term-item__header
  display: flex
  gap: 20px
  align-items: center
  margin-bottom: 20px
.term-item__title
  font-weight: 700
  font-size: 25px
  line-height: 140%
  letter-spacing: 0.02em
  color: #41456B

//---------------MEDIA-----------------
@media screen and (max-width: 1023.98px)
  .rates-terms
    margin-bottom: 160px
  .rates-terms__items
    flex-direction: column
    align-items: center
    gap: 20px
  .rates-terms__item
    width: calc(600px/768px*100%)
    padding: 40px

@media screen and (max-width: 639.98px)
  .rates-terms
    margin-bottom: 80px
  .rates-terms__item
    width: 100%
    padding: 20px
  .term-item__header
    gap: 10px
  .term-item__title
    font-size: 20px
  .term-item__icon
    width: 50px
    height: 50px
</style>