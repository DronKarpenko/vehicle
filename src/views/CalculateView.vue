<template>
  <Header/>
  <main>
    <vPageTitle
        pageTitle="Use our free calculator!"
    />
    <CalculatorVue class="calculate-page__calculator"/>
  </main>
  <FooterVue/>
</template>

<script>
import Header from '@/components/Header.vue'
import vPageTitle from '@/components/v-pageTitle.vue'
import CalculatorVue from '@/components/Calculator.vue'
import FooterVue from '@/components/Footer.vue'
export default {
    name: 'calculate-page',

    components: {
      Header,
      vPageTitle,
      CalculatorVue,
      FooterVue
    }
}

</script>

<style lang="sass">
  .calculate-page__calculator
    margin: 40px 0
</style>