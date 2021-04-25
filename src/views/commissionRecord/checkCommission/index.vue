<template>
  <div class="">
    查看分佣
    <el-button type="primary" @click="goToDetail">查看详情</el-button>
  </div>
</template>

<script>
  export default {
    name: '',
    components: {},
    props: {},
    data() {
      return {}
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {},
    methods: {
      goToDetail() {
        this.$router.push('/commissionRecord/checkDetail')
      },
    },
  }
</script>

<style lang="scss" scoped></style>
