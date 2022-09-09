<template>
  <div class="v-pagination">
    <ul class="pagination-posts">
      <li v-for="p in paginatedData">
        <slot>
          <router-link to='/one-blog'>
            <img :src=" require('@/assets/img/blog/' + p.photo) " alt="blog" class="v-blogItem__photo">
            <div class="v-blogItem__descr">
              <p class="v-blogItem__data">{{p.data}}</p>
              <h3 class="v-blogItem__title">{{p.title}}</h3>
            </div>
          </router-link>
        </slot>
      </li>
    </ul>
    <div class="pagination-buttons">
      <v-btn
          :disabled="pageNumber === 0"
          @click="prevPage"
          title="Previous"
      />
      <div class="page-buttons">
        <button
            class="pagination-circle"
            :class="{'active': button.id === this.pageNumber}"
            v-for="button in createPageButton"
            :key="button.id"
            @click="this.pageNumber = button.id"
        >
        </button>
      </div>
      <v-btn
          :disabled="pageNumber >= pageCount -1"
          @click="nextPage"
          title="Next"
      />
    </div>

  </div>
</template>

<script>
import VBtn from "@/components/v-btn";
export default {
  name: "v-pagination",
  components: {VBtn},
  data(){
    return{
      pageNumber: 0,
      windowsWidth: 0,
      // size: 9
    }
  },
  created() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
  props: {
    listData: {
      type: Array,
      required: true
    },
    size: {
      type: Number,
      required: false,
      default: 9
    },
    mobileSize: {
      type: Number,
      required: false,
      default: 6
    }
  },
  methods: {
    nextPage(){
      this.pageNumber++;
    },
    prevPage(){
      this.pageNumber--;
    },
    handleResize() {
      this.windowsWidth = window.innerWidth;
    }
  },
  computed:{
    pageCount(){
      let l = this.listData.length,
          s = this.size,
          ms = this.mobileSize;
      if(this.windowsWidth<=1024){
        return Math.ceil(l/ms);
      } else {
        return Math.ceil(l/s);
      }
    },
    paginatedData(){
      let start,
          end
      if(this.windowsWidth<=1024){
        start = this.pageNumber * this.mobileSize;
        end = start + this.mobileSize;
      } else {
        start = this.pageNumber * this.size;
        end = start + this.size;
      }
      return this.listData
          .slice(start, end);
    },
    createPageButton() {
      let pageButton_data = [];
      for(let i = 0; i < this.pageCount; i++){
        pageButton_data.push({id: i});
      }
      return pageButton_data;
    },
  }
}
</script>

<style lang="sass" scoped>
.pagination-posts
  display: flex
  justify-content: space-between
  gap: 20px
  flex-wrap: wrap

li
  list-style-type: none
  width: 30%
  box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1)
  border-radius: 5px
.pagination-buttons
  width: 100%
  display: flex
  justify-content: center
  margin-top: 40px
  gap: 20px
  align-items: center

.page-buttons
  display: flex
  gap: 10px
  align-items: center
.pagination-circle
  cursor: pointer
  height: 10px
  width: 10px
  border-radius: 50%
  background: #606276
  opacity: .3

.pagination-circle.active
  opacity: 1

@media screen and (max-width: 1024px)
  li
    width: 45%
@media screen and (max-width: 640px)
  .pagination-posts
    justify-content: center
  li
    width: 90%
</style>