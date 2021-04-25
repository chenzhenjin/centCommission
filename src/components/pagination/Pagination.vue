<template>
  <el-row
    v-if="page.total > paginationLimit"
    class="yushu-pagination"
    type="flex"
    :justify="justify"
  >
    <el-pagination
      :current-page.sync="page.pageNo"
      :page-size.sync="page.pageSize"
      :page-sizes="pageSizes"
      :total="page.total"
      :layout="layout"
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"
    ></el-pagination>
  </el-row>
</template>

<script>
  export default {
    name: 'YPagination',
    props: {
      page: {
        type: Object,
        default: () => {
          return {
            pageNo: 1,
            pageSize: 10,
            total: 10,
          }
        },
      },
      paginationLimit: {
        type: Number,
        default: 10,
      },
      pageSizes: {
        type: Array,
        default: () => [10, 20, 50],
      },
      layout: {
        type: String,
        default: 'total, sizes, prev, pager, next, jumper',
      },
      justify: {
        type: String,
        default: 'center',
      },
    },
    methods: {
      handleCurrentChange() {
        this.$emit('current-change')
      },
      handleSizeChange() {
        this.$emit('size-change')
      },
    },
  }
</script>

<style lang="scss" scoped>
  .yushu-pagination {
    margin: 20px 50px 0;
  }
</style>
