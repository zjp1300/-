<template>
 <div>
   {{row}}
 </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
  
  },
 
  data() {
      return {
       row:this.$route.params.row
      }
  },
  created() {
   
  },
}
</script>

<style lang="scss" scoped>

</style>
