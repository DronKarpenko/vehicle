<template>
  <section class="about-features">
    <div class="container about-features__container">
      <div class="about-features__photo">
        <img src="@/assets/img/about-features.jpg" alt="team" class="about-features__img">
      </div>

      <div class="about-features__descr">
        <h2 class="about-features__title">Main features</h2>
        <p class="about-features__text">We are your one stop shop. We believe that vehicle shopping should be a fun and painless process and with years of experience, we make it just that.</p>
        <div class="about-features__numbers">
          <v-shadow-block class="feature-number"
            v-for="feature in featuresItems"
            :key="feature.id"
            :shadow-block_data="feature"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VShadowBlock from "@/components/v-shadowBlock";
export default {
  name: "aboutFeatures",
  components: {VShadowBlock},
  data() {
    return {
      featuresItems: [
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

.about-features
  margin-top: 220px
.about-features__container
  display: flex
  justify-content: space-between
  align-items: flex-end
.about-features__descr
  width: calc(600px/1200px*100%)
.about-features__photo
  width: calc(540px/1200px*100%)
  border-radius: 5px
.about-features__img
  width: 100%
  height: auto
  display: block
.about-features__text
  margin: 20px 0 40px 0

.about-features__numbers
  display: flex
  gap: 40px
  flex-wrap: wrap
.feature-number
  width: 45%

//---------------MEDIA-----------------
@media screen and (max-width: 1023.98px)
  .about-features
    margin-top: 160px
  .about-features__container
    flex-direction: column-reverse
    align-items: center
  .about-features__descr,
  .about-features__photo
    width: calc(600px/768px*100%)
  .about-features__descr
    margin-bottom: 40px

@media screen and (max-width: 639.98px)
  .about-features
    margin-top: 80px
  .about-features__descr,
  .about-features__photo,
  .feature-number
    width: 100%
</style>