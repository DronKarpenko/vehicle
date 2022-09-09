<template>
  <div class="about-page">
    <Header/>
    <main>
      <vPageTitle
        pageTitle="About VAC"
      />
      <vShadowBlockWithCarVue
        title="Our mission"
        description="Our mission at VAC is to help you find the perfect car at the perfect price and with the perfect auto loan. We make buying a car simple. You can complete the entire process from home—we’ll even deliver the car to you!"
        carPhoto="kia.png"
      />
      <about-dream/>
      <about-advantage/>
      <about-conditions/>
      <about-agents/>
      <Reviews/>
      <about-team/>
      <about-features/>
      <CalculatorVue class="about-page__calculator"/>
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
import Reviews from "@/components/Review";
import AboutDream from "@/components/about/aboutDream";
import AboutAdvantage from "@/components/about/aboutAdvantage";
import AboutConditions from "@/components/about/aboutConditions";
import AboutAgents from "@/components/about/aboutAgents";
import AboutTeam from "@/components/about/aboutTeam";
import AboutFeatures from "@/components/about/aboutFeatures";
export default {
    name: 'about-page',

    components: {
      AboutFeatures,
      AboutTeam,
      AboutAgents,
      AboutConditions,
      AboutAdvantage,
      AboutDream,
      Reviews,
      Header,
      vPageTitle,
      CalculatorVue,
      FooterVue,
      vShadowBlockWithCarVue
    }
}

</script>

<style lang="sass">

  .about-page
    font-weight: 400
    font-size: 16px
    line-height: 180%
    letter-spacing: 0.02em
    color: #606276
  .about-page__calculator
    margin: 220px 0 40px
  @media screen and (max-width: 1023.98px)
    .about-page__calculator
      margin-top: 160px
  @media screen and (max-width: 767.98px)
    .about-page__calculator
      margin-top: 80px
</style>