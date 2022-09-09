<template>
  <Header/>
  <main>
    <div class="one-blog-bg"></div>
    <div class="one-blog__post">
      <p class="one-blog__post-data">
        {{data}}
        <button class="one-blog__back">
          <router-link class="link-to-back" to='/blog'><span>BACK</span></router-link>
        </button>
      </p>
      <h2 class="one-blog__post-title">{{title}}</h2>

      <div class="one-blog__post-content">
        <slot></slot>
      </div>
    </div>
  </main>
  <home-blog class="one-blog__carusel"/>
  <Footer/>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomeBlog from "@/components/HomeBlog";
export default {
  name: "one-blog",
  components: {HomeBlog, Footer, Header},
  props: {
    data: {
      type: String,
      default: '01 May, 2022'
    },
    title: {
      type: String,
      default: 'Page Title'
    }
  }
}
</script>

<style lang="sass">
.one-blog-bg
  height: 200px
  background-image: url(@/assets/img/one-blog-bg.jpg)
  background-size: cover
  background-position: center
  background-repeat: no-repeat
  margin-top: 84px
.one-blog__post
  width: 100%
  background-color: #fff
  max-width: 1000px
  padding: 60px
  box-sizing: border-box
  margin: 0 auto
  border-radius: 5px 5px 0px 0px
  position: relative
  top: -80px
.one-blog__carusel
  margin-top: 140px
.one-blog__post-data
  position: relative
  font-weight: 400
  font-size: 16px
  line-height: 180%
  letter-spacing: 0.02em
  color: #606276
.one-blog__back
  position: absolute
  left: -120px
  top: 60px
  font-weight: 700
  font-size: 16px
  line-height: 14px
  letter-spacing: 0.02em
  text-transform: uppercase
  color: #606276
.link-to-back
  &:before
    content: url(@/assets/img/icons/arrow-back.svg)
    position: absolute
    height: 24px
    width: 24px
    left: -30px
    top: -3px

.one-blog__post-title
  margin: 5px 0 20px 0
.one-blog__post-content
  font-weight: 400
  font-size: 16px
  line-height: 180%
  letter-spacing: 0.02em
  color: #7C7A84

@media screen and (max-width: 1199.98px)
  .one-blog__back
    left: -20px
    span
      display: none
@media screen and (max-width: 1023.98px)
  .one-blog__post
    width: 90%
@media screen and (max-width: 767.98px)
  .one-blog-bg
    margin-top: 0
@media screen and (max-width: 480px)
  .one-blog-bg
    height: 140px
  .one-blog__post
    width: 100%
    padding: 20px
    top: 0
  .one-blog__post-data
    text-align: right
  .one-blog__back
    top: 5px
    left: 25px
    span
      display: inline-block
  .one-blog__carusel
    margin-top: 0
</style>