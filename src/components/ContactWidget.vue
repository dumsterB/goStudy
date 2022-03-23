<template>
  <div>
  <div class="buttonContactUs">
    <div v-if="widgets" class=" d-block">
      <v-btn large @click="widgets=!widgets" style="margin-bottom: 5px" fab class="buttonContactitem"><a style="color:white;text-decoration:none; list-style: none" target="_blank" href="https://www.instagram.com/profit.lingua/"><v-icon>mdi-instagram</v-icon></a> </v-btn>
      <br>
      <v-btn large @click="widgets=!widgets" style="margin-bottom: 5px" fab class="buttonContactitem"> <a style="color:white;text-decoration:none; list-style: none"  href="tel:+998 71-203-77-57"><v-icon>mdi-phone</v-icon></a></v-btn>
      <br>
      <v-btn large @click="widgets=!widgets" style="margin-bottom: 5px" fab class="buttonContactitem"><a style="color:white;text-decoration:none; list-style: none"  target="_blank" href="https://www.facebook.com/profitlingua.uz/"><v-icon>mdi-facebook</v-icon></a></v-btn>
    </div>
    <v-btn large @click="widgets=!widgets" style="margin-bottom: 3px" fab :class="[!widgets ? 'buttonContact  animate__animated animate__heartBeat animate__slower animate__infinite' : 'btn_color']" >
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
.btn_color{
 background: #013668
}
</style>