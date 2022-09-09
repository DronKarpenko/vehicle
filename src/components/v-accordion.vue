<template>
  <div class="wrapper">
    <div class="accordion" @click="toggleItem">
      <img src="@/assets/img/icons/arrow-bottom.svg" alt="click-down" class="accordion-arrow" :class="{'arrow-bottom':show}">
      <h3 class="accordion-title">
        <slot name="title"></slot>
      </h3>
    </div>
    <div v-show="show" class="accordion-content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data: function() {
    return {
      show: false
    };
  },
  methods: {
    toggleItem: function() {
      this.show = !this.show;
    }
  }
};
</script>

<style lang="sass">
.wrapper
  width: 100%
  position: relative
  padding: 30px 80px 10px 30px
  box-sizing: border-box
  border: 1px solid #d7d7d7
  margin-bottom: 20px

.accordion-arrow
  position: absolute
  right: -50px
  top: 10px
  transition: all .3s

.accordion-arrow.arrow-bottom
  transform: rotate(180deg)

.accordion
  display: flex
  position: relative
  cursor: pointer
  margin: 0

.accordion-title
  font-weight: 600
  font-size: 20px
  color: #41456B
  margin-bottom: 20px

.accordion-content
  font-weight: 400
  font-size: 16px
  line-height: 180%
  letter-spacing: 0.02em
  color: #606276
  margin-bottom: 20px
</style>