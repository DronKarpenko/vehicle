<template>
  <section class="about-team">
    <div class="container about-team__container">
      <div class="about-team__descr">
        <h2 class="about-team__title">We're dynamic team of creative people with innovative mind</h2>
        <div class="about-team__text">
          <h4 class="about-team__text-title">Our History</h4>
          <p>We want to make simple for you to find the car you want. We also want to make sure you are 100% comfortable with the terms of the conditions of your auto loan.</p>
          <h4 class="about-team__text-title">Our Goal</h4>
          <p>Buying a car has never been easier. You pick out the car you want on our website. You work with one of our Qualified Agents to secure financing. Then we bring the car to you—all before you sign anything. You test drive the vehicle, and if you like it, you sign the loan documents right there and the car is yours.</p>
        </div>
      </div>

      <div class="about-team__photo">
        <img src="@/assets/img/about-team.jpg" alt="team" class="about-team__img">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "aboutTeam"
}
</script>

<style lang="sass">

.about-team__container
  display: flex
  justify-content: space-between
  align-items: flex-end
.about-team__descr
  width: calc(530px/1200px*100%)
.about-team__photo
  width: calc(600px/1200px*100%)
  border-radius: 5px
.about-team__img
  width: 100%
  height: auto
  display: block
.about-team__text-title
  margin: 20px 0
  font-weight: 600
  font-size: 20px
  line-height: 25px
  color: #41456B

//---------------MEDIA-----------------
@media screen and (max-width: 1023.98px)
  .about-team__container
    flex-direction: column-reverse
    align-items: center
  .about-team__descr,
  .about-team__photo
    width: calc(600px/768px*100%)
  .about-team__photo
    margin-bottom: 40px

@media screen and (max-width: 639.98px)
  .about-team__descr,
  .about-team__photo
    width: 100%

</style>