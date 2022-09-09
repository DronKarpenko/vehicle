<template>
    <div class="blog">
        <div class="container blog-container">
            <div class="blog-header">
                <h2 class="blog-title">Interesting to read</h2>
                <router-link to='/blog' class="menu-list__link">
                    <v-btn
                      :light="true"
                      title="All articles"
                    />
                </router-link>
            </div>
              <swiper
                  class="blog-items"
                  :modules="modules"
                  :slides-per-view="3"
                  :space-between="20"
                  :breakpoints="breakpoints"
                  :loop="true"
                  navigation
                  @swiper="onSwiper"
                  @slideChange="onSlideChange"
              >
                <swiper-slide class="v-blogItem">
                  <img src="@/assets/img/blog/blog1.jpg" alt="blog1" class="v-blogItem__photo">
                  <div class="v-blogItem__descr">
                    <p class="v-blogItem__data">10 May, 2020</p>
                    <h3 class="v-blogItem__title">How to save on buying a car? Why is it better to buy from us</h3>
                  </div>
                </swiper-slide>

                <swiper-slide class="v-blogItem">
                  <img src="@/assets/img/blog/blog2.jpg" alt="blog1" class="v-blogItem__photo">
                  <div class="v-blogItem__descr">
                    <p class="v-blogItem__data">10 May, 2020</p>
                    <h3 class="v-blogItem__title">How fast can you order a car in Canada? How to save on car?</h3>
                  </div>
                </swiper-slide>

                <swiper-slide class="v-blogItem">
                  <img src="@/assets/img/blog/blog3.jpg" alt="blog1" class="v-blogItem__photo">
                  <div class="v-blogItem__descr">
                    <p class="v-blogItem__data">10 May, 2020</p>
                    <h3 class="v-blogItem__title">How to save on buying a car? Why is it better to buy from us</h3>
                  </div>
                </swiper-slide>
              </swiper>
        </div>
    </div>
</template>

<script>
import vBtn from '@/components/v-btn.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
export default {
    name: 'HomeBlog',
    components: {
        vBtn,
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
    data () {
      return {
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },

          1200: {
            slidesPerView: 3,
            spaceBetween: 20,
            loop: false,
          }
        },
      }
    }
}
</script>

<style lang="sass">
.blog
    margin: 220px 0 40px
    .swiper-wrapper
      padding-bottom: 35px

.blog-header
    margin-bottom: 60px
    display: flex
    justify-content: space-between
    align-items: center


.v-blogItem
  box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1)
  border-radius: 5px
  &__photo
    width: 100%
    height: auto
  &__descr
    padding: 20px 30px 30px 30px
  &__data
    font-weight: 400
    font-size: 16px
    line-height: 180%
    letter-spacing: 0.02em
    color: #606276
  &__title
    font-weight: 600
    font-size: 20px
    line-height: 25px
    color: #41456B

@media screen and (max-width: 1199.98px)
  .blog
    margin-top: 160px

@media screen and (max-width: 767.98px)
  .blog
    margin-top: 80px
  .blog-container
    padding-bottom: 40px
    position: relative
    button
      position: absolute
      width: 90%
      bottom: -10px
      left: 50%
      transform: translateX(-50%)
  .blog-header
    margin-bottom: 30px
</style>