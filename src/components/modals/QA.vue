<template>
  <div>
    <div class="text-center">
      <v-dialog
          v-model="dialog"
          width="500"
      >
        <v-card>
          <v-card-title class="text-h5 grey lighten-2">
           Ваша заявка принята!
          </v-card-title>

          <v-card-text>
            Спасибо за регистрацию!
            Наши операторы с Вами свяжутся для подтверждения регистрации и ответов на вопросы. С уважением, MILON Health Club
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="primary"
                text
                @click="$emit('update:dialog', false)"
            >
            Понятно
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    dialog:{
      type:Boolean,
      default:true
    }
  },
  data() {
    return {};
  },
  mounted() {
  },
  methods: {},
};
</script>

<style lang="scss" scoped>

</style>