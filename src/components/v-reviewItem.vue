<template>

    <swiper-slide>
    <div class="v-reviewItem">


          <div class="v-reviewItem__photo-wrap">
            <img :src=" require('../assets/img/review/' + reviewItem_data.photo)" alt="photo" class="v-reviewItem__photo">
          </div>
          <div class="v-reviewItem__descr">
              <p class="v-reviewItem__name">{{reviewItem_data.name}}</p>
              <p class="v-reviewItem__text">{{reviewItem_data.text}}</p>
          </div>


    </div>
    </swiper-slide>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

export default {
    name: 'v-reviewItem',

    props:{
        reviewItem_data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
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
    .v-reviewItem
      flex-direction: column
      &__photo-wrap
        width: 100%
        //height: 400px
      &__photo
        height: auto
      &__descr
        width: 80%
    .v-reviewItem__text
      font-size: 16px
      line-height: 180%
      color: #606276

</style>