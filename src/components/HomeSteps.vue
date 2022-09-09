<template>
    <section class="steps">
        <div class="container steps-container">
            <h2 class="steps-title">Your perfect car in 5 easy steps</h2>
            <div class="steps-wrap">
                <div class="steps-items">
                    <stepItem
                        v-for="step in stepsItems"
                        :key="step.id"
                        :stepItem_data="step"
                    />
                </div>
                <img src="@/assets/img/steps-img.png" alt="product" class="steps-img">
                <img src="@/assets/img/steps-img--tablet.png" alt="product" class="steps-img--tablet">
            </div>
        </div>
    </section>
</template>

<script>
import stepItem from '@/components/v-stepItem.vue';
export default {
    name: 'HomeSteps',
    data(){
        return{
            stepsItems: [
                {
                    id: 1, 
                    title: 'First contact', 
                    text: 'Tell us what your dream vehicle is.'
                },
                {
                    id: 2, 
                    title: 'Vehicle selection', 
                    text: 'One of our Qualified Agents sends you custom pictures and videos of the car you are interested in.'
                },
                {
                    id: 3, 
                    title: 'Secure financing', 
                    text: 'You work with a dedicated Qualified Agent to secure financing on your terms.'
                },
                {
                    id: 4, 
                    title: 'Vehicle delivery', 
                    text: 'We deliver your car to your home or office for you to test drive.'
                },
                {
                    id: 5, 
                    title: 'Getting vehicle', 
                    text: 'If you love the vehicle, you sign the paperwork and keep the car.'
                },
            ]
        }
    },
    components: {
        stepItem
    }
}
</script>

<style lang="sass">
    .steps
        padding: 220px 0

    .steps-title
        width: 34%
        margin-bottom: 60px

    .steps-wrap
        display: flex
        justify-content: space-between
        align-items: center

    .steps-items,
    .steps-img
        width: 45%

    .steps-img
        height: auto
    .steps-img--tablet
      display: none
//---------------MEDIA-----------------
@media screen and (max-width: 1199.98px)
  .steps
    padding-top: 0
    padding-bottom: 160px
  .steps-title
    width: 100%
  .steps-items
    width: 60%
  .steps-img
    display: none
  .steps-img--tablet
    height: auto
    display: block
    width: 30%

@media screen and (max-width: 767.98px)
  .steps
    padding: 80px 0
  .steps-wrap
    flex-direction: column
  .steps-items,
  .steps-img
    width: 100%
  .steps-img
    display: block
  .steps-img--tablet
    display: none

</style>