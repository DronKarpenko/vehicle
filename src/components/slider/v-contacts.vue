<template>
  <div class="v-contacts">
    <button class="v-contact__close" @click="closeContactForm"></button>
    <div class="v-contacts__body">
      <div class="contacts-dialog" v-if="formSubmit">
        <form class="contacts-form" @submit.prevent="submitHeandler">
          <h2 class="contact-form__title">We can't wait to hear from you!</h2>
          <ul class="contact-inputs">
            <li class="contact-inputs__user">
              <input
                  id="name"
                  v-model.trim="name"
                  type="text"
                  placeholder="Your Name"
                  :class="{'is-invalid': v$.name.$errors.length !== 0}"
              >
              <label
                  v-if="v$.name.$errors.length !== 0"
                  class="input-error"
                  for="name"
              >
                required!
              </label>
            </li>

            <li class="contact-inputs__phone">
              <input
                  id="phone"
                  v-model.trim="phone"
                  type="text"
                  placeholder="Phone Number"
                  :class="{'is-invalid': v$.phone.$errors.length !== 0}"
              >
              <label
                  v-if="v$.phone.$errors.length !== 0"
                  class="input-error"
                  for="phone"
              >
                invalid phone-number!
              </label>
            </li>

            <li class="contact-inputs__email">
              <input
                  id="email"
                  v-model.trim="email"
                  type="email"
                  placeholder="Email Address"
                  :class="{'is-invalid': v$.email.$errors.length !== 0}"
              >
              <label
                  v-if="v$.email.$errors.length !== 0"
                  class="input-error"
                  for="email"
              >
                invalid email!
              </label>
            </li>

          </ul>
          <v-btn class="form-submit"
                 title="Contact me"
                 type="submit"
          />
        </form>
        <div class="contact-social">
          <p class="contact-social__title">You can contact us yourself</p>
          <ul class="contact-social__list">
            <li class="contact-social__item">
              <a href="" class="contact-social__link">
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.85755 4.69556C6.59948 4.69556 4.72852 6.53427 4.72852 8.82459C4.72852 11.1149 6.56723 12.9536 8.85755 12.9536C11.1479 12.9536 12.9866 11.0827 12.9866 8.82459C12.9866 6.56652 11.1156 4.69556 8.85755 4.69556ZM8.85755 11.4697C7.40594 11.4697 6.21239 10.2762 6.21239 8.82459C6.21239 7.37298 7.40594 6.17943 8.85755 6.17943C10.3092 6.17943 11.5027 7.37298 11.5027 8.82459C11.5027 10.2762 10.3092 11.4697 8.85755 11.4697Z" fill="white"/>
                  <path d="M13.1503 5.5343C13.667 5.5343 14.0858 5.11547 14.0858 4.59881C14.0858 4.08216 13.667 3.66333 13.1503 3.66333C12.6337 3.66333 12.2148 4.08216 12.2148 4.59881C12.2148 5.11547 12.6337 5.5343 13.1503 5.5343Z" fill="white"/>
                  <path d="M15.5671 2.17976C14.7284 1.30879 13.5348 0.857178 12.18 0.857178H5.53484C2.72839 0.857178 0.857422 2.72815 0.857422 5.5346V12.1475C0.857422 13.5346 1.30903 14.7281 2.21226 15.5991C3.08323 16.4378 4.24452 16.8572 5.5671 16.8572H12.1477C13.5348 16.8572 14.6961 16.4056 15.5348 15.5991C16.4058 14.7604 16.8574 13.5669 16.8574 12.1798V5.5346C16.8574 4.17976 16.4058 3.01847 15.5671 2.17976ZM15.4381 12.1798C15.4381 13.1798 15.0832 13.9862 14.5026 14.5346C13.9219 15.083 13.1155 15.3733 12.1477 15.3733H5.5671C4.59936 15.3733 3.79291 15.083 3.21226 14.5346C2.63162 13.954 2.34129 13.1475 2.34129 12.1475V5.5346C2.34129 4.56685 2.63162 3.7604 3.21226 3.17976C3.76065 2.63137 4.59936 2.34105 5.5671 2.34105H12.2123C13.18 2.34105 13.9865 2.63137 14.5671 3.21202C15.1155 3.79266 15.4381 4.59911 15.4381 5.5346V12.1798Z" fill="white"/>
                </svg>
              </a>
            </li>
            <li class="contact-social__item">
              <a href="" class="contact-social__link">
                <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.95546 15.4946V8.60806H8.2855L8.86801 5.73866H5.95546V4.59091C5.95546 3.44315 6.53914 2.86927 7.70299 2.86927H8.86801V-0.00012207C8.2855 -0.00012207 7.56319 -0.00012207 6.53797 -0.00012207C4.39726 -0.00012207 3.04292 1.65322 3.04292 4.01703V5.73866H0.712891V8.60806H3.04292V15.4946H5.95546Z" fill="white"/>
                </svg>
              </a>
            </li>
            <li class="contact-social__item">
              <a href="" class="contact-social__link">
                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.3847 2.27738C17.1902 1.55445 16.6203 0.984565 15.8974 0.789901C14.5769 0.428589 9.29471 0.428589 9.29471 0.428589C9.29471 0.428589 4.01273 0.428589 2.69221 0.776203C1.98328 0.970661 1.39939 1.55455 1.20493 2.27738C0.857422 3.5978 0.857422 6.33617 0.857422 6.33617C0.857422 6.33617 0.857422 9.08835 1.20493 10.395C1.3996 11.1178 1.96938 11.6877 2.69231 11.8823C4.02663 12.2438 9.29492 12.2438 9.29492 12.2438C9.29492 12.2438 14.5769 12.2438 15.8974 11.8961C16.6204 11.7016 17.1902 11.1317 17.3849 10.4089C17.7323 9.08835 17.7323 6.35008 17.7323 6.35008C17.7323 6.35008 17.7462 3.5978 17.3847 2.27738ZM7.61298 8.86598V3.80637L12.0054 6.33617L7.61298 8.86598Z" fill="white"/>
                </svg>
              </a>
            </li>
            <li class="contact-social__item">
              <a href="" class="contact-social__link">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 7.06122L9.47785 12.2517C9.7983 12.4479 10.2017 12.4479 10.5222 12.2517L19 7.06122M1 7.06122V18C1 18.5523 1.44772 19 2 19H18C18.5523 19 19 18.5523 19 18V7.06122M1 7.06122L9.4414 1.3762C9.77908 1.14878 10.2209 1.14878 10.5586 1.3762L19 7.06122" stroke="#606276" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="contacts-success" v-else>
        <img src="@/assets/img/success.png" alt="success" class="success-img">
        <h2 class="success-title">Application Successful!</h2>
        <p class="success-message">Our manager will contact you in the nearest time.</p>
      </div>
    </div>
  </div>
</template>

<script>
import VBtn from "@/components/v-btn"
import useVuelidate from '@vuelidate/core'
import { required, email, numeric} from '@vuelidate/validators'
export default {
  name: "v-contactForm",
  setup () {
    return { v$: useVuelidate() }
  },
  data() {
    return{
      formSubmit: true,
      isVisibleContacts: true,
      name: '',
      phone: '',
      email: ''
    }
  },
  validations:{
    name: { required }, // Matches this.firstName
    phone: { required, numeric }, // Matches this.lastName
    email: { required, email } // Matches this.contact.email
  },
  components: {VBtn},
  methods: {
    closeContactForm(){
      this.$emit('closeContactForm')
      this.formSubmit = true
    },
    submitHeandler(){
      if (this.v$.$invalid){
        this.v$.$touch()
        return
      } else {
        this.formSubmit = false,
        this.name = " ",
        this.phone = " ",
        this.email = " "
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.v-contacts
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.1)
  position: fixed
  overflow: auto
  width: 40%
  height: 100vh
  right: 0
  top: 0
  z-index: 21
  background-color: #fff
.v-contacts__body
  padding: 100px 30px 60px 60px

.v-contact__close
  position: absolute
  display: inline-block
  left: 60px
  top: 28px
  width: 24px
  height: 24px
  cursor: pointer
  opacity: .7
  transition: opacity .2s
  &:hover
    opacity: 1
.v-contact__close::before,
.v-contact__close::after
  content: ''
  position: absolute
  top: 10px
  display: block
  width: 24px
  height: 3px
  background: #41456B
.v-contact__close::before
  transform: rotate(45deg)

.v-contact__close::after
  transform: rotate(-45deg)

.contact-form__title
  margin-bottom: 60px

.contact-inputs
  display: flex
  flex-direction: column
  gap: 25px
  margin-bottom: 40px
  li
    position: relative
    &::before
      position: absolute
      width: 24px
      height: 24px
      top: 50%
      transform: translateY(-50%)
  input
    outline: none
    box-sizing: border-box
    padding: 10px 20px 10px 44px
    width: 100%
    max-width: 390px
    border: 1px solid #D7D7D7
    border-radius: 2px
    font-weight: 500
    font-size: 16px
    color: #606276
    &::placeholder
      opacity: .5
input.is-invalid
  border: 1px solid red

.input-error
  position: absolute
  left: 0
  bottom: -15px
  font-size: 12px
  color: red

.contact-inputs__user
  &::before
    content: url(@/assets/img/icons/user.svg)
    left: 13px
.contact-inputs__phone
  &::before
    content: url(@/assets/img/icons/phone.svg)
    left: 16px
.contact-inputs__email
  &::before
    content: url(@/assets/img/icons/mail.svg)
    left: 13px

.form-submit
  width: 100%
  max-width: 390px

.contact-social
  margin-top: 60px
  &__title
    font-weight: 600
    font-size: 20px
    line-height: 25px
    color: #41456B
    margin-bottom: 20px
  &__list
    display: flex
    gap: 10px
  &__link
    height: 30px
    width: 30px
    background: #7481FF
    border-radius: 2px
    position: relative
    display: flex
    justify-content: center
    align-items: center
    svg
      path
        stroke: #fff

.success-title
  margin: 40px 0 5px 0
.success-message
  width: 55%
  font-weight: 400
  font-size: 16px
  line-height: 180%
  letter-spacing: 0.02em
  color: #606276

@media screen and (max-width: 1024px)
  .v-contacts
    width: 60%
@media screen and (max-width: 767.98px)
  .v-contacts
    width: 70%
@media screen and (max-width: 459.98px)
  .v-contacts
    width: 100%
</style>