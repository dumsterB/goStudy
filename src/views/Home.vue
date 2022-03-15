<template>
  <div class="home">
    <div class="aboutUs" id="aboutUs">
      <h1 class="sectionTitle">{{ $t("aboutUs.main_title") }}</h1>
      <v-container>
        <v-row>
          <v-col md="6" lg="6">
            <div class="content">
              <span v-html="$t('aboutUs.main')"></span>
              <p class="contentText">
                <strong>{{ $t("aboutUs.text_2") }}</strong>
              </p>
              <ul>
                <li class="contentText">
                  {{ $t("aboutUs.text_3") }}
                </li>
                <li class="contentText">
                  {{ $t("aboutUs.text_4") }}
                </li>
                <li class="contentText">
                  {{ $t("aboutUs.text_5") }}
                </li>
                <li class="contentText">
                  {{ $t("aboutUs.text_6") }}
                </li>
              </ul>
              <br />
              <br />
              <a class="serviceButton" v-scroll-to="'#courses'">
                {{$t('more_courses')}}</a>
            </div>
          </v-col>
          <v-col md="6" lg="6">
            <img class="aboutUsImage" src="../assets/img/srudents.png" alt="" />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div>
      <h1 class="sectionTitle">О нас</h1>
    </div>
    <div class="services" id="services">
      <br />
      <h1 class="sectionTitleDark">{{ $t("services.main_title") }}</h1>
      <v-row class="mt-15">
        <v-col class="serviceItem">
          <div class="text-center">
            <img height="250" src="../assets/img/1.jpg" alt="" />
            <p class="servicesText">{{ $t("services.text") }}</p>
          </div>
        </v-col>
        <v-col class="serviceItem">
          <div class="text-center">
            <img height="250" src="../assets/img/2.jpg" alt="" />
            <p class="servicesText">{{ $t("services.text_2") }}</p>
          </div>
        </v-col>
        <v-col class="serviceItem">
          <div class="text-center">
            <img height="250" src="../assets/img/4.jpg" alt="" />
            <p class="servicesText">{{ $t("services.text_3") }}</p>
          </div>
        </v-col>
      </v-row>
    </div>
    <div class="serviceCards mt-5" id="courses">
      <v-row>
        <v-col md="4" lg="4" sm="12" xs="12" class="mainCol">
          <div class="firstService">
            <v-row class="justify-center">
              <div class="firstServiceLayout">
                <v-col md="7" lg="7" sm="12" xs="12" class="colInfo">
                  <div class="ml-2">
                    <span v-html="$t('courses.text')"></span>
                    <v-card-actions
                      class="text-center serviceButtonCard d-flex"
                    >
                      <a
                        class="serviceButton"
                        @click="courses('languageeducation')"
                        >Подробнее</a
                      >
                    </v-card-actions>
                  </div>
                </v-col>
                <v-col md="5" lg="5" sm="12" xs="12" class="colImage">
                  <img
                    class="serviceCardImage"
                    src="../assets/img/4804442.png"
                    alt=""
                  />
                </v-col>
              </div>
            </v-row>
          </div>
        </v-col>
        <v-col md="4" lg="4" sm="12" xs="12" class="mainCol">
          <div class="secondService">
            <v-row class="justify-center">
              <div class="firstServiceLayout">
                <v-col md="7" lg="7" sm="12" class="colInfo">
                  <div class="">
                    <span v-html="$t('courses.text_2')"></span>
                    <v-card-actions
                      class="text-center serviceButtonCard d-flex"
                    >
                      <a class="serviceButton" @click="courses('studyabroad')"
                        >Подробнее</a
                      >
                    </v-card-actions>
                  </div>
                </v-col>
                <v-col md="5" lg="5" sm="12" class="colImage">
                  <img
                    class="serviceCardImage serviceCardImage"
                    src="../assets/img/410814-PDWTNM-412.png"
                    alt=""
                  />
                </v-col>
              </div>
            </v-row>
          </div>
        </v-col>
        <v-col md="4" lg="4" sm="12" xs="12" class="mainCol">
          <div class="firstService">
            <v-row class="justify-center">
              <div class="firstServiceLayout">
                <v-col md="7" lg="7" sm="12" xs="12" class="colInfo">
                  <div class="ml-5">
                    <span v-html="$t('courses.text_3')"></span>
                    <v-card-actions
                      class="text-center serviceButtonCard d-flex"
                    >
                      <a
                        class="serviceButton"
                        style="text-decoration: none"
                        target="_blank"
                        href="https://www.codifylab.com/"
                        >Подробнее</a
                      >
                    </v-card-actions>
                  </div>
                </v-col>
                <v-col md="5" lg="5" sm="12" xs="12" class="colImage">
                  <img
                    class="serviceCardImage"
                    src="../assets/img/4804442.png"
                    alt=""
                  />
                </v-col>
              </div>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </div>
    <div class="Collobration" id="partners">
      <br />
      <h1 class="sectionTitleDark">Наши партнеры</h1>
      <br /><br />
      <div class="justify-center d-flex">
        <v-row>
          <v-col sm="6" lg="4" md="4" cols="12">
            <img
              style="display: flex; margin: auto"
              class=""
              height="100"
              width="280"
              src="../assets/img/LogoK.jpg"
              alt=""
            />
          </v-col>
          <v-col sm="6" lg="4" md="4" cols="12">
            <img
              style="display: flex; margin: auto"
              class=""
              height="100"
              width="280"
              src="https://static.wixstatic.com/media/b868af_c4bc2693f43c4514ae3245eb7a158cc3~mv2_d_5000_1200_s_2.jpg/v1/fill/w_980,h_235,al_c,q_90/b868af_c4bc2693f43c4514ae3245eb7a158cc3~mv2_d_5000_1200_s_2.jpg"
              alt=""
            />
          </v-col>
          <v-col sm="6" lg="4" md="4" cols="12">
            <img
              style="display: flex; margin: auto"
              class=""
              height="105"
              width="280"
              src="https://static.tildacdn.com/tild3536-3730-4237-a661-646339333962/Untitled-2-01.png"
              alt=""
            />
          </v-col>
        </v-row>
      </div>
      <br /><br />
    </div>
    <div >
      <formAndQuestions></formAndQuestions>
    </div>
  </div>
</template>

<script>
import formAndQuestions from "@/components/FormAndQuestions";
export default {
  name: "Home",
  components: {formAndQuestions},
  methods: {
    courses(value) {
      this.$router.push(value);
    },
  },
};
</script>
<style>
.slider {
  background: white;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125);
  height: 100px;
  margin: auto;
  overflow: hidden;
  position: relative;
  width: 960px;
}

.slider::before,
.slider::after {
  background: linear-gradient(to right, white 0%, rgba(255, 255, 255, 0) 100%);
  content: "";
  height: 100px;
  position: absolute;
  width: 200px;
  z-index: 2;
}

.slider::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}

.slider::before {
  left: 0;
  top: 0;
}

.slider .slide-track {
  animation: scroll 40s linear infinite;
  display: flex;
  width: calc(250px * 14);
}

.slider .slide {
  height: 100px;
  width: 250px;
}
</style>
