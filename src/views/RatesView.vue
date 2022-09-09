<template>
  <div class="rates-page">
    <Header/>
    <main>
      <vPageTitle
        pageTitle="Loan rates"
      />
      <vShadowBlockWithCarVue
        title="Our credit policy"
        description="You want to secure a loan that works for your budget. Here at VAC we work with Canada’s largest lenders to help you find the best interest rates and terms for your auto loan."
        carPhoto="chevrolet.png"
      />
      <rates-terms/>
      <rates-benefits/>
      <CalculatorVue class="rates-page__calculator"/>
    </main>
    <FooterVue/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import vPageTitle from '@/components/v-pageTitle.vue'
import vShadowBlockWithCarVue from '@/components/v-shadowBlockWithCar.vue'
import CalculatorVue from '@/components/Calculator.vue'
import FooterVue from '@/components/Footer.vue'
import RatesTerms from "@/components/rates/ratesTerms";
import RatesBenefits from "@/components/rates/ratesBenefits";
export default {
    name: 'rates-page',

    components: {
      RatesBenefits,
      RatesTerms,
      Header,
      vPageTitle,
      CalculatorVue,
      FooterVue,
      vShadowBlockWithCarVue
    }
}

</script>

<style lang="sass">

  .rates-page
    font-weight: 400
    font-size: 16px
    line-height: 180%
    letter-spacing: 0.02em
    color: #606276
  .rates-page__calculator
    margin: 220px 0 40px
  @media screen and (max-width: 1023.98px)
    .rates-page__calculator
      margin-top: 160px
  @media screen and (max-width: 767.98px)
    .rates-page__calculator
      margin-top: 80px
</style>