<template>
<div class="video-pagination">
  <div class="video-posts">
    <video-item
        v-for="post in paginatedData"
        :key="post.id"
        :videoItem_obj="post"
    />
  </div>

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
import VideoItem from "@/components/video/video-item";
export default {
  name: "video-pagination",
  components: {VideoItem, VBtn},
  data(){
    return {
      pageNumber: 0,
      windowsWidth: 0,
    }
  },

  created() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },

  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },

  props:{
    videoItem_data: {
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
      let l = this.videoItem_data.length,
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
      return this.videoItem_data
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
.video-pagination
  padding: 40px 0

.video-posts
  display: flex
  justify-content: space-between
  gap: 20px
  flex-wrap: wrap

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

@media screen and (max-width: 768px)
  .video-posts
    justify-content: center

</style>