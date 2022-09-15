<template>
    <div class="calculator">
        <div class="container calculator-container">
            <div class="calculator-header">
                <h2 class="calculator-title">Let’s figure out how much you can afford</h2>
                <p class="calculator-descr">Before you start shopping, let’s figure out how much you can afford. Move the sliders to see how the loan duration and the total loan amount affect your monthly payments.</p>
            </div>
            <div class="calculator-items">
                <div class="calculator-item calculator-calculation">
                    <div class="calculation-buttons">
                        <v-btn
                            v-for="(price, index) in prices"
                            :key="index"
                            @click="selectPrice(index)"
                            :small="true"
                            :light="true"
                            :title="price.title"
                            :class="{'active': selectedPriceIndex === index}"
                        />
                    </div>
                    <div class="calculation-items">
                        <div class="calculation-item calculation-item__amount">
                            <label class="calculation-item__label" for="amount">Loan Amount</label>
                            <p class="calculation-item__number number-amount">$<span>{{amountLoan}}</span></p>
                            <input
                                type="range"
                                class="calculation-range"
                                name="amount"
                                min="0"
                                max="150000"
                                step="1000"
                                v-model.number="amountLoan"
                            >
                        </div>
                        <div class="calculation-item calculation-item__duration">
                            <label class="calculation-item__label" for="duration">Loan Duration</label>
                            <p class="calculation-item__number number-duration"><span>{{durationLoan}}</span>month</p>
                            <input
                                type="range"
                                class="calculation-range"
                                name="duration"
                                min="0"
                                max="18"
                                step="1"
                                v-model.number="durationLoan"
                            >
                        </div>
                    </div>
                </div>
                        
                <div class="calculator-item calculator-result">
                    <div class="bi-weekly-payment">
                        <p class="payment-title">Bi Weekly Payment</p>
                        <p class="payment-price payment-price__bi">$ {{((amountLoan/durationLoan)/2).toFixed(0)}}</p>
                    </div>
                    <div class="mounthly-payment">
                        <p class="payment-title">Mounthly Payment</p>
                        <p class="payment-price">$ {{(amountLoan/durationLoan).toFixed(0)}}</p>
                    </div>
                    <div class="weekly-payment">
                        <p class="payment-title">Weekly Payment</p>
                        <p class="payment-price">$ {{((amountLoan/durationLoan)/4).toFixed(0)}}</p>
                    </div>
                    <router-link to='/request'>
                      <v-btn class="calculator-btn"
                             title="Request a car"
                      />
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import vBtn from '@/components/v-btn.vue'

    export default {
        name: 'Calculator',
        data(){
            return {
                prices: [
                  {title: 'Poor', amountLoan: 40000, durationLoan: 12},
                  {title: 'Average', amountLoan: 100000, durationLoan: 9},
                  {title: 'Good', amountLoan: 130000, durationLoan: 5}
                ],
                amountLoan: 40000,
                durationLoan: 12,
                selectedPriceIndex: 0
            }
        },
        components: {
            vBtn
        },
        methods: {
            selectPrice(index) {
              this.selectedPriceIndex = index
              this.amountLoan = this.prices[index].amountLoan
              this.durationLoan = this.prices[index].durationLoan
            },
        }
    }
</script>

<style lang="sass">
.calculator-header,
.calculator-items
    display: flex
    justify-content: space-between
.calculator-header
    align-items: center

.calculator-header
    margin-bottom: 60px
.calculator-title
    width: 41.6%
.calculator-descr
    width: 50%
    font-weight: 400
    font-size: 16px
    line-height: 180%
    letter-spacing: 0.02em
    color: #606276

.calculator-item
    box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1)
    border-radius: 5px
    padding: 60px
    box-sizing: border-box

.calculator-calculation
    width: 66.6667%
.calculator-result
    width: 30.8333%

.calculation-buttons
    display: flex

.calculation-item
    position: relative
    color: #41456B
    &__label
        display: inline-block
        font-weight: 600
        font-size: 20px
        line-height: 25px
        margin-bottom: 25px
    &__number
        position: absolute
        right: 0
        top: 0
        font-size: 25px
        font-weight: 700
        line-height: 180%
        letter-spacing: 0.02em        
    &__amount
        margin: 60px 0
.number-amount
    span
        margin-left: 8px

.number-duration
    font-weight: 700
    font-size: 16px
    line-height: 14px
    letter-spacing: 0.02em
    text-transform: uppercase
    color: #606276
    span
        margin-right: 8px
        font-size: 25px
        font-weight: 700
        line-height: 180%
        text-align: right
        letter-spacing: 0.02em 
        color: #41456B

.calculation-range
    width: 100%
    appearance: none
    cursor: pointer
    background-color: #9a905d
    &::-webkit-slider-runnable-track
        height: 8px
        background-color: #D7D7D7
        border-radius: 2px
    &::-webkit-slider-thumb
        width:16px
        height: 16px
        -webkit-appearance: none
        margin-top: -4px
        background: #7481FF
        border: 1px solid #FFFFFF
        border-radius: 2px
    &::-ms-fill-upper
        background-color: #43e5f7

.payment-title
    font-weight: 400
    font-size: 16px
    line-height: 180%
    letter-spacing: 0.02em
    color: #606276

.payment-price
    font-weight: 700
    font-size: 25px
    line-height: 140%
    letter-spacing: 0.02em
    color: #41456B
    &.payment-price__bi
        font-weight: 700
        font-size: 45px
        line-height: 140.5%
        color: #7481FF
.mounthly-payment
    margin: 30px 0 20px
.weekly-payment
    margin-bottom: 40px

// ----------------MEDIA------------------
@media screen and (max-width: 1199.98px)
  .calculator-title
    width: 45%
  .calculator-items
    flex-direction: column
    box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1)
    border-radius: 5px
  .calculator-item
    box-shadow: none
    border-radius: 0
    padding: 40px
  .calculator-item
    width: 100%
  .calculator-result
    display: flex
    flex-wrap: wrap
  .bi-weekly-payment
    margin-bottom: 40px
    width: 50%
  .mounthly-payment
    margin: 0 40px 0 auto

@media screen and (max-width: 767.98px)
  .calculator-header
    flex-direction: column
    margin-bottom: 20px
  .calculator-title,
  .calculator-descr
    width: 100%
  .calculation-item__number
    font-size: 20px
    line-height: 140%
  .payment-price__bi
    font-size: 35px
  .calculator-item
    padding: 20px
  .calculator-btn
    width: 100%
  .payment-price
    font-size: 20px
  .bi-weekly-payment
    width: 100%
  .mounthly-payment
    margin: 0
    width: 50%
  .weekly-payment
    width: 50%

</style>