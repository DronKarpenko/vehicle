<template>
    <div class="v-stepItem">
        <div class="step-id">
            <img class="step-polygon" src="@/assets/img/step-polygon.png" alt="step">
            <span class="step-number">{{stepItem_data.id}}</span>
        </div>
        <div class="step-descr">
            <div class="step-title">{{stepItem_data.title}}</div>
            <div class="step-text">{{stepItem_data.text}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'v-stepItem',

    props:{
        stepItem_data: {
            type: Object,
            default() {
                return {}
            }
        }
    }
}
</script>

<style lang="sass">
.v-stepItem
    margin-bottom: 40px
    display: flex
    align-items: center
    gap: 20px
    color: #41456B
.step-id
    font-weight: 700
    font-size: 25px
    line-height: 140%
    padding: 20px 30px
    position: relative
.step-number
    z-index: 2
.step-polygon
    position: absolute
    left: 0
    top: 0
    z-index: -1
.step-title
    font-weight: 600
    font-size: 20px
    line-height: 25px    
    margin-bottom: 5px
    text-transform: capitalize
.step-text
    font-weight: 400
    font-size: 16px
    line-height: 180%
    letter-spacing: 0.02em
    color: #606276

@media screen and (max-width: 767.98px)
  .step-title
    font-size: 18px
    line-height: 25px
</style>