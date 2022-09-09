<template>
<div class="video-item">
  <div class="video-item__photo">
    <img src="@/assets/img/video/videoplay.png" alt="play" class="videoplay-btn" @click="openVideoPopup">
    <img :src=" require('@/assets/img/video/' + videoItem_obj.photo) " alt="video"  class="video-item__img" @click="openVideoPopup">
  </div>
  <h3 class="video-item__title">{{videoItem_obj.title}}</h3>
  <div class="video-popup" v-if="isVisibleVideo" @click="hideVideoPopup">
    <video
        controls
        @click.stop
        :src=" require('@/assets/img/video/' + videoItem_obj.video) "
        :poster=" require('@/assets/img/video/' + videoItem_obj.photo) "
    ></video>
  </div>
</div>
</template>

<script>
export default {
  name: "video-item",
  data() {
    return {
      isVisibleVideo: false
    }
  },
  props: {
    videoItem_obj: {
      type: Object,
      required: true
    },
  },
  methods: {
    openVideoPopup(index) {
      this.isVisibleVideo = true
    },
    hideVideoPopup() {
      this.isVisibleVideo = false
    }
  },
  watch: {
    isVisibleVideo: function (isVisibleVideo) {
      let bodyClass = 'lock';
      if(isVisibleVideo){
        document.body.classList.add(bodyClass);
      } else {
        document.body.classList.remove(bodyClass);
      }
    }
  }
}
</script>

<style lang="sass">

.video-item
  position: relative
  cursor: pointer
  width: 45%

.video-item__photo
  position: relative
  &:hover
    .videoplay-btn
      width: 65px
      height: 65px

.video-item__img
  width: 100%
  height: auto

.videoplay-btn
  position: absolute
  height: 53px
  width: 53px
  display: block
  left: 50%
  top: 50%
  transform: translate(-50%, -50%)
  transition: all .5s

.video-item__title
  font-weight: 700
  font-size: 25px
  line-height: 140%
  letter-spacing: 0.02em
  color: #41456B
  margin-top: 20px

//---------------POPUP-VIDEO--------------
.video-popup
  position: fixed
  z-index: 20
  top: 0
  bottom: 0
  right: 0
  left: 0
  background: rgba(0, 0, 0, 0.3)
  display: flex
  justify-content: center
  align-items: center
  video
    width: 65%
    height: auto

@media screen and (max-width: 768px)
  .video-item
    width: 100%
@media screen and (max-width: 480px)
  .video-item__title
    font-size: 20px
    margin-top: 10px

</style>