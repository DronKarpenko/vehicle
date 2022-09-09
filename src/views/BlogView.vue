<template>
  <Header/>
  <main>
    <page-title pageTitle="Our blog"/>
    <blog-items/>
  </main>
  <Footer/>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from "@/components/Footer";
import PageTitle from "@/components/v-pageTitle";
import BlogItems from "@/components/blog/blogItems";
export default {
    name: 'blog-page',

    components: {
      BlogItems,
      PageTitle,
      Footer,
      Header
    }
}

</script>

<style lang="sass">

</style>