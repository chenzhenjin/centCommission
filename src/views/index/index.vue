<template>
  <div class="index-container">
    <div class="content">
      {{ title }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Index',
    data() {
      return {
        title: '',
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      async fetchData() {
        this.title = '首页'
      },
    },
  }
</script>
<style lang="scss" scoped>
  .index-container {
    padding: 0 !important;
    margin: 0 !important;
    background: #f5f7f8 !important;
    .content {
      color: #909399;
      background-color: $base-color-white;
      padding: $base-padding;
      margin-bottom: 15px;
      min-height: 82px;
    }
  }
</style>
