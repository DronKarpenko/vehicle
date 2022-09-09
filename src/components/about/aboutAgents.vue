<template>
  <section class="about-agents">
    <v-contact-form v-show="isVisibleContactForm"/>
    <div class="container about-agents__container">
      <div class="about-agents__contact-us">
        <h3 class="contact-us__title">Contact us today and speak with one of our qualified agents</h3>
        <v-btn
          class="contact-us__button"
          title="contact us now"
          @click="openContactForm"
        />
      </div>
      <div class="about-agents__descr">
        <h2 class="about-agents__title">Our qualified agents</h2>
        <div class="about-agents__text">
          <p>The true secret to success of VAC isn’t our streamlined purchasing and financing processes. The real reason VAC is the easiest and best way to buy a car in Canada is because of our outstanding Qualified Agents.</p>
          <p>Our team provides you with the best customer experience in the automotive industry. You work with a dedicated representative throughout the process. They are able to answer any questions you have about any of our vehicles or the financing. Are you interested in seeing pictures or videos of a car? Your qualified agent will send them to you.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VBtn from "@/components/v-btn";
import VContactForm from "@/components/slider/v-contacts";
export default {
  name: "aboutAgents",
  data(){
    return{
      isVisibleContactForm: false
    }
  },
  components: {VContactForm, VBtn},
  methods: {
    openContactForm(){
      this.isVisibleContactForm = true
    }
  }
}
</script>

<style scoped lang="sass">

.about-agents
  margin-top: 220px
  //position: relative
.about-agents__container
  display: flex
  justify-content: space-between
  align-items: flex-start
.about-agents__descr
  width: calc(550px/1200px*100%)
.about-agents__contact-us
  width: calc(583px/1200px*100%)
  box-sizing: border-box
.about-agents__text
  p:first-child
    margin: 20px 0

.about-agents__contact-us
  box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1)
  border-radius: 5px
  padding: 60px
.contact-us__title
  font-weight: 700
  font-size: 30px
  line-height: 140%
  color: #41456B
  margin-bottom: 40px

//---------------MEDIA-----------------
@media screen and (max-width: 1023.98px)
  .about-agents
    margin-top: 160px
  .about-agents__container
    flex-direction: column-reverse
    align-items: center
  .about-agents__descr,
  .about-agents__contact-us
    width: calc(600px/768px*100%)
  .about-agents__descr
    margin-bottom: 40px
@media screen and (max-width: 767.98px)
  .about-agents__contact-us
    padding: 40px
@media screen and (max-width: 639.98px)
  .about-agents
    margin-top: 80px
  .about-agents__descr,
  .about-agents__contact-us
    width: 100%
@media screen and (max-width: 480px)
  .about-agents__contact-us
    padding: 20px
  .contact-us__button
    width: 100%

</style>