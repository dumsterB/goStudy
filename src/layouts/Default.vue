<template>
  <div>
    <v-app>
      <v-navigation-drawer app v-model="drawer" temporary>
        <v-list shaped>
          <v-list-item-group
              v-model="selectedItem"
              color="primary"
          >
            <v-list-item
            >
              <v-list-item-content>
                <v-list-item-title v-scroll-to="'#aboutUs'"> {{ $t('headerDefault.aboutUs') }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item
            >
              <v-list-item-content>
                <v-list-item-title><a style="text-decoration: none; color: rgba(0, 0, 0, 0.87);" target="_blank"
                                      href="https://www.codifylab.com/">{{ $t('headerDefault.coursesIt') }}</a>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item
            >
              <v-list-item-content>
                <v-list-item-title @click="handlerRoute('languageeducation')"> {{
                    $t('headerDefault.germanyLanguage')
                  }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item
            >
              <v-list-item-content>
                <v-list-item-title @click="handlerRoute('studyabroad')"> {{
                    $t('headerDefault.studyInCzech')
                  }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item
            >
              <v-list-item-content>
                <v-list-item-title v-scroll-to="'#partners'"> {{ $t('headerDefault.partners') }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item
            >
              <v-list-item-content>
                <v-list-item-title v-scroll-to="'#contacts'"> {{ $t('headerDefault.contacts') }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <div class="ml-2">
              <v-btn  v-if="currentLanguage==='ru'" @click="changeLanguage('uz')" dark style="background: transparent;" elevation="0">
                <country-flag  style="margin-top: -4px"  country='rus' size='normal'/>
              </v-btn>
              <v-btn v-if="currentLanguage==='uz'" @click="changeLanguage('ru')" dark style="background: transparent" elevation="0">
                <country-flag style="margin-top: -4px"  country='uz' size='normal'/>
              </v-btn>
            </div>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <div
          class="appBarMobile"
          style="height: 60px"
      >
        <div class="d-flex pa-2">
          <v-app-bar-nav-icon style="color: white" class="mobileHidden " @click="drawer=!drawer"></v-app-bar-nav-icon>
          <img class="justify-center logo pr-5 d-flex ma-auto" height="40" src="../assets/img/logo2.png" alt="">
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
                {{ currentLanguage }}
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                  v-for="language of languages"
                  :key="language.val"
              >
                <v-btn elevation="0" @click="changeLanguage(language)">{{ language.text }}</v-btn>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>
      <v-app-bar
          class="appBarDesktop"
          dark
          id="appBar"
          style="height: 60px"
          elevation="1"
          app
      >
        <v-app-bar-nav-icon class="mobileHidden " @click="drawer=!drawer"></v-app-bar-nav-icon>
        <img height="40" src="../assets/img/logo2.png" alt="">
        <v-spacer></v-spacer>
        <div class="d-flex desctopHidden">
          <v-btn text class="links" v-scroll-to="'#aboutUs'">
            {{ $t('headerDefault.aboutUs') }}
          </v-btn>
          <v-btn text class="links">
            <a style="text-decoration: none;color:white" target="_blank" href="https://www.codifylab.com/">
              {{ $t('headerDefault.coursesIt') }}</a>
          </v-btn>
          <v-btn text class="links" @click="handlerRoute('languageeducation')">
            {{ $t('headerDefault.germanyLanguage') }}
          </v-btn>
          <v-btn text class="links" @click="handlerRoute('studyabroad')">
            {{ $t('headerDefault.studyInCzech') }}
          </v-btn>
          <v-btn text class="links" v-scroll-to="'#partners'">
            {{ $t('headerDefault.partners') }}
          </v-btn>
          <v-btn text class="links" v-scroll-to="'#contacts'">
            {{ $t('headerDefault.contacts') }}
          </v-btn>
          <div class="ml-2">
            <v-btn  v-if="currentLanguage==='ru'" @click="changeLanguage('uz')" dark style="background: transparent;" elevation="0">
              <country-flag  style="margin-top: -4px"  country='rus' size='normal'/>
            </v-btn>
            <v-btn v-if="currentLanguage==='uz'" @click="changeLanguage('ru')" dark style="background: transparent" elevation="0">
              <country-flag style="margin-top: -4px"  country='uz' size='normal'/>
            </v-btn>
          </div>

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
              style="box-shadow: inset 0 0 0 100vw rgba(0, 0, 0, .3);"
              reverse-transition="fade-transition"
              transition="fade-transition"
          >
            <v-container
                fill-height
            >
              <v-layout fill-height align-center justify-center class="caruselLayout">
                <v-flex xs12>
                  <p class=" white--text text-center  caroselText" v-html="carousel.text"></p>
                  <v-card-actions class="text-center justify-center d-flex" v-if="carousel.url">
                    <a class="caroselButton" @click="changeRoute(carousel.url)">Подробнее</a>
                  </v-card-actions>
                  <v-card-actions class="text-center justify-center d-flex" v-else   >
                    <a class="caroselButton" style="text-decoration: none;color:white"  target="_blank" href="https://www.codifylab.com/">Подробнее</a>
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
                  <h1>{{$t('footer.contact')}}</h1>
                  <div class="mt-10">

                    <p><strong v-html="$t('footer.text')"></strong></p>

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

import CountryFlag from 'vue-country-flag'

export default {
  name: "Default",
  components: {
    CountryFlag
  },
  data() {
    return {
      open: true,
      selectedItem: '',
      drawer: false,
      currentLanguage: 'ru',
      imgIt:'https://leaderid.s3.amazonaws.com/event_photo/206297/609e14c62ebcb260574967.jpg',
      languages: [{val: 'ru', text: 'Русский-язык'}, {val: 'uz', text: 'Uzbek-tili'}],
      carousels: [
        {
          text: this.$t("carousel.text-1"),
          img: 'https://proprikol.ru/wp-content/uploads/2019/10/krasivye-kartinki-pragi-36.jpg',
          url:'/studyabroad'
        },
        {
          text: this.$t("carousel.text-2"),
          img: 'https://leaderid.s3.amazonaws.com/event_photo/206297/609e14c62ebcb260574967.jpg',
        },
        {
          text: this.$t("carousel.text-3"),
          img: 'https://w-dog.ru/wallpapers/2/2/503964941023421/praga-chexiya-maj-2015-g-utro.jpg',
          url:'/languageeducation'
        }
      ]
    }
  },
  computed: {
  },
  methods: {
    changeDrawer() {
      this.open = !this.open
    },
    handlerRoute(route) {
      this.$router.push(route)
    },
    changeLanguage(val) {
      this.$i18n.locale = val
      this.currentLanguage = val
      console.log(val)
    },
    changeRoute(val){
        this.$router.push(val)
    }
  }
}
</script>

<style scoped>
.appBarDesktop .links {
  color: white;
}

@media (min-width: 1000px) {
  .appBarDesktop {
    background: #013668 !important;
  }

  .appBarMobile {
    display: none;
  }

  .mobileHidden {
    visibility: hidden;
  }
}

@media (max-width: 1000px) {
  .appBarMobile {
    background: #013668 !important;
  }

  .appBarDesktop {
    display: none;
  }

  .desctopHidden {
    display: none !important;
  }
}
.carouselImages{
  box-shadow: inset 0 0 0 100vw rgba(0, 0, 0, .3);
}
</style>