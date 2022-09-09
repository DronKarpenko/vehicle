<template>
  <Header class="inventory-header"/>
  <main>
    <div class="container inventory-container">
      <div class="cars-inventory__sidebar"
        :class="{'visible-sidebar' : isVisibleSidebar}"
      >
        <button
            class="sidebar-close__btn"
            @click="closeContactForm"
            v-show="isVisibleSidebar"
        ></button>
        <div class="sidebar-wrap">
          <div class="sidebar-top">
            <h3 class="sidebar-title">Detailed search</h3>
            <button class="sidebar-clear">Clear filters</button>
          </div>
          <div class="sidebar-content">
            <v-accordion class="sidebar-filter">
              <template v-slot:title>Make, Model</template>
              <template v-slot:content>

              </template>
            </v-accordion>
            <v-accordion class="sidebar-filter">
              <template v-slot:title>Body type</template>
              <template v-slot:content>
                <ul class="sidebar-filter__content">
                  <li class="sidebar-filter__item">
                    <input
                        type="checkbox"
                        id="trucks"
                        v-model="bodyTypes"
                        value="trucks"
                    >
                    <label for="trucks"><span></span>Trucks</label>
                  </li>
                  <li class="sidebar-filter__item">
                    <input
                        type="checkbox"
                        id="suv"
                        v-model="bodyTypes"
                        value="suv"
                    >
                    <label for="suv"><span></span>SUV</label>
                  </li>
                  <li class="sidebar-filter__item">
                    <input
                        type="checkbox"
                        id="sedan"
                        v-model="bodyTypes"
                        value="sedan"
                    >
                    <label for="sedan"><span></span>Sedan</label>
                  </li>
                  <li class="sidebar-filter__item">
                    <input
                        type="checkbox"
                        id="hatchback"
                        v-model="bodyTypes"
                        value="hatchback"
                    >
                    <label for="hatchback"><span></span>Hatchback</label>
                  </li>
                  <li class="sidebar-filter__item">
                    <input
                        type="checkbox"
                        id="coupe"
                        v-model="bodyTypes"
                        value="coupe"
                    >
                    <label for="coupe"><span></span>Coupe</label>
                  </li>
                  <li class="sidebar-filter__item">
                    <input
                        type="checkbox"
                        id="convertiable"
                        v-model="bodyTypes"
                        value="convertiable"
                    >
                    <label for="convertiable"><span></span>Convertiable</label>
                  </li>
                  <li class="sidebar-filter__item">
                    <input
                        type="checkbox"
                        id="van"
                        v-model="bodyTypes"
                        value="van"
                    >
                    <label for="van"><span></span>VAN</label>
                  </li>
                </ul>
              </template>
            </v-accordion>
            <v-accordion class="sidebar-filter">
              <template v-slot:title>Transmission</template>
              <template v-slot:content>
                <ul class="sidebar-filter__content">
                  <li class="sidebar-filter__item">
                    <input
                        type="checkbox"
                        id="automatic"
                        value="automatic"
                        v-model="transmissions"
                    >
                    <label for="automatic"><span></span>Automatic</label>
                  </li>
                  <li class="sidebar-filter__item">
                    <input
                        type="checkbox"
                        id="manual"
                        value="manual"
                        v-model="transmissions"
                    >
                    <label for="manual"><span></span>Manual</label>
                  </li>
                </ul>                
              </template>
            </v-accordion>
            <v-accordion class="sidebar-filter">
              <template v-slot:title>Price</template>
              <template v-slot:content>
                <div class="sidebar-filter__range-num">
                  <span>$ {{minPrice}}</span>
                  <span>$ {{maxPrice}}</span>
                </div>
                <div class="sidebar-filter__range-slider">
                  <input
                      type="range"
                      min="1000"
                      max="100000"
                      step="100"
                      v-model="minPrice"
                      @change="setFilterPrice"
                  >
                  <input
                      type="range"
                      min="1000"
                      max="100000"
                      step="100"
                      v-model="maxPrice"
                      @change="setFilterPrice"
                  >
                </div>
              </template>
            </v-accordion>
            <v-accordion class="sidebar-filter">
              <template v-slot:title>Year</template>
              <template v-slot:content>
                <div></div>
              </template>
            </v-accordion>
            <v-accordion class="sidebar-filter">
              <template v-slot:title>Kilometres</template>
              <template v-slot:content>
                <div></div>
              </template>
            </v-accordion>
          </div>
          <v-btn class="sidebar-apply" title="Apply" @click="closeContactForm" />
        </div>
      </div>
      <div class="cars-inventory__main">
        <div class="cars-inventory__header">
          <div class="cars-inventory__header-media__btn">
            <button class="open-filter-btn"
              @click="openSidebar"
            >
              <img src="@/assets/img/icons/filter-icon.svg" alt="filter">
            </button>
            <button class="sidebar-clear">Clear filters</button>
          </div>
          <input
              type="text"
              class="inventory-search"
              v-model="search"
              placeholder="Find a dream car..."
          >
          <div class="inventory-sorted">
            <span>Sorted by</span>

            <select
                v-model="selectedSort"
                @change="changeOption"
                name="sorted-cars"
                id="sorted-cars"
                class="inventory-sorted__params"
            >
              <option value="recommendations">Recommendations</option>
              <option value="miliage">Newest inventory</option>
              <option value="price">Lowest price</option>
              <option value="price">Highest price</option>
            </select>

          </div>
        </div>
          <inventory-pagination
              :inventoryItem_data="filteredList"
              :size="6"
          />
      </div>
    </div>
  </main>
  <Footer/>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CarItem from "@/components/inventory/car-item";
import VAccordion from "@/components/v-accordion";
import VBtn from "@/components/v-btn";
import InventoryPagination from "@/components/inventory/inventory-pagunator";
export default {
  name: "inventory-page",
  components: {InventoryPagination, VBtn, VAccordion, CarItem, Footer, Header},
  data(){
    return {
      cars: [
        {
          id: 1,
          brand: 'Porsche',
          model: 'Panamera II Turbo S E-Hybrid',
          bodyType: 'Sedan',
          transmission: 'automatic',
          price: 34000,
          year: 2015,
          miliage: 120000,
          photo: 'porsche-panamera.jpg'
        },
        {
          id: 2,
          brand: 'Mersedes-Benz',
          model: 'CLA',
          bodyType: 'Coupe',
          transmission: 'automatic',
          price: 50000,
          year: 2017,
          miliage: 175000,
          photo: 'mercedes-benz-cla.jpg'
        },
        {
          id: 3,
          brand: 'Audi',
          model: 'A7',
          bodyType: 'Hatchback',
          transmission: 'manual',
          price: 25500,
          year: 2009,
          miliage: 90000,
          photo: 'audi-a7.jpg'
        },
        {
          id: 4,
          brand: 'Ford',
          model: 'Fiesta',
          bodyType: 'Hatchback',
          transmission: 'automatic',
          price: 9000,
          year: 2018,
          miliage: 46000,
          photo: 'ford-fiesta.webp'
        },
        {
          id: 5,
          brand: 'Ford',
          model: 'Ka',
          bodyType: 'Coupe',
          transmission: 'manual',
          price: 8900,
          year: 2009,
          miliage: 130000,
          photo: 'ford-ka.webp'
        },
        {
          id: 6,
          brand: 'Porsche',
          model: 'Cayenne',
          bodyType: 'SUV',
          transmission: 'automatic',
          price: 39900,
          year: 2013,
          miliage: 189000,
          photo: 'porsche-cayenne.webp'
        },
        {
          id: 7,
          brand: 'Mersedes-Benz',
          model: 'W124',
          bodyType: 'Convertiable',
          transmission: 'automatic',
          price: 25000,
          year: 2015,
          miliage: 139000,
          photo: 'mercedes-benz-w124.jpg'
        },
        {
          id: 8,
          brand: 'Mitsubishi',
          model: 'Outlander',
          bodyType: 'Sedan',
          transmission: 'automatic',
          price: 29000,
          year: 2017,
          miliage: 156000,
          photo: 'mitsubishi-outlander.jpg'
        },
        {
          id: 9,
          brand: 'Nissan',
          model: 'Leaf',
          bodyType: 'Hatchback',
          transmission: 'automatic',
          price: 25500,
          year: 2019,
          miliage: 24000,
          photo: 'nissan-leaf.webp'
        },
        {
          id: 10,
          brand: 'Opel',
          model: 'Astra',
          bodyType: 'Hatchback',
          transmission: 'manual',
          price: 14000,
          year: 2019,
          miliage: 51000,
          photo: 'opel-astra.webp'
        },
        {
          id: 11,
          brand: 'Opel',
          model: 'Vivaro',
          bodyType: 'VAN',
          transmission: 'automatic',
          price: 14500,
          year: 2014,
          miliage: 135000,
          photo: 'opel-vivaro.webp'
        },
        {
          id: 12,
          brand: 'Toyota',
          model: 'Avensis',
          bodyType: 'SUV',
          transmission: 'automatic',
          price: 7350,
          year: 2008,
          miliage: 240000,
          photo: 'toyota-avensis.webp'
        },
        {
          id: 13,
          brand: 'Toyota',
          model: 'Hilux',
          bodyType: 'Trucks',
          transmission: 'automatic',
          price: 38000,
          year: 2022,
          miliage: 5000,
          photo: 'toyota-hilux.webp'
        },
        {
          id: 14,
          brand: 'Toyota',
          model: 'Prado',
          bodyType: 'VAN',
          transmission: 'automatic',
          price: 16700,
          year: 2008,
          miliage: 180000,
          photo: 'toyota-land-cruiser-prado.webp'
        },
        {
          id: 15,
          brand: 'Volkswagen',
          model: 'Sharan',
          bodyType: 'Hatchback',
          transmission: 'manual',
          price: 15150,
          year: 2012,
          miliage: 205000,
          photo: 'volkswagen-sharan.webp'
        },
        {
          id: 16,
          brand: 'Nissan',
          model: 'Navara',
          bodyType: 'Trucks',
          transmission: 'automatic',
          price: 12300,
          year: 2008,
          miliage: 250000,
          photo: 'nissan-navara.webp'
        },
      ],
      selectedSort: "recommendations",
      transmissions: [],
      bodyTypes: [],
      isVisibleSidebar: false,
      minPrice: 1000,
      maxPrice: 100000,
      search: ''
    }
  },
  methods: {
    openSidebar() {
      this.isVisibleSidebar = true
    },
    closeContactForm() {
      this.isVisibleSidebar = false
    },
    setFilterPrice() {
      if(this.minPrice > this.maxPrice) {
        let temp = this.maxPrice;
        this.maxPrice = this.minPrice;
        this.minPrice = temp;
      }
    },
    changeOption(event) {
      this.selectedSort = event.target.value
    }
  },
  computed: {
    filterDataBodyType() {
      let data = []
      // если есть выбранные чекбоксы
      if ( this.bodyTypes.length ){
        // фильтруем данные
        data = this.cars.filter(x => this.bodyTypes.indexOf(x.bodyType.toString().toLowerCase()) != -1);
      } else {
        // иначе отдаем все данные из массива
        data = this.cars
      }
      return data
    },
    filteredList() {
      return this.filterDataBodyType.filter(post => {
        return post.brand.toLowerCase().includes(this.search.toLowerCase()) || post.model.toLowerCase().includes(this.search.toLowerCase())
      })
    },
    filterDataTransmission() {
      let data = []
      // если есть выбранные чекбоксы
      if ( this.transmissions.length ){
        // фильтруем данные
        data = this.filterDataBodyType.filter(x => this.transmissions.indexOf(x.transmission.toString().toLowerCase()) != -1);
      } else {
        // иначе отдаем все данные из массива
        data = this.cars
      }
      return data
    },
  },
  watch: {
    isVisibleSidebar: function (isVisibleSidebar) {
      let bodyClass = 'lock';
      if(isVisibleSidebar){
        document.body.classList.add(bodyClass);
      } else {
        document.body.classList.remove(bodyClass);
      }
    },
  },
}
</script>

<style lang="sass">

.header.inventory-header
  .inventory-title
    display: block
  .to-inventory-btn
    display: none

.container.inventory-container
  position: relative
  margin-top: 84px
  padding-top: 40px
  padding-bottom: 40px
  display: flex
  justify-content: space-between

.cars-inventory__sidebar
  box-sizing: border-box
  width: calc(300px/1200px*100%)

.cars-inventory__main
  box-sizing: border-box
  width: calc(860px/1200px*100%)

.cars-inventory__header
  margin-bottom: 20px

//.cars-inventory__items
//  display: flex
//  flex-wrap: wrap
//  justify-content: space-between

//-----------SIDEBAR-------------
.cars-inventory__sidebar
  color: #41456B
.sidebar-top
  display: flex
  align-items: center
  gap: 20px
  margin-top: 10px
  margin-bottom: 30px
.sidebar-title
  font-weight: 600
  font-size: 20px
  line-height: 25px
.sidebar-clear
  font-weight: 500
  font-size: 16px
  line-height: 159%
  color: #7481FF
.sidebar-content
  display: flex
  flex-direction: column
.sidebar-filter
  padding: 15px 0 0 20px
  .accordion-arrow
    right: 15px
  .accordion-content
    padding-right: 20px

.sidebar-apply
  display: none

//-----------CHECKBOX---------------
.sidebar-filter__content
  font-weight: 600
  font-size: 16px
  line-height: 14px
  color: #41456B
  display: flex
  flex-direction: column
  gap: 10px
.sidebar-filter__item
  cursor: pointer
  display: flex
  align-items: center
  input
    display: none
  label
    span
      border: 1px solid #D7D7D7
      margin-bottom: 3px
      border-radius: 2px
      font-size: 20pt
      display: inline-block
      width: 20px
      height: 20px
      margin-right: 10px
      text-align: center
      vertical-align: middle

  input:checked + label span::after
    content: "\2713"
    color: #7481FF

//----------------RANGE---------------
.sidebar-filter__range-num
  display: flex
  justify-content: space-between
  margin-bottom: 10px
  span
    display: block
    font-weight: 600
    font-size: 20px
    line-height: 25px
    color: #41456B

.sidebar-filter__range-slider
  width: 100%
  position: relative
  padding-bottom: 20px
  input
    position: absolute
    width: 100%
    left: 0
    bottom: 0
  input::-webkit-slider-thumb
    z-index: 2
    position: relative
    top: 2px
    margin-top: -7px

//------------CLOSE-BUTTON------------
.sidebar-close__btn
  position: absolute
  display: inline-block
  left: 30px
  top: 41px
  width: 24px
  height: 24px
  cursor: pointer
  opacity: .7
  transition: opacity .2s
  &:hover
    opacity: 1
.sidebar-close__btn::before,
.sidebar-close__btn::after
  content: ''
  position: absolute
  top: 10px
  display: block
  width: 24px
  height: 3px
  background: #41456B
.sidebar-close__btn::before
  transform: rotate(45deg)

.sidebar-close__btn::after
  transform: rotate(-45deg)

//----------cars-inventory__header----------
.cars-inventory__header-media__btn
  display: none
.cars-inventory__header
  display: flex
  justify-content: space-between
  align-items: center
  color: #41456B
.inventory-sorted
  display: flex
  align-items: center
  gap: 20px
.inventory-search
  width: calc(350px/860px*100%)
  outline: none
  box-sizing: border-box
  padding: 12px 20px
  border: 1px solid #D7D7D7
  border-radius: 2px
  font-weight: 600
  font-size: 16px
  line-height: 14px
  color: #41456B
.inventory-sorted
  span
    font-weight: 400
    font-size: 16px
    line-height: 180%
    letter-spacing: 0.02em
.inventory-sorted__params
  font-weight: 500
  font-size: 16px
  line-height: 159%
  outline: none
  color: #41456B
  border: 1px solid #D7D7D7
  border-radius: 2px
  padding: 12px 80px 12px 20px

//-------------MEDIA--------------
@media screen and (max-width: 1024px)
  .cars-inventory__header-media__btn
    display: flex
    gap: 10px
    align-items: center

  .cars-inventory__sidebar
    display: none
  .cars-inventory__sidebar.visible-sidebar
    display: block

  .cars-inventory__sidebar
    overflow: auto
    position: absolute
    left: 0
    right: 0
    top: 0
    width: 100%
    height: 100vh
    background: rgba(0, 0, 0, 0.2)
    z-index: 99
    padding-bottom: 80px
  .sidebar-wrap
    overflow: auto
    width: 100%
    background-color: #ffffff
    padding: 40px 0
  .sidebar-top,
  .sidebar-content,
  .sidebar-apply
    width: 55%
    margin: 0 auto
  .sidebar-top
    margin-bottom: 20px
    .sidebar-clear
      display: none
  .sidebar-apply
    display: block

  .cars-inventory__main
    width: 100%
  .inventory-sorted
    span
      display: none
  .inventory-search
    width: 33%

@media screen and (max-width: 767px)
  .container.inventory-container
    margin-top: 0
  //.cars-inventory__items
  //  justify-content: center
  .car-item.cars-inventory__item
    width: 100%
  .inventory-sorted
    width: 30%
  .inventory-sorted__params
    padding-right: 0

@media screen and (max-width: 640px)
  .header.inventory-header
    .inventory-title
      display: none

  .sidebar-top,
  .sidebar-content,
  .sidebar-apply
    width: 90%

  .sidebar-title
    margin-left: 45px
  .cars-inventory__header
    flex-wrap: wrap
  .inventory-sorted
    width: 100%
    margin-top: 15px
  .inventory-sorted__params
    width: 100%
  .inventory-search
    width: 70%

@media screen and (max-width: 640px)
  .cars-inventory__header-media__btn
    .sidebar-clear
      display: none
  .sidebar-top
    .sidebar-clear
      display: block

</style>