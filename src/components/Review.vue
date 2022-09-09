<template>
    <section class="reviews">
                <div class="container">
                    <h2 class="reviews-title">What our client say about us!</h2>
                    <div class="reviews-slider__button">
                      <swiper
                          :modules="modules"
                          :slides-per-view="1"
                          :space-between="50"
                          :loop="true"
                          navigation
                          @swiper="onSwiper"
                          @slideChange="onSlideChange"
                      >
                        <swiper-slide class="v-reviewItem">
                          <div class="v-reviewItem__photo-wrap">
                            <img src="../assets/img/review/reviewSlide1.jpg" alt="photo" class="v-reviewItem__photo">
                          </div>
                          <div class="v-reviewItem__descr">
                            <p class="v-reviewItem__name">Laura Chaisson</p>
                            <p class="v-reviewItem__text">In irure et ipsum eiusmod adipisicing id elit cillum proident. Adipisicing ullamco nisi veniam occaecat id excepteur ad non. Sunt occaecat elit ullamco commodo exercitation. Anim mollit irure Lorem proident veniam excepteur non irure Lorem. Lorem esse sint in nisi id esse.</p>
                          </div>
                        </swiper-slide>

                        <swiper-slide class="v-reviewItem">
                          <div class="v-reviewItem__photo-wrap">
                            <img src="../assets/img/review/reviewSlide2.jpg" alt="photo" class="v-reviewItem__photo">
                          </div>
                          <div class="v-reviewItem__descr">
                            <p class="v-reviewItem__name">Dron Karpenko</p>
                            <p class="v-reviewItem__text">Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                          </div>
                        </swiper-slide>

                        <swiper-slide class="v-reviewItem">
                          <div class="v-reviewItem__photo-wrap">
                            <img src="../assets/img/review/reviewSlide3.jpg" alt="photo" class="v-reviewItem__photo">
                          </div>
                          <div class="v-reviewItem__descr">
                            <p class="v-reviewItem__name">Alex Ivanov</p>
                            <p class="v-reviewItem__text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use</p>
                          </div>
                        </swiper-slide>
                      </swiper>
                    </div>
                </div>
        </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

export default {
    name: "Reviews",

    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Navigation],
      };
    },
}

</script>

<style lang="sass">

.reviews-slider__button
    position: relative
    overflow: hidden
    width: 99%
    box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1)
    border-radius: 5px
.reviews
    margin: 220px 0

.reviews-title
    margin-bottom: 60px

.reviews-slider
    display: flex
    box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1)
    border-radius: 5px
    position: relative

// ----------------MEDIA------------------
@media screen and (max-width: 1199.98px)
  .reviews
    margin: 160px 0
@media screen and (max-width: 767.98px)
  .reviews
    margin: 80px 0

//----------------SLIDE----------
.swiper-button-prev,
.swiper-button-next
  position: absolute
  top: 50%
  transform: translateY(-50%)
  width: 53px
  height: 53px
  border-radius: 50%
  background-color: rgba(116, 129, 255, .8)
  &:after
    font-size: 24px
    color: #fff
    position: absolute
    left: 50%
    top: 50%
    transform: translate(-50%, -50%)

.swiper-button-next
  right: 0
.swiper-button-prev
  left: 0


.v-reviewItem
  display: flex
  align-items: center
  &__photo-wrap
    width: 40%
    height: 100%
  &__photo
    width: 100%
    height: 100%
    object-fit: cover
  &__descr
    width: 60%
    padding: 55px 60px 55px 40px
  &__name
    margin-bottom: 11px
    font-weight: 400
    font-size: 16px
    line-height: 180%
    letter-spacing: 0.02em
    color: #606276
  &__text
    font-weight: 600
    font-size: 20px
    line-height: 25px
    color: #41456B
@media screen and (max-width: 1199.98px)
  .v-reviewItem__descr
    padding: 40px 60px 40px 40px
@media screen and (max-width: 767.98px)
  .swiper-button-prev,
  .swiper-button-next
    top: 30%
    width: 35px
    height: 35px
    &:after
      font-size: 16px
  .v-reviewItem
    flex-direction: column
    &__photo-wrap
      width: 100%
    &__photo
      height: auto
    &__descr
      width: 80%
  .v-reviewItem__text
    font-size: 16px
    line-height: 180%
    color: #606276
</style>