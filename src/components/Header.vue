<template>
  <header class="header">
    <div class="container header-container flex">
        <div class="header-logo-wrapper">
          <router-link to='/' class="logo"><img src="@/assets/img/icons/logo.svg" alt="logo" class="logo-img"> VAC</router-link>
          <h2 class="inventory-title">Inventory</h2>
        </div>
        <div class="header-btns">
          <router-link to='/inventory'>
            <v-btn
                class="first-header-btn to-inventory-btn"
                :light="true"
                title="Inventory"
            />
          </router-link>
          <router-link to='/request'>
            <v-btn
                class="to-request-btn"
                title="Request a car"
            />
          </router-link>

            <button 
              class="burger-icon" 
              v-bind:class="{ 'menu-open': isMenuVisible }"
              @click="toggleMenu"
            >
              <span></span>
            </button>

            <vMenu v-show="isMenuVisible" @openContactForm="openContactForm"/>
            <v-contact-form v-show="isVisibleContacts" @closeContactForm="closeContactForm"/>

        </div>
    </div>
  </header>
</template>

<script>
import vBtn from '@/components/v-btn.vue'
import vMenu from '@/components/v-menu.vue'
import VContactForm from "@/components/slider/v-contacts";
export default {
  name: 'Header',
  props: {},
  data: () => {
    return{
      isMenuVisible: false,
      isVisibleContacts: false
    }
  },
  components: {
    VContactForm,
    vBtn,
    vMenu
  },
  methods: {
    toggleMenu(){
      this.isMenuVisible = !this.isMenuVisible
    },
    openContactForm() {
      this.isMenuVisible = false
      this.isVisibleContacts = true
    },
    closeContactForm(){
      this.isVisibleContacts = false
    },
    hideContactForm() {
      this.isVisibleContacts = false
    },
    hideMenu() {
      this.isMenuVisible = false
    }
  },
  watch: {
    isMenuVisible: function (isMenuVisible) {
      let bodyClass = 'lock';
      if(isMenuVisible){
        document.body.classList.add(bodyClass);
      } else {
        document.body.classList.remove(bodyClass);
      }
    },
    isVisibleContacts: function (isVisibleContacts) {
      let bodyClass = 'lock';
      if(isVisibleContacts){
        document.body.classList.add(bodyClass);
      } else {
        document.body.classList.remove(bodyClass);
      }
    }
  },
  mounted() {
    document.addEventListener('click', this.hideContactForm.bind(this), true)
    document.addEventListener('click', this.hideMenu.bind(this), true)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.hideContactForm)
    document.removeEventListener('click', this.hideMenu)
  }
}
</script>

<style lang="sass">
  .header-logo-wrapper
    display: flex
    align-items: center
    gap: 40px
  .inventory-title
    font-weight: 700
    font-size: 25px
    line-height: 140%
    letter-spacing: 0.02em
    color: #41456B
    display: none
  .header
    position: fixed
    width: 100%
    z-index: 10
    top: 0
    left: 0
    background-color: #fff
    border-bottom: 1px solid #7481FF
    box-sizing: border-box

  .header-container
    align-items: center
    padding: 18px 0
    justify-content: space-between

  .header-btns
    display: flex
    align-items: center
    gap: 20px

  // -----------------BURGER---------------
  .burger-icon
    margin-left: 43px
    display: inline-block
    position: relative
    flex: 0 0 30px
    width: 30px
    height: 20px
    cursor: pointer
    z-index: 20
    span,
    &::before,
    &::after
        content: ''
        transition: all .3s
        left: 0
        position: absolute
        width: 100%
        height: 3px
        background-color: #41456B
        &:hover
            color: #fff
    &::before
        top: 0px
    &::after
        bottom: 0px
    span
        top: calc(50% - 1px)
  
  .menu-open
      span
          transform: scale(0)
      &::before
          transform: rotate(-45deg)
          top: calc(50% - 2px)
      &::after
          transform: rotate(45deg)
          bottom: 50%

  // ----------------MEDIA------------------
  @media screen and (max-width: 767.98px)
    .first-header-btn
      display: none
    .header-container
      padding: 10px 20px
    .logo
      font-size: 22px
    .burger-icon
      margin-left: 0
    .header-container
      padding: 18px 30px
  @media screen and (max-width: 376.98px)
    .container.header-container
      padding: 10px 10px
</style>