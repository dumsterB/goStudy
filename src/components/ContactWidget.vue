<template>
  <div>
  <div class="buttonContactUs">
    <div v-if="widgets" class=" d-block">
      <v-btn large @click="widgets=!widgets" style="margin-bottom: 5px" fab class="buttonContactitem"><v-icon>mdi-instagram</v-icon></v-btn>
      <br>
      <v-btn large @click="widgets=!widgets" style="margin-bottom: 5px" fab class="buttonContactitem"><v-icon>mdi-phone</v-icon></v-btn>
      <br>
      <v-btn large @click="widgets=!widgets" style="margin-bottom: 5px" fab class="buttonContactitem"><v-icon>mdi-facebook</v-icon></v-btn>
    </div>
    <v-btn large @click="widgets=!widgets" style="margin-bottom: 3px" fab :class="[!widgets ? 'buttonContact  animate__animated animate__heartBeat animate__slower animate__infinite' : '']" >
      <v-icon v-if="!widgets">mdi-comment-text-multiple-outline</v-icon>
      <h1 style="color: white" v-else>X</h1>
    </v-btn>
  </div>
  </div>
</template>

<script>
export default {
  name: "ContactWidget",
  data(){
    return{
      widgets:false
    }
  }
}
</script>

<style scoped>

</style>