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
            <button class="sidebar-clear" @click="clearFilter">Clear filters</button>
          </div>
          <div class="sidebar-content">
            <v-accordion class="sidebar-filter">
              <template v-slot:title>Make, Model</template>
              <template v-slot:content>
                <div class="sidebar-filter__content">
                  <div class="make-filter">
                    <p class="makemodel-filter__title">Make</p>
                    <input
                        type="text"
                        class="makemodel-filter__search"
                        placeholder="Search Make..."
                        @click="this.makesVisible = true"
                        v-model="makeSearch"
                    >
                    <ul class="makemodel-filter__items" v-if="makesVisible">
                      <li
                          class="makemodel-filter__item"
                          v-for="carMake in searchMakes"
                          :key="carMake.id"
                      >
                        <input
                            type="checkbox"
                            :id="carMake.value"
                            v-model="filteredMakes"
                            :value="carMake.value"
                            @change="totalFiltres"
                        >
                        <label :for="carMake.value">{{ carMake.name }}</label>
                      </li>
                      <li
                          class="nothing-makemodels makemodel-filter__item"
                          v-if="this.searchMakes.length===0"
                      >
                        Nothing found
                      </li>
                    </ul>
                  </div>
                  <div class="model-filter">
                    <p class="makemodel-filter__title">Model</p>
                    <input
                        type="text"
                        class="makemodel-filter__search"
                        placeholder="Search Make..."
                        @click="this.modelVisible = true"
                        v-model="modelSearch"
                    >
                    <ul class="makemodel-filter__items" v-if="modelVisible">
                      <li
                          class="makemodel-filter__item"
                          v-for="carModel in searchModels"
                          :key="carModel.id"
                      >
                        <input
                            type="checkbox"
                            :id="carModel.value"
                            v-model="filteredModels"
                            :value="carModel.value"
                            @change="totalFiltres"
                        >
                        <label :for="carModel.value">{{ carModel.name }}</label>
                      </li>
                      <li
                          class="nothing-makemodels makemodel-filter__item"
                          v-if="this.searchModels.length===0"
                      >
                        Nothing found
                      </li>
                    </ul>
                  </div>
                </div>
              </template>
              <template v-slot:accordion-footer>
                <span
                    class="selected-filtres__item"
                    v-for="carMake in filteredMakes"
                    :key="carMake.id"
                    @click="delMake(carMake)"
                >
                  {{carMake}}
                </span>
                <span
                    class="selected-filtres__item"
                    v-for="carMake in filteredModels"
                    :key="carMake.id"
                    @click="delModel(carMake)"
                >
                  {{carMake}}
                </span>
              </template>
            </v-accordion>
            <v-accordion class="sidebar-filter">
              <template v-slot:title>Body type</template>
              <template v-slot:content>
                <ul class="sidebar-filter__content">
                  <li class="sidebar-filter__item" v-for="carBodyType in carBodyTypes" :key="carBodyType.id">
                    <input
                        type="checkbox"
                        :id="carBodyType.value"
                        v-model="bodyTypes"
                        @change="totalFiltres"
                        :value="carBodyType.value"
                    >
                    <label class="sidebar-filter__item-title" :for="carBodyType.value">
                      <span></span>
                      <img
                          :src=" require('@/assets/img/icons/bodytypes/' + carBodyType.img) "
                          :alt="carBodyType.name"
                      >
                      {{ carBodyType.name }}
                    </label>
                  </li>
                </ul>
              </template>
              <template v-slot:accordion-footer>
                <span
                    class="selected-filtres__item"
                    v-for="carBodyType in bodyTypes"
                    :key="carBodyType.id"
                    @click="delBodyType(carBodyType)"
                >
                  {{carBodyType}}
                </span>
              </template>
            </v-accordion>
            <v-accordion class="sidebar-filter">
              <template v-slot:title>Transmission</template>
              <template v-slot:content>
                <ul class="sidebar-filter__content">
                  <li class="sidebar-filter__item" v-for="carTransmission in carTransmissions" :key="carTransmission.id">
                    <input
                        type="checkbox"
                        :id="carTransmission.value"
                        :value="carTransmission.value"
                        v-model="transmissions"
                        @change="totalFiltres"
                    >
                    <label :for="carTransmission.value"><span></span>{{ carTransmission.name }}</label>
                  </li>
                </ul>
              </template>
              <template v-slot:accordion-footer>
                <span
                    class="selected-filtres__item"
                    v-for="carTransmission in transmissions"
                    :key="carTransmission.index"
                    @click="delTransmission(carTransmission)"
                >
                  {{carTransmission}}
                </span>
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
                      v-model.number="minPrice"
                      @change="totalFiltres"
                  >
                  <input
                      type="range"
                      min="1000"
                      max="100000"
                      step="100"
                      v-model.number="maxPrice"
                      @change="totalFiltres"
                  >
                </div>
              </template>
              <template v-slot:accordion-footer>
                <span
                    class="selected-filtres__item"
                    v-if="minPrice !== 1000"
                    @click="minPrice = 1000"
                >
                  $ {{minPrice}}
                </span>
                <span
                    class="selected-filtres__item"
                    v-if="maxPrice !== 100000"
                    @click="maxPrice = 100000"
                >
                  $ {{maxPrice}}
                </span>
              </template>
            </v-accordion>
            <v-accordion class="sidebar-filter">
              <template v-slot:title>Year</template>
              <template v-slot:content>
                <div class="sidebar-filter__range-num">
                  <span>{{minYear}}</span>
                  <span>{{maxYear}}</span>
                </div>
                <div class="sidebar-filter__range-slider">
                  <input
                      type="range"
                      min="2000"
                      max="2022"
                      step="1"
                      v-model.number="minYear"
                      @change="totalFiltres"
                  >
                  <input
                      type="range"
                      min="2000"
                      max="2022"
                      step="1"
                      v-model.number="maxYear"
                      @change="totalFiltres"
                  >
                </div>
              </template>
              <template v-slot:accordion-footer>
                <span
                    class="selected-filtres__item"
                    v-if="minYear !== 2000"
                    @click="minYear = 2000"
                >
                  {{minYear}}
                </span>
                <span
                    class="selected-filtres__item"
                    v-if="maxYear !== 2022"
                    @click="maxYear = 2022"
                >
                  {{maxYear}}
                </span>
              </template>
            </v-accordion>
            <v-accordion class="sidebar-filter">
              <template v-slot:title>Kilometres</template>
              <template v-slot:content>
                <div class="sidebar-filter__range-num">
                  <span>{{minKm}}</span>
                  <span>{{maxKm}}</span>
                </div>
                <div class="sidebar-filter__range-slider">
                  <input
                      type="range"
                      min="0"
                      max="300000"
                      step="1000"
                      v-model.number="minKm"
                      @change="totalFiltres"
                  >
                  <input
                      type="range"
                      min="0"
                      max="300000"
                      step="1000"
                      v-model.number="maxKm"
                      @change="totalFiltres"
                  >
                </div>
              </template>
              <template v-slot:accordion-footer>
                <span
                    class="selected-filtres__item"
                    v-if="minKm !== 0"
                    @click="minKm = 0"
                >
                  {{minKm}} km
                </span>
                <span
                    class="selected-filtres__item"
                    v-if="maxKm !== 300000"
                    @click="maxKm = 300000"
                >
                  {{maxKm}} km
                </span>
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
          <div class="inventory-search">
            <input
                type="text"
                v-model="search"
                placeholder="Find a dream car..."
                @input="totalFiltres"
            >
          </div>
          <div class="inventory-sorted">
            <span>Sorted by</span>

            <v-select
                class="sorted-options"
                :options = "sortParamOptions"
                @select="sortedCarsByParams"
                :selected="selectedSortParam"
            />

          </div>
        </div>
        <inventory-pagination
            :inventoryItem_data="finalFilteredCars"
            :size="6"
        >
          <div class="no-matches-msg" v-if="filteredCars.length===0">
            <img src="@/assets/img/icons/404.svg" alt="no-matches" class="no-matches-msg__img">
            <h3 class="no-matches-msg__title">Unfortunately there are no matches for your query.</h3>
            <p class="no-matches-msg__text">Try using other filter settings or request a car of your choice.</p>
            <router-link class="no-matches-msg__link" to='/request'>Request a car</router-link>
          </div>
        </inventory-pagination>
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
import VSelect from "@/components/v-select";
export default {
  name: "inventory-page",
  components: {VSelect, InventoryPagination, VBtn, VAccordion, CarItem, Footer, Header},
  data(){
    return {
      cars: [
        {
          id: 1,
          brand: 'Porsche',
          model: 'Panamera',
          bodyType: 'Sedan',
          transmission: 'automatic',
          price: 34000,
          year: 2015,
          miliage: 120000,
          photo: 'porsche-panamera.jpg',
          rating: 99254,
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
          photo: 'mercedes-benz-cla.jpg',
          rating: 97185
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
          photo: 'audi-a7.jpg',
          rating: 93365
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
          photo: 'ford-fiesta.webp',
          rating: 89389
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
          photo: 'ford-ka.webp',
          rating: 87164
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
          photo: 'porsche-cayenne.webp',
          rating: 82623
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
          photo: 'mercedes-benz-w124.jpg',
          rating: 70547
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
          photo: 'mitsubishi-outlander.jpg',
          rating: 68862
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
          photo: 'nissan-leaf.webp',
          rating: 67741
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
          photo: 'opel-astra.webp',
          rating: 59514
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
          photo: 'opel-vivaro.webp',
          rating: 54962
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
          photo: 'toyota-avensis.webp',
          rating: 51632
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
          photo: 'toyota-hilux.webp',
          rating: 40321
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
          photo: 'toyota-land-cruiser-prado.webp',
          rating: 35210
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
          photo: 'volkswagen-sharan.webp',
          rating: 22459
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
          photo: 'nissan-navara.webp',
          rating: 19824
        },
      ],
      filteredCars: [],
      sorteredCars: [],

      carMakes: [
        {
          id: 1,
          name: 'Porsche',
          value: 'porsche'
        },
        {
          id: 2,
          name: 'Mersedes-Benz',
          value: 'mersedes-benz'
        },
        {
          id: 3,
          name: 'Audi',
          value: 'audi'
        },
        {
          id: 4,
          name: 'Ford',
          value: 'ford'
        },
        {
          id: 5,
          name: 'Opel',
          value: 'opel'
        },
        {
          id: 6,
          name: 'Toyota',
          value: 'toyota'
        },
        {
          id: 7,
          name: 'Nissan',
          value: 'nissan'
        },
        {
          id: 8,
          name: 'Mitsubishi',
          value: 'mitsubishi'
        },
        {
          id: 9,
          name: 'Volksvagen',
          value: 'volksvagen'
        },
      ],
      carModels: [
        {
          id: 1,
          name: 'Panamera',
          value: 'panamera',
        },
        {
          id: 2,
          name: 'CLA',
          value: 'cla',
        },
        {
          id: 3,
          name: 'A7',
          value: 'a7',
        },
        {
          id: 4,
          name: 'Fiesta',
          value: 'fiesta',
        },
        {
          id: 5,
          name: 'Ka',
          value: 'ka'
        },
        {
          id: 6,
          name: 'Cayenne',
          value: 'cayenne',
        },
        {
          id: 7,
          name: 'W124',
          value: 'w124',
        },
        {
          id: 8,
          name: 'Outlander',
          value: 'outlander',
        },
        {
          id: 9,
          name: 'Leaf',
          value: 'leaf',
        },
        {
          id: 10,
          name: 'Astra',
          value: 'astra',
        },
        {
          id: 11,
          name: 'Vivaro',
          value: 'vivaro',
        },
        {
          id: 12,
          name: 'Avensis',
          value: 'avensis',
        },
        {
          id: 13,
          name: 'Hilux',
          value: 'hilux',
        },
        {
          id: 14,
          name: 'Prado',
          value: 'prado',
        },
        {
          id: 15,
          name: 'Sharan',
          value: 'sharan',
        },
        {
          id: 16,
          name: 'Navara',
          value: 'navara',
        },
      ],
      carBodyTypes: [
        {
          id: 1,
          name: 'Trucks',
          value: 'trucks',
          img: 'trucks.svg'
        },
        {
          id: 2,
          name: 'SUV',
          value: 'suv',
          img: 'suv.svg'
        },
        {
          id: 3,
          name: 'Sedan',
          value: 'sedan',
          img: 'sedan.svg'
        },
        {
          id: 4,
          name: 'Hatchback',
          value: 'hatchback',
          img: 'hatchback.svg'
        },
        {
          id: 5,
          name: 'Coupe',
          value: 'coupe',
          img: 'coupe.svg'
        },
        {
          id: 6,
          name: 'Convertiable',
          value: 'convertiable',
          img: 'convertiable.svg'
        },
        {
          id: 7,
          name: 'VAN',
          value: 'van',
          img: 'van.svg'
        },
      ],
      carTransmissions: [
        {
          id: 1,
          name: 'Automatic',
          value: 'automatic'
        },
        {
          id: 2,
          name: 'Manual',
          value: 'manual'
        },
      ],

      selectedSortParam: "Recommendations",
      valueOfSortParam: "recommendations",

      sortParamOptions: [
        {
          value: 'recommendations',
          name: 'Recommendations'
        },
        {
          value: 'sortByNewest',
          name: 'Newest inventory'
        },
        {
          value: 'sortByLowestPrice',
          name: 'Lowest price'
        },
        {
          value: 'sortByHighestPrice',
          name: 'Highest prices'
        },
      ],
      filteredMakes: [],
      filteredModels: [],
      transmissions: [],
      bodyTypes: [],
      filteredPrice: [],
      filteredYear: [],
      filteredKilometres: [],
      isVisibleSidebar: false,
      makesVisible: false,
      modelVisible: false,
      minPrice: 1000,
      maxPrice: 100000,
      minYear: 2000,
      maxYear: 2022,
      minKm: 0,
      maxKm: 300000,
      search: '',
      makeSearch: '',
      modelSearch: '',
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
      this.filterByPrice()
    },
    setFilterYear() {
      if(this.minYear > this.maxYear) {
        let temp = this.maxYear;
        this.maxYear = this.minYear;
        this.minYear = temp;
      }
      this.filterByYear()
    },
    setFilterKm() {
      if(this.minKm > this.maxKm) {
        let temp = this.maxKm;
        this.maxKm = this.minKm;
        this.minKm = temp;
      }
      this.filterByKm()
    },
    changeOption(event) {
      this.selectedSort = event.target.value
    },

    filterDataTransmission() {
      if (this.transmissions.length > 0) {
        this.filteredCars = this.filteredCars.filter(x => this.transmissions.indexOf(x.transmission.toString().toLowerCase()) != -1);
      } else {
        return this.filteredCars
      }
      return this.filteredCars
    },
    filterDataMake() {
      if ( this.filteredMakes.length > 0 ){
        this.filteredCars = this.filteredCars.filter(x => this.filteredMakes.indexOf(x.brand.toString().toLowerCase()) != -1);
      } else {
        return this.filteredCars
      }
      return this.filteredCars
    },
    filterDataModel() {
      if ( this.filteredModels.length > 0 ){
        this.filteredCars = this.filteredCars.filter(x => this.filteredModels.indexOf(x.model.toString().toLowerCase()) != -1);
      } else {
        return this.filteredCars
      }
      return this.filteredCars
    },
    filterDataBodyType() {
      if ( this.bodyTypes.length > 0 ){
        this.filteredCars = this.filteredCars.filter(x => this.bodyTypes.indexOf(x.bodyType.toString().toLowerCase()) != -1);
      } else {
        return this.filteredCars
      }
      return this.filteredCars
    },
    filterByPrice() {
      let vm = this;
      this.filteredCars = this.filteredCars.filter(function (item) {
        return item.price >= vm.minPrice && item.price <= vm.maxPrice;
      })
      return this.filteredCars
    },
    filterByYear() {
      let vm = this;
      this.filteredCars = this.filteredCars.filter(function (item) {
        return item.year >= vm.minYear && item.year <= vm.maxYear;
      })
      return this.filteredCars
    },
    filterByKm() {
      let vm = this;
      this.filteredCars = this.filteredCars.filter(function (item) {
        return item.miliage >= vm.minKm && item.miliage <= vm.maxKm;
      })
      return this.filteredCars
    },
    filteredList() {
      let vm = this;
      this.filteredCars = this.filteredCars.filter(function (item) {
        return item.brand.toLowerCase().includes(vm.search.toLowerCase()) || item.model.toLowerCase().includes(vm.search.toLowerCase())
      })
      return this.filteredCars
    },
    delMake(carMake){
      let indexCar = this.filteredMakes.indexOf(carMake);
      this.filteredMakes.splice(indexCar, 1);
    },
    delModel(carMake){
      let indexCar = this.filteredModels.indexOf(carMake);
      this.filteredModels.splice(indexCar, 1);
    },
    delBodyType(carBodyType){
      let indexCar = this.bodyTypes.indexOf(carBodyType);
      this.bodyTypes.splice(indexCar, 1);
    },
    delTransmission(carTransmission){
      let indexCar = this.transmissions.indexOf(carTransmission);
      this.transmissions.splice(indexCar, 1);
    },
    clearFilter() {
      this.filteredMakes = [];
      this.filteredModels = [];
      this.transmissions = [];
      this.bodyTypes = [];
      this.minPrice = 1000;
      this.maxPrice = 100000;
      this.minYear = 2000;
      this.maxYear = 2022;
      this.minKm = 0;
      this.maxKm = 300000;
      this.search = '';
      this.valueOfSortParam = "recommendations";
      this.selectedSortParam = "Recommendations";
    },

    sortedCarsByParams(sortParam) {
      this.selectedSortParam = sortParam.name;
      this.valueOfSortParam = sortParam.value;
    },

    isActiveSort() {
      this.sorteredCars = this.filteredCars;
      if(this.valueOfSortParam === "recommendations") {
        this.filteredCars = this.sorteredCars.sort(sortRating)
        // this.filteredCars = this.cars;
        return this.filteredCars;
      } else if(this.valueOfSortParam === "sortByLowestPrice") {
        this.filteredCars = this.sorteredCars.sort(sortLowestPrice)
        return this.filteredCars;
      } else if(this.valueOfSortParam === "sortByNewest") {
        this.filteredCars = this.sorteredCars.sort(sortNewestYear)
        return this.filteredCars;
      } else if(this.valueOfSortParam === "sortByHighestPrice") {
        this.filteredCars = this.sorteredCars.sort(sortHighestPrice)
        return this.filteredCars;
      }
      return this.filteredCars;
    },

    totalFiltres() {
      this.filteredCars = this.cars;
      this.filterByPrice();
      this.filterByYear();
      this.filterByKm();
      this.filterDataBodyType();
      this.filterDataTransmission();
      this.filterDataMake();
      this.filterDataModel();
      this.filteredList();
      this.isActiveSort();
      return this.filteredCars
    }
  },
  computed: {

    finalFilteredCars() {
      return this.totalFiltres()
    },
    searchMakes() {
      return this.carMakes.filter(carMake => {
        return carMake.name.toLowerCase().includes(this.makeSearch.toLowerCase())
      })
    },
    searchModels() {
      return this.carModels.filter(carModel => {
        return carModel.name.toLowerCase().includes(this.modelSearch.toLowerCase())
      })
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

let sortRating = function (d1, d2) { return (d1.rating < d2.rating) ? 1 : -1; };
let sortNewestYear = function (d1, d2) { return (d1.year < d2.year) ? 1 : -1; };
let sortLowestPrice = function (d1, d2) { return (d1.price > d2.price) ? 1 : -1; };
let sortHighestPrice = function (d1, d2) { return (d1.price < d2.price) ? 1 : -1; };

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
.sidebar-filter__item-title
  cursor: pointer

.sidebar-apply
  display: none

//---------------------------CHECKBOX-------------------
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

//------------------------------RANGE-SLIDER--------------------
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
    cursor: pointer

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
  justify-content: space-between
  width: 45%
.inventory-search
  position: relative
  width: calc(350px/860px*100%)
  input
    outline: none
    width: 100%
    box-sizing: border-box
    padding: 12px 20px
    border: 1px solid #D7D7D7
    border-radius: 2px
    font-weight: 600
    font-size: 16px
    line-height: 14px
    color: #41456B
  &:after
    position: absolute
    content: url("@/assets/img/icons/search.svg")
    height: 24px
    width: 24px
    top: 10px
    right: 20px
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

//------------------------------------selected-filtres-----------------------
.accordion-footer
  display: flex
  flex-wrap: wrap
  gap: 10px
.selected-filtres__item
  display: inline-block
  margin-bottom: 10px
  padding: 10px 10px 10px 30px
  background: rgba(116, 129, 255, 0.2)
  border-radius: 2px
  font-weight: 700
  font-size: 16px
  line-height: 14px
  text-align: center
  letter-spacing: 0.02em
  text-transform: uppercase
  color: #41456B
  cursor: pointer
  position: relative
  &:hover
    background: rgba(116, 130, 255, 0.4)
  &::before,
  &::after
    content: ''
    position: absolute
    top: 15px
    left: 10px
    display: block
    width: 14px
    height: 2px
    background: #7481FF
  &::before
    transform: rotate(45deg)
  &::after
    transform: rotate(-45deg)
  label
    cursor: pointer

//--------------------------------MAKES-MODELS-------------------------
.make-filter
  margin-bottom: 20px
.makemodel-filter__title
  margin-bottom: 10px
  font-weight: 600
  font-size: 16px
  line-height: 14px
  color: #41456B

.makemodel-filter__search
  width: 100%
  outline: none
  box-sizing: border-box
  padding: 12px 20px
  border: 1px solid #D7D7D7
  border-radius: 2px
  color: #41456B
  font-weight: 500
  font-size: 16px
  line-height: 159%
  &::placeholder
    color: #D7D7D7

.makemodel-filter__items
  display: flex
  flex-direction: column
  gap: 10px
  padding: 20px
  height: 155px
  border: 1px solid #D7D7D7
  overflow: scroll

.makemodel-filter__item
  cursor: pointer
  font-weight: 600
  font-size: 16px
  line-height: 14px
  color: #41456B
  &:hover
    opacity: .7
  input
    display: none
  label
    cursor: pointer

//----------------------------NO-MATCHES-------------------------------
.no-matches-msg
  background: #FFFFFF
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1)
  border-radius: 5px
  width: 100%
  box-sizing: border-box
  padding: 60px
  &__title
    font-weight: 600
    font-size: 20px
    line-height: 25px
    color: #41456B
    margin: 20px 0
  &__text
    font-weight: 400
    font-size: 16px
    line-height: 180%
    letter-spacing: 0.02em
    color: #41456B
    margin-bottom: 20px
  &__link
    font-weight: 700
    font-size: 16px
    line-height: 14px
    letter-spacing: 0.02em
    text-transform: uppercase
    color: #7481FF

//---------------------------------SORTED----------------------------------


//-------------------------------MEDIA-----------------------------------------
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
  .inventory-search,
  .inventory-sorted
    width: 33%

@media screen and (max-width: 767px)
  .container.inventory-container
    margin-top: 0
  //.cars-inventory__items
  //  justify-content: center
  .car-item.cars-inventory__item
    width: 100%

  .inventory-sorted__params
    padding-right: 0
  .inventory-sorted
    width: 40%

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