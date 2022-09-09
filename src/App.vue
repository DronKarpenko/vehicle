<template>
    <router-view/>
    <v-preloader/>
</template>

<script>

import VPreloader from "@/components/v-preloader";
export default {
    name: 'app',

  components:{VPreloader},

    data() {
        return {
          isLock: false
        }
    },
}
</script>

<style lang="sass">
body.lock
  overflow: hidden
</style>
