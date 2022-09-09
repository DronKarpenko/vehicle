<template>
  <main class="homepage-main">
  <Header/>
  <HomeIntro/>
  <HomeHowWork/>
  <HomeSteps/>
  <Advantages/>
  <HomeChoose/>
  <section class="customers">
    <div class="container customers-container">
      <div class="customers-descr">
        <h2 class="customers-title">Happy customers</h2>
        <p class="customers-text">Since 2017, we have helped thousands of Canadians get their dream vehicles from the comfort of their homes.</p>
        <p class="customers-question">What are you waiting? Get started right now!</p>
        <v-btn
            title="Request a Car"
        />
      </div>
      <div class="customers-items">
        <vShadowBlock class="customers-item"
                      v-for="item in customersItems"
                      :key="item.id"
                      :shadowBlock_data="item"
        />
      </div>
    </div>
  </section>
  <ReviewVue/>
  <Calculator/>
  <HomeBlog/>
  <Footer/>
  </main>
</template>

<script>
import Header from "@/components/Header";
import HomeIntro from "@/components/HomeIntro";
import HomeHowWork from "@/components/HomeHowWork";
import HomeSteps from "@/components/HomeSteps";
import HomeChoose from "@/components/HomeChoose";
import Advantages from "@/components/HomeAdvantages";
import ReviewVue from "@/components/Review";
import Calculator from "@/components/Calculator";
import HomeBlog from "@/components/HomeBlog";
import vBtn from "@/components/v-btn";
import vShadowBlock from "@/components/v-shadowBlock";
import Footer from "@/components/Footer";
export default {
  name: "HomePage",
  components: {
    Header,
    HomeIntro,
    HomeHowWork,
    HomeSteps,
    Advantages,
    HomeChoose,
    ReviewVue,
    Calculator,
    HomeBlog,
    vBtn,
    vShadowBlock,
    Footer,
  },
  data() {
    return {
      customersItems: [
        {
          id:1,
          title: '7,988+',
          text: 'Sold Cars'
        },
        {
          id:2,
          title: '16,974+',
          text: 'Vehicles To Choose From'
        },
        {
          id:3,
          title: '123',
          text: 'Experts Across Canada'
        }
      ]
    }
  },
}
</script>

<style lang="sass">
// ---------------------CUSTOMERS------------------
.customers-container
  display: flex
  justify-content: space-between
  align-items: center

.customers-descr
  width: 45%

.customers-text
  margin: 20px 0 40px
  font-weight: 400
  font-size: 16px
  line-height: 180%
  letter-spacing: 0.02em
  color: #606276

.customers-question
  width: 55%
  font-weight: 700
  font-size: 25px
  line-height: 140%
  letter-spacing: 0.02em
  color: #41456B
  margin-bottom: 40px

.customers-items
  width: 50%
  display: flex
  flex-wrap: wrap
  gap: 40px
.customers-item
  width: 45%

// ----------------MEDIA------------------
@media screen and (max-width: 1199.98px)
  .customers-container
    flex-direction: column
    padding-right: 80px
    padding-left: 80px
  .customers-descr
    width: 90%
    margin-bottom: 40px
  .customers-items
    width: 90%

@media screen and (max-width: 767.98px)
  body main.homepage-main
    padding-top: 57px
  .customers-question
    width: 100%
  .customers-descr
    width: 100%
  .customers-items
    width: 100%
    flex-direction: column
  .customers-item
    width: 100%
</style>