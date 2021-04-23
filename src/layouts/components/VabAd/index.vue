<template>
  <div class="vab-ad">
    <el-carousel
      v-if="adList"
      height="30px"
      direction="vertical"
      :autoplay="true"
      :interval="1500"
      indicator-position="none"
    >
      <el-carousel-item v-for="(item, index) in adList" :key="index">
        <el-tag type="warning">通知</el-tag>
        <a :href="item.url">{{ item.title }}</a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
  // import { getList } from '@/api/ad'
  export default {
    name: 'VabAd',
    data() {
      return {
        nodeEnv: process.env.NODE_ENV,
        adList: [],
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      async fetchData() {
        // const { data } = await getList()
        const data = [
          { url: 'javascript:void(0);', title: '淘人气分佣后台一级代理' },
          { url: 'javascript:void(0);', title: '淘人气分佣后台二级代理' },
        ]
        this.adList = data
      },
    },
  }
</script>
<style lang="scss" scoped>
  .vab-ad {
    height: 30px;
    padding-right: $base-padding;
    padding-left: $base-padding;
    margin-bottom: -20px;
    line-height: 30px;
    cursor: pointer;

    a {
      color: #999;
    }
  }
</style>
