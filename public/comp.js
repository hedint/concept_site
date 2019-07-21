window.comp = {
  data() {
    return { loading: false, variable: "blabla" };
  },
  template: `<div v-if="loading">
    <HelloWorld :msg="'MY PARENT MESSAGE'"></HelloWorld>
</div>`,
  created() {
    load_script("./myLib.umd.min.js").then(() => {
      this.loading = true;
    });
  }
};