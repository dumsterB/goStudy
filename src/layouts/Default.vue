<template>
  <div>
    <v-app>
      <v-navigation-drawer app v-model="drawer" temporary>
        <v-list shaped>
          <v-subheader>REPORTS</v-subheader>
          <v-list-item-group
              v-model="selectedItem"
              color="primary"
          >
            <v-list-item
            >
              <v-list-item-content>
                <v-list-item-title v-scroll-to="'#main'" > {{ $t('headerDefault.main') }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item
            >
              <v-list-item-content>
                <v-list-item-title v-scroll-to="'#aboutUs'" >    {{ $t('headerDefault.aboutUs') }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item
            >
            <v-list-item-content>
                <v-list-item-title v-scroll-to="'#services'" > {{ $t('headerDefault.services') }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item
            >
              <v-list-item-content>
                <v-list-item-title v-scroll-to="'#features'" > {{ $t('headerDefault.partners') }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item
            >
              <v-list-item-content>
                <v-list-item-title v-scroll-to="'#contacts'" > {{ $t('headerDefault.Contacts') }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

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
        <div class="d-flex desctopHidden">
          <v-btn text class="links" v-scroll-to="'#main'">
            {{ $t('headerDefault.main') }}
          </v-btn>
          <v-btn text class="links" v-scroll-to="'#aboutUs'">
            {{ $t('headerDefault.aboutUs') }}
          </v-btn>
          <v-btn text class="links" v-scroll-to="'#services'">
            {{ $t('headerDefault.services') }}
          </v-btn>
          <v-btn text class="links" v-scroll-to="'#courses'">
            {{ $t('headerDefault.courses') }}
          </v-btn>
          <v-btn text class="links" v-scroll-to="'#features'">
            {{ $t('headerDefault.partners') }}
          </v-btn>
          <v-btn text class="links" v-scroll-to="'#contacts'">
            {{ $t('headerDefault.Contacts') }}
          </v-btn>
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                  text class="links"
                  dark
                  v-bind="attrs"
                  v-on="on"
                  elevation="0"
              >
                {{currentLanguage}}
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                  v-for="language of languages"
                  :key="language.val"
              >
                <v-btn elevation="0" @click="changeLanguage(language)">{{language.text}}</v-btn>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </v-app-bar>
      <!-- Sizes your content based upon application components -->
      <v-main class="main" id="main">
        <!-- Provides the application the proper gutter -->
        <v-carousel hide-delimiters class="carousel">
          <v-carousel-item
              v-for="(carousel,i) in carousels"
              :key="i"
              :src="carousel.img"
              class="carouselImages"
              reverse-transition="fade-transition"
              transition="fade-transition"
          >
            <v-container
                fill-height
            >
              <v-layout fill-height align-center justify-center class="caruselLayout">
                <v-flex xs12>
                  <p class=" white--text text-center  caroselText" v-html="carousel.text"></p>
                  <v-card-actions class="text-center justify-center d-flex">
                    <a class="caroselButton ">Подробнее</a>
                  </v-card-actions>
                </v-flex>
              </v-layout>
            </v-container>
          </v-carousel-item>
        </v-carousel>
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
          img: 'https://proprikol.ru/wp-content/uploads/2019/10/krasivye-kartinki-pragi-36.jpg'
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