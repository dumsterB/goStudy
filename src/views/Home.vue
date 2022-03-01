<template>
  <div class="home">
    <div class="aboutUs" id="aboutUs">
      <h1 class="sectionTitle">О нас</h1>
      <v-container>
        <v-row>
          <v-col md="6" lg="6">
            <div class="content">
              <h3 class="contentMainTitle">ProfitLingua –</h3>
              <p class="contentText">Учебный центр  Profitlingua пользуется большим успехом у людей, желающих получить языковые знания и навыки для профессионального роста, расширить свой кругозор.  Мы предлагаем Вам изучить Мир с нами.</p>
              <p class="contentText"> Универсальный учебным центр который включает в себя</p>
              <ul>
                <li class="contentText">
               <strong> Обучение иностранных языков</strong>
                </li>
                <li class="contentText">
              <strong> Стажировка младшего медицинского персонала в Германии</strong>
                </li>
                <li class="contentText">
             <strong> Обучение в сфере IT</strong>
                </li>
                <li class="contentText">
              <strong> Поступление в государственный ВУЗ в Чехии</strong>
                </li>
              </ul>
              <br>
              <br>
              <a class="serviceButton" v-scroll-to="'#courses'"> Больше о курсах</a>
            </div>
          </v-col>
          <v-col md="6" lg="6">
            <img class=" aboutUsImage" src="../assets/img/srudents.png" alt="">
          </v-col>
        </v-row>
      </v-container>

    </div>
    <div>
      <h1 class="sectionTitle">О нас</h1>
    </div>
    <div class="services" id="services">
      <br>
      <h1 class="sectionTitleDark">Наши услуги</h1>
      <v-row class="mt-15">
        <v-col class="serviceItem">
          <div class="text-center">
            <img height="250" src="../assets/img/1.jpg" alt="">
            <p class="servicesText">Обучение IT профессиям</p>
          </div>
        </v-col>
        <v-col class="serviceItem">
          <div class="text-center ">
            <img height="250" src="../assets/img/2.jpg" alt="">
            <p class="servicesText">Поступление в государственные <br> вузы Чехии</p>
          </div>
        </v-col>
        <v-col class="serviceItem">
          <div class="text-center ">
            <img height="250" src="../assets/img/4.jpg" alt="">
            <p class="servicesText">Обучение немецескому языку</p>
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
                    <h3 class="serviceCardTitle">Курсы Немецского языка</h3>
                    <p class="serviceCardText">С профессиональным преподавателем из Германии</p>
                    <v-card-actions class="text-center serviceButtonCard d-flex">
                      <a class="serviceButton" @click="courses('languageeducation')">Подробнее</a>
                    </v-card-actions>
                  </div>
                </v-col>
                <v-col md="5" lg="5" sm="12" xs="12" class="colImage">
                  <img class="serviceCardImage " src="../assets/img/4804442.png" alt="">
                </v-col>
              </div>
            </v-row>
          </div>
        </v-col>
        <v-col md="4" lg="4" sm="12" xs="12" class="mainCol">
          <div class="secondService">
            <v-row class="justify-center">
              <div class="firstServiceLayout ">
                <v-col md="7" lg="7" sm="12" class="colInfo">
                  <div class="">
                    <h3 class="serviceCardTitle ">Поступление в вузы Чехии на бюджет</h3>
                    <p class="serviceCardText">Высшее образование в Чехии: поступаем в государственный вуз.</p>
                    <v-card-actions class="text-center serviceButtonCard  d-flex">
                      <a class="serviceButton" @click="courses('studyabroad')">Подробнее</a>
                    </v-card-actions>
                  </div>
                </v-col>
                <v-col md="5" lg="5" sm="12" class="colImage">
                  <img class="serviceCardImage serviceCardImage " src="../assets/img/410814-PDWTNM-412.png" alt="">
                </v-col>
              </div>
            </v-row>
          </div>
        </v-col>
        <v-col md="4" lg="4" sm="12" xs="12" class="mainCol">
          <div class="firstService">
            <v-row class="justify-center">
              <div class="firstServiceLayout ">
                <v-col md="7" lg="7" sm="12" xs="12" class=" colInfo">
                  <div class="ml-5">
                    <h3 class="serviceCardTitle">Курсы по всем IT направлением</h3>
                    <p class="serviceCardText">Обучись с нуля до начинающего специалиста в любой IT профессии</p>
                    <v-card-actions class="text-center  serviceButtonCard d-flex">
                      <a class="serviceButton" style="text-decoration: none" target="_blank" href="https://www.codifylab.com/">Подробнее</a>
                    </v-card-actions>
                  </div>
                </v-col>
                <v-col md="5" lg="5" sm="12" xs="12" class="colImage">
                  <img class="serviceCardImage" src="../assets/img/4804442.png" alt="">
                </v-col>
              </div>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </div>
    <div class="Collobration" id="features">
      <br>
      <h1 class="sectionTitleDark">Наши партнеры</h1>
      <br><br>
      <div class="justify-center d-flex">
        <v-row>
          <v-col sm="6" lg="4" md="4" cols="12">
            <img style="display:flex;margin: auto" class="" height="130" width="250" src="../assets/img/LogoK.jpg"
                 alt="">
          </v-col>
          <v-col sm="6" lg="4" md="4" cols="12">
            <img style="display:flex;margin: auto" class="" height="100" width="250"
                 src="../assets/img/goStudy.png" alt="">
          </v-col>
          <v-col sm="6" lg="4" md="4" cols="12">
            <img style="display:flex;margin: auto" class="mt-5" height="120" width="250"
                 src="../assets/img/codifayLogo.png" alt="">
          </v-col>
        </v-row>
      </div>
      <br><br>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'

export default {
  name: 'Home',
  components: {},
  methods: {
    beforeEnter(el) {
      el.style.transform = 'translateY(-60px)'
      el.style.opacity = 0
    },
    courses(value) {
      this.$router.push(value)
    },
    enter(el) {
      gsap.to(el, {
        duration: 1,
        y: 0,
        opacity: 1,
        ease: 'bounce.out'
      })
    }
  }
}
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

.slider::before, .slider::after {
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
