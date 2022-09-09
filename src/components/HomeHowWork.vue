<template>
    <section class="how-work">
        <div class="how-work__wrap">
            <h2 class="how-work__title">How does it work?</h2>
            <h3 class="how-work__way">From your Phone to your Home</h3>
            <p class="how-work__descr">We make it easy for you to buy your dream car from your phone without ever having to step into a dealership! We deliver your vehicle to your home for you to test drive before you sign anything.</p>
        </div>
        <img src="@/assets/img/Honda-Accord.png" alt="honda-accord" class="how-work__honda how-work__img">
        <img src="@/assets/img/Lexus.png" alt="honda-lexus" class="how-work__lexus how-work__img">
    </section>
</template>

<script>
    export default {
        name: 'HomeHowWork',
        
    }
</script>

<style lang="sass">
    .how-work
        height: 430px
        position: relative

    .how-work__wrap
        position: absolute
        top: -50px
        left: 50%
        transform: translateX(-50%)
        width: 39%
        background-color: #fff
        text-align: center
        padding: 60px
        box-sizing: border-box
        box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1)
        border-radius: 5px
        z-index: 2

    .how-work__way
        font-weight: 700
        font-size: 30px
        line-height: 140%
        color: #7481FF
        margin-bottom: 20px

    .how-work__descr
        font-weight: 400
        font-size: 16px
        line-height: 180%
        letter-spacing: 0.02em
        color: #606276

    .how-work__img
        width: 50%
        max-width: 500px
        height: auto
        position: absolute
    .how-work__honda
        top: 190px
        left: -40px
    .how-work__lexus
        top: 25px
        right: 0

// ----------------MEDIA------------------

@media screen and (max-width: 1199.98px)
  .how-work
    height: 700px
  .how-work__wrap
    width: 80%
  .how-work__img
    width: 40%
  .how-work__lexus
    top: 200px
  .how-work__honda
    top: 350px

@media screen and (max-width: 767.98px)
  .how-work__way
    font-size: 24px
    line-height: 140%
  .how-work__wrap
    padding: 20px
  .how-work
    height: 500px
  .how-work__img
    width: 50%
  .how-work__lexus
    top: 200px
  .how-work__honda
    top: 300px

@media screen and (max-width: 479.98px)
  .how-work__img
    width: 60%
  .how-work__lexus
    top: 300px
  .how-work__honda
    top: 400px


</style>