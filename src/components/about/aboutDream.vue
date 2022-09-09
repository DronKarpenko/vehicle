<template>
  <section class="about-dream">
    <div class="container about-dream__container">
      <div class="about-dream__descr">
        <h2 class="about-dream__title">Get your dream car</h2>
        <div class="about-dream__text">
          <p>We founded VAC because we hated how complicated it was to buy a car. You only have so much free time in your life. You don’t want to waste it going to different car dealerships every weekend for weeks and months trying to track down the right car.</p>
          <p>We also hated how choosing a car and figuring out the financing for the vehicle were treated as totally separate processes! Instead of dealing with a salesperson, then being handed off to a closer, and then shuffled over to a finance manager, we wanted to create a way for people to buy a car and only deal with a single person for the entire process.</p>
        </div>
      </div>
      <div class="about-dream__steps">
        <v-step-item
            v-for="dream in dreamsItems"
            :key="dream.id"
            :stepItem_data="dream"
        />
      </div>
    </div>
  </section>
</template>

<script>
import VStepItem from "@/components/v-stepItem";
export default {

  name: "aboutDream",
  components: {VStepItem},
  data(){
    return{
      dreamsItems: [
        {
          id: 1,
          title: 'Quickly',
          text: 'You do not spend a lot of your time going to car dealerships'
        },
        {
          id: 2,
          title: 'Simply',
          text: 'You can order your dream car just by talking to our specialist by phone'
        },
        {
          id: 3,
          title: 'Conveniently',
          text: 'We will deliver the car directly to the doorstep of your home or office'
        }
      ]
    }
  },
}
</script>

<style lang="sass">
.about-dream__container
  display: flex
  justify-content: space-between
  align-items: flex-start
.about-dream__descr
  width: calc(568px/1200px*100%)
.about-dream__steps
  width: calc(545px/1200px*100%)
.about-dream__text
  p:first-child
    margin: 20px 0
//---------------MEDIA-----------------
@media screen and (max-width: 1023.98px)
  .about-dream__container
    flex-direction: column
    align-items: center
  .about-dream__descr,
  .about-dream__steps
    width: calc(600px/768px*100%)
  .about-dream__descr
    margin-bottom: 40px
@media screen and (max-width: 639.98px)
  .about-dream__descr,
  .about-dream__steps
    width: 100%
</style>