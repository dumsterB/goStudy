<template>
  <div>
    <div class="buttonGoUp" v-show="scY > 500">
      <v-btn class="buttonContact"  v-scroll-to="'#appBar'" style="margin-bottom: 3px"  >
        <v-icon>mdi-arrow-up</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactWidget",
  data(){
    return{
      scTimer: 0,
      scY: 0,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll: function () {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 100);
    },
  },
}
</script>

<style scoped>
.buttonGoUp {
  position: fixed;
  left: 20px;
  bottom: 40px;
  z-index: 999;
}
</style>