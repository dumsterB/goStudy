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
                <v-list-item-title  @click="$router.push('/')"> {{ $t('headerLanguageEducation.main') }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item
            >
              <v-list-item-content>
                <v-list-item-title v-scroll-to="'#aboutStudy'">{{
                    $t('headerLanguageEducation.about')
                  }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item
            >
              <v-list-item-content>
                <v-list-item-title v-scroll-to="'#advantage'"> {{
                    $t('headerLanguageEducation.advantage')
                  }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item
            >
              <v-list-item-content>
                <v-list-item-title v-scroll-to="'#provide'"> {{
                    $t('headerLanguageEducation.provide')
                  }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item
            >
              <v-list-item-content>
                <v-list-item-title v-scroll-to="'#type'"> {{ $t('headerLanguageEducation.type') }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item
            >
              <v-list-item-content>
                <v-list-item-title v-scroll-to="'#questions'"> {{
                    $t('headerLanguageEducation.questions')
                  }}
                </v-list-item-title>
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
          <img  class="justify-center pr-5 d-flex ma-auto"  height="40" src="../assets/img/logo2.png" alt="">
        </div>
      </div>
      <v-app-bar
          class="appBarDesktop"
          style="height: 60px"
          app
          id="appBar"
      >
        <div class="d-flex pa-2">
          <v-app-bar-nav-icon style="color: white" class="mobileHidden" @click="drawer=!drawer"></v-app-bar-nav-icon>
          <router-link to="/"><img  class="justify-center logo pr-5 d-flex ma-auto"  height="40" src="../assets/img/logo2.png" alt=""></router-link>
        </div>
        <v-spacer></v-spacer>
        <div class="d-flex desctopHidden">
          <v-btn text class="links" v-scroll-to="'#mainStudy'">
            {{ $t('headerLanguageEducation.main') }}
          </v-btn>
          <v-btn text class="links" v-scroll-to="'#aboutStudy'">
            {{ $t('headerLanguageEducation.about') }}
          </v-btn>
          <v-btn text class="links" v-scroll-to="'#advantage'">
            {{ $t('headerLanguageEducation.advantage') }}
          </v-btn>
          <v-btn text class="links" v-scroll-to="'#provide'">
            {{ $t('headerLanguageEducation.provide') }}
          </v-btn>
          <v-btn text class="links" v-scroll-to="'#type'">
            {{ $t('headerLanguageEducation.type') }}
          </v-btn>
          <v-btn text class="links" v-scroll-to="'#questions'">
            {{ $t('headerLanguageEducation.questions') }}
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
      <v-main class="main studyAbroad" id="main">

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
  components:{
    CountryFlag
  },
  data() {
    return {
      open: true,
      drawer: false,
      selectedItem: '',
      currentLanguage: 'ru',
      languages: [{val: 'ru', text: 'Русский-язык'}, {val: 'uz', text: 'Uzbek-tili'}],
    }
  }, methods: {
    changeDrawer() {
      this.open = !this.open
    },
    changeLanguage(val) {
      this.$i18n.locale = val
      this.currentLanguage = val
      console.log(val)
    }
  }
}
</script>

<style scoped>
.appBarDesktop .links{
  color: white;
}
@media (min-width: 1000px) {
  .appBarDesktop {
    background: #013668 !important;
  }
  .appBarMobile{
    display: none;
  }
  .mobileHidden{
    visibility: hidden;
  }
}
@media (max-width: 1000px) {
  .appBarMobile{
    background: #013668 !important;
  }
  .appBarDesktop{
    display: none;
  }
  .desctopHidden{
    display: none!important;
  }

}

</style>