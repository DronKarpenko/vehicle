<template>
  <Header class="request-header"/>
  <main class="request-wrapper">
    <div class="container request-container">
      <form @submit.prevent class="request-form">
        <div class="request-form__paginator" :style="{display: paginatorVisible}">
          <div class="form-paginator__step" :style="{width: paginatorStepWidth + '%'}"></div>
        </div>

        <div class="form-step whats-budget" v-if="isWhatsBudget">
            <div class="error-message">
              <span v-if="v$.budget.$errors.length !== 0">
                Please choose one of the answer options
              </span>
            </div>
            <h2 class="form-step__title">What's your budget?</h2>
            <p class="form-step__descr">Find vehicle options that fit your budget.</p>
            <div class="form-step__content">
              <ul class="whats-budget__items step-content__items">
                <li class="whats-budget__item step-content__item">
                  <input type="radio" id="budgetChoice1" name="budget" value="under 250" v-model="budget"/>
                  <label for="budgetChoice1">Under $250/Month</label>
                </li>
                <li class="whats-budget__item step-content__item">
                  <input type="radio" id="budgetChoice2" name="budget" value="250-374" v-model="budget"/>
                  <label for="budgetChoice2">$250-374/Month</label>
                </li>
                <li class="whats-budget__item step-content__item">
                  <input type="radio" id="budgetChoice3" name="budget" value="374-500" v-model="budget"/>
                  <label for="budgetChoice3">$374-500/Month</label>
                </li>
                <li class="whats-budget__item step-content__item">
                  <input type="radio" id="budgetChoice4" name="budget" value="over 500" v-model="budget"/>
                  <label for="budgetChoice4">Over $500/Month</label>
                </li>
              </ul>
            </div>
            <div class="form-step__button">
              <button
                  type="submit"
                  class="step-button__continue"

                  @click="submitBudgetForm"
              >
                continue
              </button>
            </div>
          </div>
        <div class="form-step employmen-status" v-if="isEmploymentStatus">
          <div class="error-message">
              <span v-if="v$.employmentStatus.$errors.length !== 0">
                Please choose one of the answer options
              </span>
          </div>
          <h2 class="form-step__title">What's your employment status?</h2>
          <p class="form-step__descr">Your employment status will help determine the best vehicle and financing options for you.</p>
          <div class="form-step__content">
            <ul class="employmen-status__items step-content__items">
              <li class="employmen-status__item step-content__item">
                <input
                    type="radio"
                    id="employed"
                    name="empl-status"
                    value="employed"
                    @change="employmentStatus='employed'"
                    v-model = "employmentStatus"
                />
                <label for="employed">Employed</label>
              </li>
              <li class="employmen-status__item step-content__item">
                <input
                    type="radio"
                    id="self-employed"
                    name="empl-status"
                    value="self-employed"
                    @change="employmentStatus='self-employed'"
                    v-model = "employmentStatus"
                />
                <label for="self-employed">Self-Employed</label>
              </li>
              <li class="employmen-status__item step-content__item">
                <input
                    type="radio"
                    id="student"
                    name="empl-status"
                    value="student"
                    @change="employmentStatus='student'"
                    v-model = "employmentStatus"
                />
                <label for="student">Student</label>
              </li>
              <li class="employmen-status__item step-content__item">
                <input
                    type="radio"
                    id="pension"
                    name="empl-status"
                    value="retired/pension"
                    @change="employmentStatus='retired/pension'"
                    v-model = "employmentStatus"
                />
                <label for="pension">Retired / Pension</label>
              </li>
              <li class="employmen-status__item step-content__item">
                <input
                    type="radio"
                    id="other"
                    name="empl-status"
                    value="other"
                    @change="employmentStatus='other'"
                    v-model = "employmentStatus"
                />
                <label for="other">Other</label>
              </li>
            </ul>
          </div>
          <div class="form-step__button">
            <button
                type="submit"
                class="step-button__continue"
                @click="submitEmploymentStatus"
            >
              continue
            </button>
            <button class="step-button__back" @click="backToBudget">back</button>
          </div>
        </div>
        <div class="form-step earn-income" v-if="isHowEarnIncome">
          <h2 class="form-step__title">How do you earn income?</h2>
          <p class="form-step__descr">Your employment status will help determine the best vehicle and financing options for you.</p>
          <div class="form-step__content">
            <ul class="earn-income__items step-content__items">

              <li class="earn-income__item step-content__item">
                <input type="radio" id="long-term-disability" name="earn-income" value="long-term-disability"/>
                <label for="long-term-disability">Long-term disability</label>
              </li>

              <li class="earn-income__item step-content__item">
                <input type="radio" id="spousal-support__alimony" name="earn-income" value="spousal-support__alimony"/>
                <label for="spousal-support__alimony">Spousal support / Alimony</label>
              </li>

              <li class="earn-income__item step-content__item">
                <input type="radio" id="child-support" name="earn-income" value="child-support"/>
                <label for="child-support">Child support</label>
              </li>

              <li class="earn-income__item step-content__item">
                <input type="radio" id="social-assistance__welfare" name="earn-income" value="social-assistance__welfare"/>
                <label for="social-assistance__welfare">Social assistance / Welfare</label>
              </li>

              <li class="earn-income__item step-content__item">
                <input type="radio" id="maternity-leave" name="earn-income" value="maternity-leave"/>
                <label for="maternity-leave">Maternity leave</label>
              </li>

              <li class="earn-income__item step-content__item">
                <input type="radio" id="unemployed__ei" name="earn-income" value="unemployed__ei"/>
                <label for="unemployed__ei">Unemployed / EI</label>
              </li>

              <li class="earn-income__item step-content__item">
                <input type="radio" id="other__not-listed" name="earn-income" value="other__not-listed"/>
                <label for="other__not-listed">Other / Not listed</label>
              </li>

            </ul>
          </div>
          <div class="form-step__button">
            <button
                type="submit"
                class="step-button__continue"
                @click="goToFromHowEarnIncome"
            >
              continue
            </button>
            <button class="step-button__back" @click="backFromHowEarnIncome">back</button>
          </div>
        </div>
        <div class="form-step currently-working" v-if="isCurrentlyWorking">
          <h2 class="form-step__title">Are you currently working?</h2>
          <p class="form-step__descr">Your employment status will help determine the best vehicle and financing options for you.</p>
          <div class="form-step__content">
            <ul class="currently-working__items step-content__items">

              <li class="currently-working__item step-content__item">
                <input
                    type="radio"
                    id="working-yes"
                    name="currently-working"
                    value="yes"
                    v-model = "isWorkStudent"
                    @change="isWorkStudent = 'yes'"
                />
                <label for="working-yes">Yes</label>
              </li>

              <li class="currently-working__item step-content__item">
                <input
                    type="radio"
                    id="working-no"
                    name="currently-working"
                    value="no"
                    v-model = "isWorkStudent"
                    @change="isWorkStudent = 'no'"
                />
                <label for="working-no">No</label>
              </li>

            </ul>
          </div>
          <div class="form-step__button">
            <button
                type="submit"
                class="step-button__continue"
                @click="submitCurrentlyWorking"
            >
              continue
            </button>
            <button class="step-button__back" @click="backFromCurrentlyWorking">back</button>
          </div>
        </div>
        <div class="form-step monthly-income" v-if="isMonthlyIncome">
          <h2 class="form-step__title">Enter your monthly income</h2>
          <p class="form-step__descr">Your income details help us make sure your vehicle payments are easy and affordable. Before taxes and deductions.</p>
          <div class="form-step__content">
            <input
                type="text"
                placeholder="Monthly income"
                class="step-content__input"
            >
          </div>
          <div class="form-step__button">
            <button
                type="submit"
                class="step-button__continue"
                @click="goToFromMonthlyIncome"
            >
              continue
            </button>
            <button class="step-button__back" @click="backFromMonthlyIncome">back</button>
          </div>
        </div>
        <div class="form-step long-receiving" v-if="isLongReceiving">
          <h2 class="form-step__title">How long receiving?</h2>
          <p class="form-step__descr">Your income details help us make sure your vehicle payments are easy and affordable.</p>
          <div class="form-step__content">
            <input
                type="text"
                placeholder="Time"
                class="step-content__input"
            >
          </div>
          <div class="form-step__button">
            <button
                type="submit"
                class="step-button__continue"
                @click="goToFromLongReceiving"
            >
              continue
            </button>
            <button class="step-button__back" @click="backFromLongReceiving">back</button>
          </div>
        </div>
        <div class="form-step about-employment" v-if="isAboutEmployment">
          <h2 class="form-step__title">Tell us about your employment</h2>
          <p class="form-step__descr">We won’t come visit but we need these details to confirm your employment status so you can get the best rates possible.</p>
          <div class="form-step__content">
            <input
                type="text"
                placeholder="Employer"
                class="step-content__input"
            >
            <input
                type="text"
                placeholder="Title"
                class="step-content__input"
            >
          </div>
          <div class="form-step__button">
            <button
                type="submit"
                class="step-button__continue"
                @click="goToFromAboutEmployment"
            >
              continue
            </button>
            <button class="step-button__back" @click="backFromAboutEmployment">back</button>
          </div>
        </div>
        <div class="form-step long-earning" v-if="isLongEarning">
          <h2 class="form-step__title">How long have you been earning this income?</h2>
          <p class="form-step__descr">Your income details help us make sure your vehicle payments are easy and affordable.</p>
          <div class="form-step__content">
            <div class="step-content__items">
              <input
                  type="text"
                  placeholder="Years"
                  class="step-content__input min-input"
              >
              <input
                  type="text"
                  placeholder="Mounths"
                  class="step-content__input min-input"
              >
            </div>
          </div>
          <div class="form-step__button">
            <button
                type="submit"
                class="step-button__continue"
                @click="goToFromLongEarning"
            >
              continue
            </button>
            <button class="step-button__back" @click="backFromLongEarning">back</button>
          </div>
        </div>
        <div class="form-step where-live" v-if="isWhereLive">
          <h2 class="form-step__title">Where do you live?</h2>
          <p class="form-step__descr">Providing your location helps find the best deals near you.</p>
          <div class="form-step__content">
            <input
                type="text"
                placeholder="Street address"
                class="step-content__input"
            >
            <input
                type="text"
                placeholder="City"
                class="step-content__input"
            >
            <div class="step-content__items">
              <input
                  type="text"
                  placeholder="Province"
                  class="step-content__input min-input"
              >
              <input
                  type="text"
                  placeholder="Postal code"
                  class="step-content__input min-input"
              >
            </div>
          </div>
          <div class="form-step__button">
            <button
                type="submit"
                class="step-button__continue"
                @click="goToWhenBorn"
            >
              continue
            </button>
            <button class="step-button__back" @click="backFromWhereLive">back</button>
          </div>
        </div>
        <div class="form-step when-born" v-if="isWhenBorn">
          <h2 class="form-step__title">When were you born?</h2>
          <p class="form-step__descr"></p>
          <div class="form-step__content">
            <div class="step-content__items">
              <input
                  type="text"
                  placeholder="Year"
                  class="step-content__input min-input"
              >
              <input
                  type="text"
                  placeholder="Mounth"
                  class="step-content__input micro-input"
              >
              <input
                  type="text"
                  placeholder="Day"
                  class="step-content__input micro-input"
              >
            </div>
          </div>
          <div class="form-step__button">
            <button
                type="submit"
                class="step-button__continue"
                @click="goToLastStep"
            >
              continue
            </button>
            <button class="step-button__back" @click="backToWhereLive">back</button>
          </div>
        </div>
        <div class="form-step last-step" v-if="isLastStep">
          <h2 class="form-step__title">Congratulations! Last step.</h2>
          <p class="form-step__descr">Get access to your vehicle and financing options by creating your account. There is no obligation to continue with financing if you change your mind. </p>
          <div class="form-step__content">
            <div class="step-content__items">
              <input
                  type="text"
                  placeholder="First name"
                  class="step-content__input min-input"
              >
              <input
                  type="text"
                  placeholder="Last name"
                  class="step-content__input min-input"
              >
            </div>
            <input
                type="email"
                placeholder="Email"
                class="step-content__input"
            >
            <input
                type="text"
                placeholder="Phone number"
                class="step-content__input"
            >
          </div>
          <div class="form-step__button">
            <button
                type="submit"
                class="step-button__continue"
                @click="submitRequest"
            >
              continue
            </button>
            <button class="step-button__back" @click="backToWhenBorn">back</button>
          </div>
        </div>
        <div class="form-step successful" v-if="isSuccessful">
          <img src="@/assets/img/icons/successful.svg" alt="successful" class="successful-icon">
          <h2 class="form-step__title">Application successful!</h2>
          <p class="form-step__descr">Your response was successfully submitted. Thank you! Our team will reach out to you shortly.</p>
          <div class="form-step__content">
            <p class="confirm-number">Confirmation number:</p>
            <input
                type="text"
                readonly
                value="0002466-1vwrh0"
                class="step-content__input min-input"
            >
          </div>
          <div class="form-step__button">
            <router-link to='/'>
              <button class="step-button__continue go-main__button">Go to main page</button>
            </router-link>
          </div>
        </div>

      </form>
    </div>
  </main>
</template>

<script>
import Header from "@/components/Header";
import VBtn from "@/components/v-btn";
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
export default {
  name: "RequestPage",
  setup () {
    return { v$: useVuelidate() }
  },
  components: {VBtn, Header},
  data () {
    return {
      budget: '',
      paginatorStepWidth: 0,
      paginatorVisible: 'block',
      isWhatsBudget: true,
      isEmploymentStatus: false,
      employmentStatus: '',
      isWorkStudent: '',
      isHowEarnIncome: false,
      isCurrentlyWorking: false,
      isMonthlyIncome: false,
      isLongReceiving: false,
      isAboutEmployment: false,
      isLongEarning: false,
      isWhereLive: false,
      isWhenBorn: false,
      isLastStep: false,
      isSuccessful: false,
    }
  },
  validations:{
    budget: { required },
    employmentStatus: { required },
    isWorkStudent: { required }
  },
  methods: {
    submitBudgetForm() {
      if (this.v$.budget.$invalid){
        this.v$.$touch()
      } else {
        this.fromBudgetClick()
      }
    },
    submitEmploymentStatus() {
      if (this.v$.employmentStatus.$invalid){
        this.v$.$touch()
      } else {
        this.goToFromEmploymentStatus()
      }
    },
    submitCurrentlyWorking() {
      if (this.v$.isWorkStudent.$invalid){
        this.v$.$touch()
      } else {
        this.goToFromCurrentlyWorking()
      }
    },

    // whats-budget
    fromBudgetClick() {
      this.isEmploymentStatus = true
      this.isWhatsBudget = false
      this.paginatorStepWidth = 10
    },
    // employmen-status
    goToFromEmploymentStatus() {
      this.isEmploymentStatus = false
      switch (this.employmentStatus) {
        case "employed":
          this.isMonthlyIncome = true
          this.paginatorStepWidth = 30
          break;
        case "self-employed":
          this.isMonthlyIncome = true
          this.paginatorStepWidth = 30
          break;
        case "student":
          this.isCurrentlyWorking = true
          this.paginatorStepWidth = 20
          break;
        case "retired/pension":
          this.isMonthlyIncome = true
          this.paginatorStepWidth = 30
          break;
        case "other":
          this.isHowEarnIncome = true
            this.paginatorStepWidth = 30
          break;
      }
    },
    backToBudget() {
      this.isEmploymentStatus = false
      this.isWhatsBudget = true
      this.paginatorStepWidth = 0
    },
    // earn-income
    goToFromHowEarnIncome() {
      this.isHowEarnIncome = false
      this.isMonthlyIncome = true
    },
    backFromHowEarnIncome() {
      this.isHowEarnIncome = false
      this.isEmploymentStatus = true
    },
    // currently-working
    goToFromCurrentlyWorking() {
      this.isCurrentlyWorking = false
      if(this.isWorkStudent === 'yes'){
        this.isLongReceiving = true
        this.paginatorStepWidth = 35
      } else if(this.isWorkStudent === 'no') {
        this.isMonthlyIncome = true
        this.paginatorStepWidth = 50
      }
    },
    backFromCurrentlyWorking() {
      this.isCurrentlyWorking = false
      this.isEmploymentStatus = true
      this.paginatorStepWidth = 10
    },
    // monthly-income
    goToFromMonthlyIncome() {
      this.isMonthlyIncome = false
      switch (this.employmentStatus) {
        case "employed":
          this.isAboutEmployment = true
          this.paginatorStepWidth = 50
          break;
        case "self-employed":
          this.isAboutEmployment = true
          this.paginatorStepWidth = 50
          break;
        case "student":
          this.isLongEarning = true
          this.paginatorStepWidth = 75
          break;
        case "retired/pension":
          this.isLongReceiving = true
          this.paginatorStepWidth = 60
          break;
        case "other":
          this.isLongReceiving = true
          this.paginatorStepWidth = 70
          break;
      }
    },
    backFromMonthlyIncome() {
      this.isMonthlyIncome = false
      switch (this.employmentStatus) {
        case "employed":
          this.isEmploymentStatus = true
          this.paginatorStepWidth = 10
          break;
        case "self-employed":
          this.isEmploymentStatus = true
          this.paginatorStepWidth = 10
          break;
        case "student":
          this.isCurrentlyWorking = true
          this.paginatorStepWidth = 20
          break;
        case "retired/pension":
          this.isEmploymentStatus = true
          this.paginatorStepWidth = 10
          break;
        case "other":
          this.isHowEarnIncome = true
          this.paginatorStepWidth = 30
          break;
      }
    },
    // long-receiving
    goToFromLongReceiving() {
      this.isLongReceiving = false
      switch (this.employmentStatus) {
        case "student":
          this.isAboutEmployment = true
          this.paginatorStepWidth = 50
          break;
        case "retired/pension":
          this.isWhereLive = true
          this.paginatorStepWidth = 80
          break;
        case "other":
          this.isWhereLive = true
          this.paginatorStepWidth = 80
          break;
      }
    },
    backFromLongReceiving() {
      this.isLongReceiving = false
      switch (this.employmentStatus) {
        case "student":
          this.isCurrentlyWorking = true
          this.paginatorStepWidth = 20
          break;
        case "retired/pension":
          this.isMonthlyIncome = true
          this.paginatorStepWidth = 30
          break;
        case "other":
          this.isMonthlyIncome = true
          this.paginatorStepWidth = 50
          break;
      }
    },
    // about-employment
    goToFromAboutEmployment() {
      this.isAboutEmployment = false
      switch (this.employmentStatus) {
        case "employed":
          this.isLongEarning = true
          this.paginatorStepWidth = 70
          break;
        case "self-employed":
          this.isLongEarning = true
          this.paginatorStepWidth = 70
          break;
        case "student":
          this.isLongEarning = true
          this.paginatorStepWidth = 75
          break;
      }
    },
    backFromAboutEmployment() {
      this.isAboutEmployment = false
      switch (this.employmentStatus) {
        case "employed":
          this.isMonthlyIncome = true
          this.paginatorStepWidth = 30
          break;
        case "self-employed":
          this.isMonthlyIncome = true
          this.paginatorStepWidth = 30
          break;
        case "student":
          this.isLongReceiving = true
          this.paginatorStepWidth = 35
          break;
      }
    },
    // long-earning
    goToFromLongEarning() {
      this.isLongEarning = false
      switch (this.employmentStatus) {
        case "employed":
          this.isWhereLive = true
          this.paginatorStepWidth = 80
          break;
        case "self-employed":
          this.isWhereLive = true
          this.paginatorStepWidth = 80
          break;
        case "student":
          this.isWhereLive = true
          this.paginatorStepWidth = 80
          break;
      }
    },
    backFromLongEarning() {
      this.isLongEarning = false
      switch (this.employmentStatus) {
        case "employed":
          this.isAboutEmployment = true
          this.paginatorStepWidth = 50
          break;
        case "self-employed":
          this.isAboutEmployment = true
          this.paginatorStepWidth = 50
          break;
        case "student":
          if(this.isWorkStudent==='yes'){
            this.isAboutEmployment = true
            this.paginatorStepWidth = 50
          } else if(this.isWorkStudent==='no') {
            this.isMonthlyIncome = true
            this.paginatorStepWidth = 50
          }
          break;
      }
    },
    // where-live
    goToWhenBorn() {
      this.isWhereLive = false
      this.isWhenBorn = true
      this.paginatorStepWidth = 90
    },
    backFromWhereLive() {
      this.isWhereLive = false
      switch (this.employmentStatus) {
        case "employed":
          this.isLongEarning = true
          this.paginatorStepWidth = 70
          break;
        case "self-employed":
          this.isLongEarning = true
          this.paginatorStepWidth = 70
          break;
        case "student":
          this.isLongEarning = true
          this.paginatorStepWidth = 75
          break;
        case "retired/pension":
          this.isLongReceiving = true
          this.paginatorStepWidth = 60
          break;
        case "other":
          this.isLongReceiving = true
          this.paginatorStepWidth = 70
          break;
      }
    },
    // when-born
    goToLastStep() {
      this.isWhenBorn = false
      this.isLastStep = true
      this.paginatorStepWidth = 100
    },
    backToWhereLive() {
      this.isWhereLive = true
      this.isWhenBorn = false
      this.paginatorStepWidth = 80
    },
    // last-step
    backToWhenBorn() {
      this.isLastStep = false
      this.isWhenBorn = true
      this.paginatorStepWidth = 90
    },
    submitRequest() {
      this.isSuccessful = true
      this.isLastStep = false
      this.paginatorVisible = 'none'
    }
  },
}
</script>

<style lang="sass">

.request-header
  .to-request-btn
    display: none
.request-form
  width: 100%
  max-width: 455px
  margin: 120px auto
.request-form__paginator
  width: 100%
  height: 8px
  background: #F1F1F1
  border-radius: 2px
  position: relative
  margin-bottom: 60px
.form-paginator__step
  position: absolute
  left: 0
  top: 0
  width: 50%
  height: 8px
  background: #7380FF
  border-radius: 2px
.form-step__title
  font-weight: 700
  font-size: 25px
  line-height: 140%
  letter-spacing: 0.02em
  color: #41456B
.form-step__descr
  font-weight: 400
  font-size: 16px
  line-height: 159%
  color: #7C7A84
  margin: 5px 0 40px
.confirm-number
  font-weight: 600
  font-size: 20px
  line-height: 34px
  color: #41456B
  margin-bottom: 5px
.form-step__button
  display: flex
  align-items: center
  gap: 60px
  margin-top: 40px
.step-button__continue
  width: calc(222px/455px*100%)
  font-weight: 700
  font-size: 16px
  line-height: 14px
  text-align: center
  letter-spacing: 0.02em
  text-transform: uppercase
  color: #FFFFFF
  padding: 15px
  box-sizing: border-box
  background: #7481FF
  border-radius: 2px
  &:hover
    background: rgba(116, 129, 255, .7)
.step-button__continue.go-main__button
  width: 100%
  padding: 15px 40px
.step-button__back
  font-weight: 700
  font-size: 16px
  line-height: 14px
  letter-spacing: 0.02em
  text-transform: uppercase
  color: #606276
  position: relative
  padding-left: 23px
  &:before
    position: absolute
    content: url("@/assets/img/icons/arrow-back.svg")
    left: 0
    top: -2px
  &:hover
    opacity: .7

//-----------------------------------step-content__items----------------
.step-content__items
  display: flex
  flex-wrap: wrap
  justify-content: space-between
.step-content__item
  width: calc(222px/455px*100%)
  input[type=radio]
    display: none
  input[type=radio]:checked + label
    border: 1px solid rgba(116, 129, 255, .7)
  input[type=radio] + label
    display: inline-block
    cursor: pointer
    margin-bottom: 10px
    font-weight: 600
    font-size: 16px
    line-height: 14px
    text-align: center
    color: #7C7A84
    padding: 15px 0
    width: 100%
    box-sizing: border-box
    border: 1px solid #F1F1F1
    border-radius: 2px
    &:hover
      background: rgba(241, 241, 241, .7)

//------------------------------------step-content__input-------------------
.step-content__input
  width: 100%
  outline: none
  padding: 10px 20px
  font-weight: 500
  font-size: 16px
  line-height: 159%
  color: #41456B
  background: #FFFFFF
  border: 1px solid #D7D7D7
  border-radius: 2px
  margin-bottom: 10px
  box-sizing: border-box
  &::placeholder
    font-weight: 500
    font-size: 16px
    line-height: 159%
    color: #D7D7D7
.step-content__input.min-input
  width: calc(222px/455px*100%)
.step-content__input.micro-input
  width: calc(106px/455px*100%)

.successful-icon
  margin-bottom: 20px
  display: inline-block

//-----------------------------VALIDATION---------
.error-message
  height: 20px
  width: 100%
  span
    font-weight: 500
    font-size: 16px
    line-height: 159%
    color: red
</style>