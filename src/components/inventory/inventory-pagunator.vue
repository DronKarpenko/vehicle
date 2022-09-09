<template>
  <div class="inventory-pagination">
    <div class="inventory-posts">
      <car-item
        v-for="post in paginatedData"
        :key="post.id"
        :carItem_data="post"
      />
    </div>

    <div class="pagination-buttons">
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
    </div>
  </div>
</template>

<script>
import VBtn from "@/components/v-btn";
import CarItem from "@/components/inventory/car-item";
export default {
  name: "inventory-pagination",
  components: {CarItem, VBtn},
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
    inventoryItem_data: {
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
      let l = this.inventoryItem_data.length,
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
      return this.inventoryItem_data
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

.inventory-posts
  display: flex
  justify-content: space-between
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
  .inventory-posts
    justify-content: center

</style>