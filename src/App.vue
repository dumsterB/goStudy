<template>
<div>
  <main  :is="layout"></main>
  <ContactWidget></ContactWidget>
</div>
</template>

<script>
import ContactWidget from "./components/ContactWidget";
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
    ContactWidget
  }
};
</script>
<style >

</style>