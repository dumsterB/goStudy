<template>
<div>
  <v-card dark class="questionFrom">
  <p class="text-h5">Остались вопросы?</p>
    <p>Заполните, пожалуйста, эту простую форму, и мы свяжемся с вами в течение рабочего дня и ответим на все ваши вопросы</p>
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
            v-model="email"
            outlined
            :rules="emailRules"
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

<p>Если вы оставите нам свой телефон,<br> то мы вам позвоним и бесплатно все расскажем.</p>
<div class="d-flex justify-center">

  <a class="serviceButton ">Отправить</a>
</div>

  </v-form>
    </div>

  </v-card>
  <hr class="formHr">
</div>
</template>

<script>
export default {
  name: "FormAndQuestions",
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
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
    validate () {
      this.$refs.form.validate()
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
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