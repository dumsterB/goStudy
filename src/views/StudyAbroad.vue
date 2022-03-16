<template>
  <div class="">
    <div class="imageContent" id="mainStudy">
      <div class="imgContent">
        <p class="title-main"> {{ $t('abroad.main_title') }}</p>
      </div>
      <div class="arrow-bottom">
        <v-icon class="icon-arrow animate__animated animate__heartBeat animate__slower animate__infinite">
          mdi-arrow-down
        </v-icon>
      </div>
    </div>
    <div class="content mt-15 pa-4" id="aboutStudy">
      <v-row>
        <v-col md="7" lg="7" sm="12">
          <div class="contentOfInfo">
            <p class="subtitle-item">{{ $t('abroad.title') }}</p>
            <p>{{ $t('abroad.text') }}</p>

            <p class="adjustement">{{ $t('abroad.text_1') }}</p>
            <br>
            <p>{{ $t('abroad.text_2') }}</p>
            <div class="timeline-content">
              <p class="subtitle-item"> {{ $t('abroad.title') }}</p>
              <v-timeline
                  align-top
                  dense
              >
                <v-timeline-item
                    class="timeline-dot "
                    small
                    v-for="(item,i) of pluses" :key="i"
                >
                  <v-row class="pt-1">
                    <v-col cols="12">
                      <strong>{{ $t(item) }}</strong>
                    </v-col>
                  </v-row>
                </v-timeline-item>
              </v-timeline>
            </div>

            <br>
           <p v-html="$t('abroad.text_3')"></p>
            <p class="subtitle-item">  {{$t('abroad.title_3')}}</p>
            <br>
         <p v-html="$t('abroad.text_4')"></p>
          </div>

        </v-col>
        <v-col md="5" lg="5" sm="12" class="studyAbroad ">
          <div class="d-flex " style="justify-content: center">
            <div>
              <img height="450"
                   src="https://avatars.mds.yandex.net/get-zen_doc/3822405/pub_5f75d8aa85c72a7ce4407ca8_5f75d8e285c72a7ce440f0e8/scale_1200"
                   alt="">
              <img style="" height="450" src="https://st.astr.ru/gallery/55c3320c454dc/9297712.jpg" alt="">
              <img height="450" src="https://st-1.akipress.org/st_limon/4/1633317964_0.jpg" alt="">
              <img height="450" src="https://guu.ru/wp-content/uploads/LRM_EXPORT_20180706_131322.jpg" alt="">
            </div>
          </div>
        </v-col>
      </v-row>
      <div class="timiline-abroad mt-10" id="advantageStudy">
        <v-row class="pa-10">
          <v-col cols="12" md="3" sm="12" lg="3">
            <p class="text-h5" v-html="$t('abroad.timiline_title_1')"></p>
            <v-timeline
                align-top
                dense
            >
              <v-timeline-item
                  class="timeline-dot "
                  small
                  v-for="(item,i) of advantages4" :key="i"
              >
                <v-row class="pt-1">
                  <v-col cols="12">
                    <p>{{ item }}</p>
                  </v-col>
                </v-row>
              </v-timeline-item>
            </v-timeline>
          </v-col>
          <v-col cols="12" md="3" sm="12" lg="3">
            <p class="text-h5">{{$t('abroad.timiline_title_2')}}</p>
            <v-timeline
                align-top
                dense
            >
              <v-timeline-item
                  class="timeline-dot "
                  small
                  v-for="(item,i) of advantages2" :key="i"
              >
                <v-row class="pt-1">
                  <v-col cols="12">
                    <p>{{ item }}</p>
                  </v-col>
                </v-row>
              </v-timeline-item>
            </v-timeline>
          </v-col>
          <v-col cols="12" md="3" sm="12" lg="3">
            <p class="text-h5">{{$t('abroad.timiline_title_3')}}</p>
            <v-timeline
                align-top
                dense
            >
              <v-timeline-item
                  class="timeline-dot "
                  small
                  v-for="(item,i) of advantages3" :key="i"
              >
                <v-row class="pt-1">
                  <v-col cols="12">
                    <p>{{ item }}</p>
                  </v-col>
                </v-row>
              </v-timeline-item>
            </v-timeline>
          </v-col>

          <v-col cols="12" md="3" sm="12" lg="3">
            <p class="text-h5">{{$t('abroad.timiline_title_4')}}</p>
            <v-timeline
                align-top
                dense
            >
              <v-timeline-item
                  class="timeline-dot "
                  small
                  v-for="(item,i) of advantages1" :key="i"
              >
                <v-row class="pt-1">
                  <v-col cols="12">
                    <p>{{ item }}</p>
                  </v-col>
                </v-row>
              </v-timeline-item>
            </v-timeline>
          </v-col>
        </v-row>
      </div>
    </div>
    <div id="questionsStudy">
      <FormAndQuestions></FormAndQuestions>
    </div>
  </div>
</template>

<script>
import FormAndQuestions from "@/components/FormAndQuestions";

export default {
  name: "StudyAbroad",
  components: {
    FormAndQuestions
  },
  data() {
    return {
      pluses: [
        'abroad.timiline_1',
        'abroad.timiline_2',
        'abroad.timiline_3',
        'abroad.timiline_4',
        'abroad.timiline_5',
        'abroad.timiline_6',
        'abroad.timiline_7',
      ],
      advantages1: [
        this.$t('abroad.timiline_item_16'),
        this.$t('abroad.timiline_item_17'),
        this.$t('abroad.timiline_item_18'),
      ],
      advantages2: [
        this.$t('abroad.timiline_item_7'),
        this.$t('abroad.timiline_item_19'),
        this.$t('abroad.timiline_item_8'),
        this.$t('abroad.timiline_item_9'),
        this.$t('abroad.timiline_item_10'),
      ],
      advantages3: [
        this.$t('abroad.timiline_item_11'),
        this.$t('abroad.timiline_item_12'),
        this.$t('abroad.timiline_item_13'),
        this.$t('abroad.timiline_item_14'),
        this.$t('abroad.timiline_item_15'),
      ],
      advantages4: [
       this.$t('abroad.timiline_item_1'),
        this.$t('abroad.timiline_item_2'),
        this.$t('abroad.timiline_item_3'),
        this.$t('abroad.timiline_item_4'),
        this.$t('abroad.timiline_item_5'),
        this.$t('abroad.timiline_item_6'),
      ]
    }
  },
  computed:{
    timiline_1(){
      return this.$t('abroad.timiline_1')
    }
  }
}
</script>

<style scoped>
.arrow-bottom {
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 15%;
  left: 46%;
}

.studyAbroad {
  right: 5px;
}

.contentOfInfo {
  padding: 30px;
}

.

@media (max-width: 1000px) {
  .contentOfInfo {
    padding: 5px;
  }

  .title-main {
    font-size: 3rem !important;
  }
}
</style>