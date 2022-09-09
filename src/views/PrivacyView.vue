<template>
  <Header/>
  <main>
    <page-title pageTitle="Privacy Policy"/>
    <div class="container privacy-container">
      <div v-for="accordion in privaciItems" :key="accordion.id">
        <v-accordion>
          <template v-slot:title>{{ accordion.title }}</template>

          <template v-slot:content>
            <div>{{ accordion.text }}</div>
          </template>
        </v-accordion>
      </div>
    </div>
  </main>
  <Footer/>
</template>

<script>
import Header from "@/components/Header";
import PageTitle from "@/components/v-pageTitle";
import Footer from "@/components/Footer";
import VAccordion from "@/components/v-accordion";
export default {
  name: "privacy-page",
  components: {VAccordion, Footer, PageTitle, Header},
  data() {
    return{
      privaciItems: [
        {
          id: 1,
          title: 'Terms',
          text: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions.'
        },
        {
          id: 2,
          title: 'Authorization',
          text: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions.'
        },
        {
          id: 3,
          title: 'Links',
          text: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions.'
        },
        {
          id: 4,
          title: 'Site terms of use modifications',
          text: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions.'
        },
        {
          id: 5,
          title: 'Governing law',
          text: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions.'
        },
        {
          id: 6,
          title: 'How we treat your personal information',
          text: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions.'
        },
        {
          id: 7,
          title: 'Cookies',
          text: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions.'
        },
      ]
    }
  }
}
</script>

<style lang="sass">
.privacy-container
  padding: 40px 0
@media screen and (max-width: 1200px)
  .privacy-container
    padding-left: 30px
    padding-right: 30px
</style>