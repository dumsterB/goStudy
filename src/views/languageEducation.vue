<template>
  <div>
    <div class="imageContentLanguageEducation" id="mainStudy">
      <div class="imgContentLanguage">
        <p class="title-main">ProfItLingua</p>
        <p class="text-main mt-7">{{ $t('german.main_title') }}</p>
        <div class="arrow-bottom" style="margin-top: -5px">
          <v-icon class="icon-arrow animate__animated animate__heartBeat animate__slower animate__infinite">
            mdi-arrow-down
          </v-icon>
        </div>
      </div>
    </div>
    <div class="content mt-15 " id="aboutStudy">
      <div class="content-title text-center">
        <p class="title-primary-1">О Kulturakademie Dresden</p>
      </div>
      <v-container>
        <v-row class="pl-2 pr-4">
          <v-col cols="12" md="6" lg="6">
            <p v-html="$t('german.text')"></p>
          </v-col>
          <v-col cols="12" md="6" lg="6">
            <img class="imgLeftSide"
                 src="../assets/img/studenty-v-germanii-min.jpeg" alt="">
          </v-col>
        </v-row>
      </v-container>
      <br><br><br>
      <div>
        <div class="featuresLanguage" id="advantage">
          <h3 class="text-center title-image" v-html="$t('german.text_2')"></h3>
          <br>
          <hr class="imageHr">
          <v-container fluid>
            <v-row class=" mt-10 pa-2">
              <v-col cols="12" md="4" lg="4" sm="12">
                <div class=" image-item">
                  <div>
                    <div class="ico-wrap">
                      <v-icon color="black" class="d-flex ma-auto" size="40">mdi-chat-outline</v-icon>
                    </div>
                    <p class="title-ico text-center">{{ $t('german.card_title') }}</p>
                    <p class="text-ico">{{ $t('german.card_subtitle') }} </p>
                  </div>
                </div>
              </v-col>
              <v-col cols="12" md="4" lg="4" sm="12">
                <div class=" image-item">
                  <div>
                    <div class="ico-wrap">
                      <v-icon color="black" class="d-flex ma-auto" size="40">mdi-web</v-icon>
                    </div>
                    <p class="title-ico text-center">{{ $t('german.card_title_1') }}</p>
                    <p class="text-ico">{{ $t('german.card_subtitle_1') }} </p>
                  </div>
                </div>
              </v-col>
              <v-col cols="12" md="4" lg="4" sm="12">
                <div class="ma-auto d-flex image-item">
                  <div>
                    <div class="ico-wrap">
                      <v-icon color="black" class="d-flex ma-auto" size="40">mdi-account-voice</v-icon>
                    </div>
                    <p class="title-ico text-center">{{ $t('german.card_title_2') }}</p>
                    <p class="text-ico">{{ $t('german.card_subtitle_2') }} </p>
                  </div>
                </div>
              </v-col>
            </v-row>
            <v-row class="mt-10 pa-2">
              <v-col cols="12" md="4" lg="4" sm="12">
                <div class="d-flex ma-auto image-item">
                  <div>
                    <div class="ico-wrap">
                      <v-icon color="black" class="d-flex ma-auto" size="40">mdi-file-outline</v-icon>
                    </div>
                    <p class="title-ico text-center">{{ $t('german.card_title_3') }}</p>
                    <p class="text-ico">{{ $t('german.card_subtitle_3') }} </p>
                  </div>
                </div>
              </v-col>
              <v-col cols="12" md="4" lg="4" sm="12">
                <div class="ma-auto d-flex image-item">
                  <div>
                    <div class="ico-wrap">
                      <v-icon color="black" class="d-flex ma-auto" size="40">mdi-language-ruby</v-icon>
                    </div>
                    <p class="title-ico text-center">{{ $t('german.card_title_4') }}</p>
                    <p class="text-ico">{{ $t('german.card_subtitle_4') }} </p>
                  </div>
                </div>
              </v-col>
              <v-col cols="12" md="4" lg="4" sm="12">
                <div class="ma-auto d-flex image-item">
                  <div>
                    <div class="ico-wrap">
                      <v-icon color="black" class="d-flex ma-auto" size="40">mdi-clock-time-five-outline</v-icon>
                    </div>
                    <p class="title-ico text-center">{{ $t('german.card_title_5') }}</p>
                    <p class="text-ico">{{ $t('german.card_subtitle_5') }} </p>p>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </div>
      <br>
      <div class="content-title text-center" id="provide">
        <p class="title-primary-1">{{ $t('german.text_4') }}</p>
      </div>
      <v-container>
        <v-row class="pl-2 pr-4">
          <v-col>
            <p v-html="$t('german.subtitle')"></p>
          </v-col>
          <v-col>
            <img class="imgLeftSide" height="350" width="700"
                 src="../assets/img/klinika-2.jpeg" alt="">
          </v-col>
        </v-row>
      </v-container>
      <br>
      <div class="advantages" id="type">
        <p class="title-image text-center">{{ $t('german.text_3') }}</p>
        <p class="text-center text-image">{{ $t('german.text_subtitle') }}</p>
        <hr class="imageHr">
        <v-container fluid>
          <v-row class="mt-10 pa-2">
            <v-col cols="12" md="4" lg="4" sm="12">
              <div class="ma-auto d-flex image-item">
                <div>
                  <div class="ico-wrap">
                    <v-icon color="black" class="d-flex ma-auto" size="40">mdi-human-male-board</v-icon>
                  </div>
                  <p class="title-ico text-center "> {{ $t('german.card_text') }}</p>
                </div>
              </div>
            </v-col>
            <v-col cols="12" md="4" lg="4" sm="12">
              <div class="ma-auto d-flex image-item">
                <div>
                  <div class="ico-wrap">
                    <v-icon color="black" class="d-flex ma-auto" size="40">mdi-account-voice</v-icon>
                  </div>
                  <p class="title-ico text-center">{{ $t('german.card_text_2') }}
                  </p>
                </div>
              </div>
            </v-col>
            <v-col cols="12" md="4" lg="4" sm="12">
              <div class="ma-auto d-flex image-item">
                <div>
                  <div class="ico-wrap">
                    <v-icon color="black" class="d-flex ma-auto" size="40">mdi-record-rec</v-icon>
                  </div>
                  <p class="title-ico text-center"> {{ $t('german.card_text_3') }}
                  </p>
                </div>
              </div>
            </v-col>

          </v-row>
          <v-row class="mt-10 pa-2">
            <v-col cols="12" md="4" lg="4" sm="12">
              <div class="ma-auto d-flex image-item">
                <div>
                  <div class="ico-wrap">
                    <v-icon color="black" class="d-flex ma-auto" size="40">mdi-alert-decagram</v-icon>
                  </div>
                  <p class="title-ico text-center ">{{ $t('german.card_text_4') }}
                  </p>
                </div>
              </div>
            </v-col>
            <v-col cols="12" md="4" lg="4" sm="12">
              <div class="ma-auto d-flex image-item">
                <div>
                  <div class="ico-wrap">
                    <v-icon color="black" class="d-flex ma-auto" size="40">mdi-account-group-outline</v-icon>
                  </div>
                  <p class="title-ico text-center">
                    {{ $t('german.card_text_5') }}
                  </p>
                </div>
              </div>
            </v-col>
            <v-col cols="12" md="4" lg="4" sm="12">
              <div class="ma-auto d-flex image-item">
                <div>
                  <div class="ico-wrap">
                    <v-icon color="black" class="d-flex ma-auto" size="40">mdi-account-check</v-icon>
                  </div>
                  <p class="title-ico text-center">
                    {{ $t('german.card_text_6') }}
                  </p>
                </div>
              </div>
            </v-col>

          </v-row>
        </v-container>
      </div>
    </div>
    <FormAndQuestions id="questions"></FormAndQuestions>
  </div>
</template>

<script>
import FormAndQuestions from "@/components/FormAndQuestions";

export default {
  name: "ItEducation",
  components: {
    FormAndQuestions
  },
  data() {
    return {
      advantages: [
        '- помимо обучения языку с носителем,изучения языка дополнительно с местными профессиональными преподавателями',
        '- современная программа обучения',
        '- детальный разбор всех возникающих вопросов',
        '- если вы пропустили урок, то можете всегда посмотреть его в записи и ничего не пропустите'

      ],
      advantages2: [
        '- индивидуальный подход',
        '- на наших уроках вы полностью  погружаетесь в язык,благодаря живому общению с группой и преподавателем.',
        '- полное погружение в язык',
        '- все уроки лигично придуманы и четко структурированы. Большое внимание уделяем разговарной практике '
      ]
    }
  }
}
</script>

<style scoped>
.featuresLanguage {
  background: url("../assets/img/dresden.jpg");
  background-size: cover;
  position: relative;
  height: 100%;
  box-shadow: inset 0 0 0 100vw rgba(0, 0, 0, .6);
}

.advantages {
  background: url("https://i.artfile.ru/2048x1152_1015065_[www.ArtFile.ru].jpg");
  background-size: cover;
  height: 100%;
  position: relative;
  box-shadow: inset 0 0 0 100vw rgba(0, 0, 0, .6);
}

.title-image {
  font-size: 2.5rem;
  line-height: 1.3;
  padding-top: 20px;
  font-weight: 600;
  color: white;
}

.ico-wrap {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 0 auto 30px;
  padding: 20px;
  background: #fff;
  color: #000;
}

.title-ico {
  color: white;
  font-weight: 600;
  width: 100%;
}

.text-ico {
  color: white;
  text-align: center;
}

.text-image {
  font-size: 1rem;
  line-height: 1.3;
  font-weight: 600;
  color: white;
}

.imageHr {
  width: 50px;
  color: white;
  height: 2px;
  text-align: center;
  display: flex;
  margin: auto;
}

.arrow-bottom {
  display: flex;
  justify-content: center;
  margin: auto;
  margin-top: 50px;
  text-align: center;
  align-items: center;
}

.imgLeftSide {
  height: 400px;
  width: 700px;
}

.image-item {
  padding-right: 10px;
}

@media (max-width: 1000px) {
  .title-main {
    font-size: 3rem;
  }

  .text-main {
    font-size: 1.5rem;
    margin-top: 5px;
  }

  .imgContentLanguage {
    top: 1%;
  }

  .imageContentLanguageEducation {
    height: 90vh;
  }

  .imgLeftSide {
    width: 300px;
    height: 200px;
    justify-content: center;
    display: flex;
    align-items: center;
    right: auto;
    position: relative;
  }

  .title-image {
    font-size: 1.6rem;
  }

  .image-item {
    padding-right: 30px;
  }
}

.content {
  height: 100%;
}
</style>