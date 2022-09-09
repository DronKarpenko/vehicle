<template>
<div class="car-item">
  <div class="car-item__img-wrap">
    <img :src=" require('@/assets/img/inventory/'+carItem_data.photo) " alt="carItem" class="car-item__img">
  </div>
  <div class="car-item__descr">
    <router-link class="one-car__link" to='/one-car'>
      <h4 class="car-item__title">{{carItem_data.brand}} - {{carItem_data.model}}</h4>
    </router-link>
    <p class="car-item__price">$ {{carItem_data.price}}</p>
    <ul class="car-item__characteristics">
      <li class="car-item__year">{{carItem_data.year}} year</li>
      <li class="car-item__body-type">{{carItem_data.bodyType}}</li>
      <li class="car-item__transmission">{{carItem_data.transmission}}</li>
    </ul>
    <p class="car-item__miliage">{{carItem_data.miliage}} km</p>
  </div>
</div>
</template>

<script>
export default {
  name: "car-item",
  data() {
    return{

    }
  },
  props: {
    carItem_data: {
      type: Object
    }
  },
}
</script>

<style lang="sass" scoped>
  .car-item
    width: calc(420px/860px*100%)
    box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1)
    border-radius: 5px
    font-weight: 400
    font-size: 16px
    line-height: 180%
    letter-spacing: 0.02em
    color: #41456B
    margin-bottom: 20px
    &__img
      width: 100%
      height: auto
    &__descr
      padding: 20px
    &__title
      font-weight: 600
      font-size: 20px
      line-height: 25px
    &__price
      font-weight: 600
      font-size: 20px
      line-height: 25px
      color: #7481FF
      margin: 10px 0 20px 0
    &__characteristics
      display: flex
      flex-wrap: wrap
      gap: 40px
    &__miliage
      margin-top: 5px
    .one-car__link
      color: #41456B
@media screen and (max-width: 767px)
  .car-item
    width: 100%
</style>