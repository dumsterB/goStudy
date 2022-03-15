<template>
<div>
  <v-card dark class="questionFrom">
  <p class="text-h5">{{$t('formOfQuestions.text')}}</p>
    <p>{{$t('formOfQuestions.text_2')}}</p>
    <div>

  <v-form
      ref="form"
      v-model="valid"
      lazy-validation
  >
    <v-row>
      <v-col cols="12" md="6" sm="12" lg="6" :xs="12">
        <v-text-field
            v-model="name"
            outlined
            dark
            :counter="10"
            :rules="nameRules"
            label="Ваше имя"
            required
        ></v-text-field>
        <v-text-field
            dark
            v-model="number"
            outlined
            :rules="numberRules"
            label="Ваш телефон"
            required
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6" sm="12" lg="6">
        <v-textarea
            outlined
            name="input-7-4"
            label="Вопрос"
            value=""
        ></v-textarea>
      </v-col>
    </v-row>

<div class="d-flex justify-center">

  <a class="serviceButton " @click="handlerDialog">Отправить</a>
</div>

  </v-form>
    </div>

  </v-card>
  <hr class="formHr">
  <QA :dialog.sync="dialog" ></QA>
</div>
</template>

<script>
import QA from './modals/QA'
export default {
  name: "FormAndQuestions",
  components:{
    QA
  },
  data: () => ({
    valid: true,
    dialog:false,
    name: '',
    nameRules: [
      v => !!v || 'Пожалуйста, напишите свое имя',
    ],
    number: '',
    numberRules: [
      v => !!v || 'Пожалуйста, напишите свой номер',
    ],
    select: null,
    items: [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4',
    ],
    checkbox: false,
  }),

  methods: {
    handlerDialog(){
      this.dialog=!this.dialog
    },
  },
}
</script>

<style scoped>
.formHr{
  color: lightgray;
  background: #82888e;
  height: 2px;
  width: 100%;
}
</style>