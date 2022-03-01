<template>
  <div>
    <v-app>

      <v-app-bar
          class="appBarDefault"
          dark
          elevation="1"
          app
      >
        <v-app-bar-nav-icon class="hidden-sm-and-up " @click="drawer=!drawer"></v-app-bar-nav-icon>
        <div class="logo">
          <img  height="40" src="../assets/img/logo2.png" alt="">
        </div>
        <v-spacer></v-spacer>

      </v-app-bar>
      <!-- Sizes your content based upon application components -->
      <v-main class="main" id="main">
        <!-- Provides the application the proper gutter -->
        <div>

        </div>
        <router-view></router-view>
      </v-main>

      <div class="footer" id="contacts">
        <v-footer
            dark
            padless
        >
          <v-card
              flat
              tile
              style="width: 100%"
              class="footerCard lighten-1 white--text "
          >
            <v-row class="pa-10">
              <v-col>
                <v-card-text>
                  <h1>Контакты</h1>
                  <div class="mt-10">

                    <p class="text-sm-body-1"><strong>Адресс: </strong> 28 Oltintepa Street, Tashkent 100016, Uzbekistan
                    </p>
                    <p class="text-sm-body-1"><strong>Номер: </strong>+998 71-203-77-57
                    </p>

                    <v-btn
                        class="mx-4 white--text"
                        icon
                    >
                      <v-icon size="40px">
                        mdi-facebook
                      </v-icon>
                    </v-btn>
                    <v-btn
                        class="mx-4 white--text"
                        icon
                    >
                      <v-icon size="40px">
                        mdi-phone
                      </v-icon>
                    </v-btn>
                    <v-btn
                        class="mx-4 white--text"
                        icon
                    >
                      <v-icon size="40px">
                        mdi-instagram
                      </v-icon>
                    </v-btn>
                  </div>
                </v-card-text>
              </v-col>
              <v-col>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.886360835695!2d69.3257459147942!3d41.31133570867039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef584dbcdec7d%3A0xaf5bee5872e0e572!2sWash%20Inn%20Tashkent!5e0!3m2!1sen!2s!4v1642675626172!5m2!1sen!2s"
                    class="map" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
              </v-col>
            </v-row>

            <v-divider></v-divider>

            <v-card-text class="white--text text-center">
              {{ new Date().getFullYear() }} — <strong>ProfItLingua</strong>
            </v-card-text>
          </v-card>
        </v-footer>

      </div>

    </v-app>
  </div>
</template>

<script>

import gsap from 'gsap'

export default {
  name: "Default",
  data() {
    return {
      open: true,
      drawer: false,
      currentLanguage:'Русский-язык',
      languages:[{val:'ru',text:'Русский-язык'},{val:'uz',text:'Uzbek-tili'}],
      carousels: [
        {
          text: 'Ответы на самые важные вопросы <br /> об учебе в Чехии ',
          img: 'https://w-dog.ru/wallpapers/2/2/503964941023421/praga-chexiya-maj-2015-g-utro.jpg'
        },
        {
          text: 'Научитесь востребаванным професиям IT ',
          img: 'https://systemlines.ru/wp-content/uploads/2021/02/o_kompanii.jpg'
        },
        {
          text: 'Ответы на самые важные вопросы <br /> об учебе в Чехии ',
          img: 'https://w-dog.ru/wallpapers/2/2/503964941023421/praga-chexiya-maj-2015-g-utro.jpg'
        }
      ]
    }
  }, methods: {
    changeDrawer() {
      this.open = !this.open
      gsap.to('#mobile-menu', {
        duration: 3,
        y: 1,
        opacity: 1,
        ease: 'expo.out',
      })
    },
    changeLanguage(val){
      this.$i18n.locale=val.val
      this.currentLanguage=val.text
    }
  }
}
</script>

<style scoped>

</style>