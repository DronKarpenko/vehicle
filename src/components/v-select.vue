<template>
  <div class="v-select">
    <p
        class="select-title"
        @click="areOptionsVisible = !areOptionsVisible"
    >
      {{selected}}
      <img
          src="@/assets/img/icons/arrow-bottom.svg"
          alt="click-down"
          class="select-arrow"
          :class="{'arrow-bottom':areOptionsVisible}"
      >
    </p>
    <div
        class="select-options"
        v-if="areOptionsVisible"
    >
      <p
          class="select-options__item"
          v-for="option in options"
          :key="option.value"
          @click="selectOption(option)"
      >
        {{option.name}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-select",
  data() {
    return {
      areOptionsVisible: false
    }
  },
  props: {
    options: {
      type: Array,
      default() {
        return []
      }
    },
    selected: {
      type: String,
      default: ''
    }
  },
  methods: {
    selectOption(option) {
      this.$emit('select', option)
      this.areOptionsVisible = false
    },
    hideSelect() {
      this.areOptionsVisible = false
    }
  },
}
</script>

<style scoped lang="sass">

.v-select
  font-weight: 500
  font-size: 16px
  line-height: 159%
  color: #41456B
  position: relative
  width: 75%
.select-title
  padding: 10px 20px
  border: 1px solid #D7D7D7
  border-top-left-radius: 2px
  border-top-right-radius: 2px
  cursor: pointer
.select-options
  position: absolute
  width: 100%
  left: 0
  top: 45px
  background-color: #fff
  border: 1px solid #D7D7D7
  border-bottom-left-radius: 2px
  border-bottom-right-radius: 2px
.select-options__item
  width: 100%
  box-sizing: border-box
  padding: 10px 20px
  cursor: pointer
  &:hover
    background-color: rgba(65, 69, 107, .1)

.select-arrow
  position: absolute
  right: 20px
  top: 20px
  transition: all .3s

.select-arrow.arrow-bottom
  transform: rotate(180deg)

@media screen and (max-width: 1024px)
  .v-select
    width: 100%
</style>