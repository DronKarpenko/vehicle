<template>
  <Header/>
    <main>
      <page-title
          pageTitle="Vehicle videos"
      />
      <div class="container video-container">
        <video-pagination
            :videoItem_data="videoItems"
            :size="4"
            :mobile-size="4"
        />
      </div>
    </main>
  <Footer/>

</template>

<script>
import Header from '@/components/Header.vue'
import Footer from "@/components/Footer";
import PageTitle from "@/components/v-pageTitle";
import VideoPagination from "@/components/video/video-pagination";
export default {
    name: 'video-page',

    components: {
      VideoPagination,
      PageTitle,
      Header,
      Footer
    },

    data() {
      return{
        videoItems: [
          {
            id: 1,
            photo: 'video1.jpg',
            title: 'VAC\'s Vehicle Shoot #10: 2018 Chevy Cruze Hatchback',
            video: 'video1.mp4'
          },
          {
            id: 2,
            photo: 'video2.jpg',
            title: 'VAC\'s Vehicle Shoot #11: Toyota Highlander',
            video: 'video2.mp4'
          },
          {
            id: 3,
            photo: 'video3.jpg',
            title: 'VAC\'s Vehicle Shoot #09: 2019 Mazda CX-5',
            video: 'video3.mp4'
          },
          {
            id: 4,
            photo: 'video4.jpg',
            title: 'Some Vehicles VAC Offers!',
            video: 'video4.mp4'
          },
          {
            id: 5,
            photo: 'video3.jpg',
            title: 'VAC\'s Vehicle Shoot #09: 2019 Mazda CX-5',
            video: 'video3.mp4'
          },
          {
            id: 6,
            photo: 'video4.jpg',
            title: 'Some Vehicles VAC Offers!',
            video: 'video4.mp4'
          },
          {
            id: 7,
            photo: 'video1.jpg',
            title: 'VAC\'s Vehicle Shoot #10: 2018 Chevy Cruze Hatchback',
            video: 'video1.mp4'
          },
          {
            id: 8,
            photo: 'video2.jpg',
            title: 'VAC\'s Vehicle Shoot #11: Toyota Highlander',
            video: 'video2.mp4'
          },
          {
            id: 9,
            photo: 'video2.jpg',
            title: 'VAC\'s Vehicle Shoot #11: Toyota Highlander',
            video: 'video2.mp4'
          },
          {
            id: 10,
            photo: 'video3.jpg',
            title: 'VAC\'s Vehicle Shoot #09: 2019 Mazda CX-5',
            video: 'video3.mp4'},
          {
            id: 11,
            photo: 'video1.jpg',
            title: 'VAC\'s Vehicle Shoot #10: 2018 Chevy Cruze Hatchback',
            video: 'video1.mp4'
          }
        ],
      }
    },
}

</script>

<style lang="sass">
</style>