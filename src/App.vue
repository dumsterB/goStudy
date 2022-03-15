<template>
<div>
  <main  :is="layout"></main>
  <ContactWidget></ContactWidget>
  <GoBackToUp></GoBackToUp>
</div>
</template>

<script>
import ContactWidget from "./components/ContactWidget";
import GoBackToUp from "@/components/GoBackToUp";
export default {
  name: 'App',

  data: () => ({
    //
  }),
  computed:{
    layout(){
      const layoutName = this.$route.meta.layout || 'Default'
      return () => import(`./layouts/${layoutName}.vue`)
    }
  },
  components:{
    ContactWidget,GoBackToUp
  }
};
</script>
<style >

</style>