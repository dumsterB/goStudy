<template>
  <div>
    <v-app>
      <!-- Sizes your content based upon application components -->
      <v-main class="main" id="main">
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
export default {
  name: "Default",
  data() {
    return {}
  }
}
</script>

<style scoped>
.appBarDesktop .links {
  color: white;
}
.appBarDesktop {
  background: #013668 !important;
}


</style>