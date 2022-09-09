<template>
  <section class="blog-items">
    <div class="container blog-items__container">
      <v-pagination
        class="blog-pagination"
        :listData="blogPosts"
      >
      </v-pagination>
    </div>
  </section>
</template>

<script>
import VBlogItem from "@/components/v-blogItem";
import VPagination from "@/components/v-pagination";
export default {
  name: "blogItems",
  components: {VPagination, VBlogItem},
  data() {
    return{
      blogPosts: [
        {
          id: 1,
          photo: 'blog1.jpg',
          data: '10 May 2022',
          title: 'How to save on buying a car? Why is it better to buy from us'
        },
        {
          id: 2,
          photo: 'blog2.jpg',
          data: '15 May 2022',
          title: 'How to save on buying a car? Why is it better to buy from us'
        },
        {
          id: 3,
          photo: 'blog3.jpg',
          data: '24 May 2022',
          title: 'How to save on buying a car? Why is it better to buy from us'
        },
        {
          id: 4,
          photo: 'blog4.jpg',
          data: '10 June 2022',
          title: 'How to save on buying a car? Why is it better to buy from us'
        },
        {
          id: 5,
          photo: 'blog5.jpg',
          data: '9 April 2022',
          title: 'How to save on buying a car? Why is it better to buy from us'
        },
        {
          id: 6,
          photo: 'blog6.jpg',
          data: '11 May 2022',
          title: 'How to save on buying a car? Why is it better to buy from us'
        },
        {
          id: 7,
          photo: 'blog7.jpg',
          data: '10 May 2022',
          title: 'How to save on buying a car? Why is it better to buy from us'
        },
        {
          id: 8,
          photo: 'blog8.jpg',
          data: '10 May 2022',
          title: 'How to save on buying a car? Why is it better to buy from us'
        },
        {
          id: 9,
          photo: 'blog9.jpg',
          data: '10 May 2022',
          title: 'How to save on buying a car? Why is it better to buy from us'
        },
        {
          id: 10,
          photo: 'blog4.jpg',
          data: '10 June 2022',
          title: 'How to save on buying a car? Why is it better to buy from us'
        },
        {
          id: 11,
          photo: 'blog5.jpg',
          data: '9 April 2022',
          title: 'How to save on buying a car? Why is it better to buy from us'
        },
        {
          id: 12,
          photo: 'blog6.jpg',
          data: '11 May 2022',
          title: 'How to save on buying a car? Why is it better to buy from us'
        },
        {
          id: 13,
          photo: 'blog7.jpg',
          data: '10 May 2022',
          title: 'How to save on buying a car? Why is it better to buy from us'
        },
        {
          id: 14,
          photo: 'blog1.jpg',
          data: '10 May 2022',
          title: 'How to save on buying a car? Why is it better to buy from us'
        },
        {
          id: 15,
          photo: 'blog2.jpg',
          data: '15 May 2022',
          title: 'How to save on buying a car? Why is it better to buy from us'
        },
        {
          id: 16,
          photo: 'blog3.jpg',
          data: '24 May 2022',
          title: 'How to save on buying a car? Why is it better to buy from us'
        },
        {
          id: 17,
          photo: 'blog4.jpg',
          data: '10 June 2022',
          title: 'How to save on buying a car? Why is it better to buy from us'
        },
        {
          id: 18,
          photo: 'blog5.jpg',
          data: '9 April 2022',
          title: 'How to save on buying a car? Why is it better to buy from us'
        },
        {
          id: 19,
          photo: 'blog6.jpg',
          data: '11 May 2022',
          title: 'How to save on buying a car? Why is it better to buy from us'
        },
        {
          id: 20,
          photo: 'blog7.jpg',
          data: '10 May 2022',
          title: 'How to save on buying a car? Why is it better to buy from us'
        },
        {
          id: 21,
          photo: 'blog8.jpg',
          data: '10 May 2022',
          title: 'How to save on buying a car? Why is it better to buy from us'
        }
      ]
    }
  }
}
</script>

<style lang="sass">

.blog-posts
  display: flex
  justify-content: space-between
  gap: 20px
  flex-wrap: wrap

.blog-pagination
  margin: 40px auto

//---------------MEDIA-----------------
@media screen and (max-width: 1024px)
  .blog-posts
    width: 45%
@media screen and (max-width: 640px)
  .blog-items__container
    justify-content: center
  .blog-posts
    margin: 30px 0 20px 0
    width: 90%
</style>