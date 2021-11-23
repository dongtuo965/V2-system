<template>
  <div>

  </div>

</template>

<script>
export default {
  name: "TestInterface",
  data() {

  },
  mounted() {
    this.getinfo()
  },
  methods: {
    getinfo() {
      // get请求
      // axios.get('/user', {
      //   params: {
      //     ID: 12345
      //   }
      // })
      //     .then( (response)=> {
      //       console.log(response);
      //     })
      //     .catch( (error)=> {
      //       console.log(error);
      //     });

      // post请求
      axios.post('/user', {
        firstName: 'Fred',
        lastName: 'Flintstone'
      })
          .then( (response)=> {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

    },


  }

}
</script>

<style scoped>

</style>