<template>
    <div class="homeChoose">
        <div class="container choose-container">
            <img src="@/assets/img/choose-dream.png" alt="choose our dream" class="choose-img">
            <div class="choose-descr">
                <h2 class="choose-title">Сhoose your dream vehicle in our catalog</h2>
                <div class="choose-wrap">
                  <p class="choose-text">In our catalogue there are many models of vehicles. Choose your car to your liking.</p>
                  <router-link to='/inventory'>
                    <v-btn
                        title="Inventory"
                    />
                  </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import vBtn from '@/components/v-btn.vue'

export default {
    name: 'HomeChoose',
    components: {
        vBtn
    }
}
</script>

<style lang="sass">

.homeChoose
    margin-bottom: 230px

.choose-container
    display: flex
    gap: 100px
    align-items: center

.choose-img
    width: 50%

.choose-text
    margin: 20px 0 40px
    font-weight: 400
    font-size: 16px
    line-height: 180%
    letter-spacing: 0.02em
    color: #606276

//---------------MEDIA-----------------
@media screen and (max-width: 1199.98px)
  .choose-container
    flex-direction: column-reverse
  .choose-descr
    display: flex
    width: 80%
  .choose-img
    width: 80%

@media screen and (max-width: 767.98px)
  .homeChoose
    margin-bottom: 80px
  .choose-descr,
  .choose-img
    width: 100%
  .choose-descr
    flex-direction: column
    
</style>