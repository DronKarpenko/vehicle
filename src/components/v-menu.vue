<template>
    <div class="v-menu">
        <nav class="main-menu">
            <ul class="menu-list">
                <li class="menu-list__item to-inventory-link" @click="bodyUnLock">
                  <router-link to='/inventory' class="menu-list__link">Inventory</router-link>
                </li>
                <li class="menu-list__item">
                    <button
                        class="menu-list__link"
                        @click="onCallBack"
                    >
                      Contact us
                    </button>
                </li>
                <li class="menu-list__item" @click="bodyUnLock">
                    <router-link to='/about' class="menu-list__link">About VAC</router-link>
                </li>
                <li class="menu-list__item" @click="bodyUnLock">
                    <router-link to='/rates' class="menu-list__link">Loan Rates</router-link>
                </li>
                <li class="menu-list__item" @click="bodyUnLock">
                    <router-link to='/video' class="menu-list__link">Video</router-link>
                </li>
                <li class="menu-list__item" @click="bodyUnLock">
                    <router-link to='/blog' class="menu-list__link">Blog</router-link>
                </li>
                <li class="menu-list__item" @click="bodyUnLock">
                    <router-link to='/calculate' class="menu-list__link">Calculate</router-link>
                </li>
            </ul>
        
            <div class="v-menu-social">
                <a href="" class="v-menu-social__link">
                    <svg class="v-menu-social__link--img" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.85755 4.69556C6.59948 4.69556 4.72852 6.53427 4.72852 8.82459C4.72852 11.1149 6.56723 12.9536 8.85755 12.9536C11.1479 12.9536 12.9866 11.0827 12.9866 8.82459C12.9866 6.56652 11.1156 4.69556 8.85755 4.69556ZM8.85755 11.4697C7.40594 11.4697 6.21239 10.2762 6.21239 8.82459C6.21239 7.37298 7.40594 6.17943 8.85755 6.17943C10.3092 6.17943 11.5027 7.37298 11.5027 8.82459C11.5027 10.2762 10.3092 11.4697 8.85755 11.4697Z" fill="white"/>
                        <path d="M13.1503 5.5343C13.667 5.5343 14.0858 5.11547 14.0858 4.59881C14.0858 4.08216 13.667 3.66333 13.1503 3.66333C12.6337 3.66333 12.2148 4.08216 12.2148 4.59881C12.2148 5.11547 12.6337 5.5343 13.1503 5.5343Z" fill="white"/>
                        <path d="M15.5671 2.17976C14.7284 1.30879 13.5348 0.857178 12.18 0.857178H5.53484C2.72839 0.857178 0.857422 2.72815 0.857422 5.5346V12.1475C0.857422 13.5346 1.30903 14.7281 2.21226 15.5991C3.08323 16.4378 4.24452 16.8572 5.5671 16.8572H12.1477C13.5348 16.8572 14.6961 16.4056 15.5348 15.5991C16.4058 14.7604 16.8574 13.5669 16.8574 12.1798V5.5346C16.8574 4.17976 16.4058 3.01847 15.5671 2.17976ZM15.4381 12.1798C15.4381 13.1798 15.0832 13.9862 14.5026 14.5346C13.9219 15.083 13.1155 15.3733 12.1477 15.3733H5.5671C4.59936 15.3733 3.79291 15.083 3.21226 14.5346C2.63162 13.954 2.34129 13.1475 2.34129 12.1475V5.5346C2.34129 4.56685 2.63162 3.7604 3.21226 3.17976C3.76065 2.63137 4.59936 2.34105 5.5671 2.34105H12.2123C13.18 2.34105 13.9865 2.63137 14.5671 3.21202C15.1155 3.79266 15.4381 4.59911 15.4381 5.5346V12.1798Z" fill="white"/>
                    </svg>
                </a>
                <a href="" class="v-menu-social__link">
                    <svg class="v-menu-social__link--img" width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.95546 15.4946V8.60806H8.2855L8.86801 5.73866H5.95546V4.59091C5.95546 3.44315 6.53914 2.86927 7.70299 2.86927H8.86801V-0.00012207C8.2855 -0.00012207 7.56319 -0.00012207 6.53797 -0.00012207C4.39726 -0.00012207 3.04292 1.65322 3.04292 4.01703V5.73866H0.712891V8.60806H3.04292V15.4946H5.95546Z" fill="white"/>
                    </svg>
                </a>
                <a href="" class="v-menu-social__link">
                    <svg class="v-menu-social__link--img" width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.3847 2.27738C17.1902 1.55445 16.6203 0.984565 15.8974 0.789901C14.5769 0.428589 9.29471 0.428589 9.29471 0.428589C9.29471 0.428589 4.01273 0.428589 2.69221 0.776203C1.98328 0.970661 1.39939 1.55455 1.20493 2.27738C0.857422 3.5978 0.857422 6.33617 0.857422 6.33617C0.857422 6.33617 0.857422 9.08835 1.20493 10.395C1.3996 11.1178 1.96938 11.6877 2.69231 11.8823C4.02663 12.2438 9.29492 12.2438 9.29492 12.2438C9.29492 12.2438 14.5769 12.2438 15.8974 11.8961C16.6204 11.7016 17.1902 11.1317 17.3849 10.4089C17.7323 9.08835 17.7323 6.35008 17.7323 6.35008C17.7323 6.35008 17.7462 3.5978 17.3847 2.27738ZM7.61298 8.86598V3.80637L12.0054 6.33617L7.61298 8.86598Z" fill="white"/>
                    </svg>
                </a>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
  name: 'v-menu',
  data() {
      return{

      }
  },
  methods: {
    onCallBack(){
      this.$emit('openContactForm')
    },
    bodyUnLock: function () {
      let bodyClass = 'lock';
      document.body.classList.remove(bodyClass);
    }
  },

}
</script>

<style lang="sass">
    .v-menu
        box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1)
        position: absolute
        overflow: auto
        width: 40%
        height: 100vh
        right: 0
        top: 0
        z-index: 15
        background-color: #fff
    .main-menu
        padding: 100px 0 60px 60px
    .menu-list
        display: flex
        flex-direction: column
        gap: 20px
        &__link
            font-weight: 700
            font-size: 25px
            line-height: 140%
            letter-spacing: 0.02em
            color: #41456B
            transition: all .5s
            &:hover
                opacity: .7

    .v-menu-social
        display: flex
        align-items: center
        gap: 10px
        margin-top: 200px
        &__link
            width: 30px
            height: 30px
            background: #7481FF
            border-radius: 2px
            position: relative
            transition: all .5s
            svg
                position: absolute
                left: 50%
                top: 50%
                transform: translate(-50%, -50%)
                path
                    fill: #fff
            &:hover
                opacity: .7
    .to-inventory-link
        display: none

@media screen and (max-width: 767.98px)
  .v-menu
    width: 70%
  .to-inventory-link
    display: block
@media screen and (max-width: 459.98px)
  .v-menu
    width: 100%
</style>