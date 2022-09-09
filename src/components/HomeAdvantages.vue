<template>
    <div class="advantages">
        <div class="container advantages-container">
            <h2 class="advantages-title">Advantages of working with us</h2>
            <div class="advantages-items">
                <div class="advantages-item advantages-item__delivery">
                    <img src="@/assets/img/icons/map.svg" alt="delivery" class="advantages-item__img">
                    <h3 class="advantages-item__title">Vehicle Delivery</h3>
                    <p class="advantages-item__descr">We deliver your vehicle directly to your door. You don’t sign anything until you test drive the vehicle. There is never any obligation to buy beforehand.</p>
                </div>

                <div class="advantages-item advantages-item__reverse">
                    <img src="@/assets/img/icons/note.svg" alt="financing" class="advantages-item__img">
                    <h3 class="advantages-item__title">Auto Financing</h3>
                    <p class="advantages-item__descr">We partner with the largest lenders in Canada to offer the strongest financing options in the industry—including rates as low as 4%</p>
                </div>

                <div class="advantages-item advantages-item__inventory">
                    <img src="@/assets/img/icons/car.svg" alt="inventory" class="advantages-item__img">
                    <h3 class="advantages-item__title">Huge Inventory</h3>
                    <p class="advantages-item__descr">We have access to thousands of high-quality vehicles and offer them to you at wholesale prices. Your dream car is waiting for you</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Advantages',
}
</script>

<style lang="sass">
    
.advantages
    padding-bottom: 280px

.advantages-title
    margin-bottom: 90px

.advantages-items
    position: relative
    display: flex
    justify-content: space-between
    align-items: flex-end
.advantages-item
    text-align: center
    position: relative
    width: calc(480px/1200px*100%)
    background-image: url(../assets/img/advantage.png)
    background-position: center
    background-size: auto
    background-repeat: no-repeat
    box-sizing: border-box

    &__delivery
      padding: 138px 80px 64px
    &__reverse
      position: absolute
      left: 50%
      transform: translateX(-50%)
      padding: 33px 130px 110px 145px
      background-image: url(../assets/img/advantage-reverse.png)
    &__inventory
      padding: 138px 102px 64px 103px
    &__img
        margin-bottom: 18px
    &__title
        font-weight: 600
        font-size: 20px
        line-height: 25px
        color: #41456B
        margin-bottom: 5px
    &__descr
        font-weight: 400
        font-size: 16px
        line-height: 180%
        letter-spacing: 0.02em
        color: #606276

// ----------------MEDIA------------------
@media screen and (max-width: 1199.98px)
  .advantages
    padding-bottom: 160px
  .advantages-title
    margin-bottom: 60px
  .advantages-items
    flex-direction: column
    align-items: center
    gap: 47px
  .advantages-item
    padding: calc(140px/768px*100%) calc(100px/768px*100%) calc(64px/768px*100%) calc(100px/768px*100%)
    width: calc(480px/768px*100%)
    background-size: auto
    &__reverse
      position: relative
      left: 0
      transform: none
      background-image: url(../assets/img/advantage.png)

@media screen and (max-width: 767.98px)
  .advantages
    padding-bottom: 80px
  .advantages-title
    margin-bottom: 30px
    text-align: center
  .advantages-items
    gap: 20px
  .advantages-item
    background-image: none
    padding: 0
    width: calc(320px/375px*100%)
</style>