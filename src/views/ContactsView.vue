<template>
  <div class="contacts-page">
    <Header/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
    name: 'contacts-page',

    components: {
      Header,
    }
}

</script>

<style lang="sass">
  .contacts-page
    padding-top: 120px
</style>