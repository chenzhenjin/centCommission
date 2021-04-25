<template>
  <div class="user-container">
    <div class="user-wrapper">
      <div class="top">
        <p>账号：{{ username }}</p>
      </div>
      <div class="content">
        <template v-if="level === 1">
          <div class="item">
            <p>
              <span class="text">可提现佣金</span>
              <span class="digit">{{ info.distribution }}</span>
            </p>
            <el-button
              type="primary"
              size="mini"
              @click="$router.push('/userCenter/withdrawManager')"
            >
              提现
            </el-button>
          </div>
          <div class="item">
            <p>
              <span class="text">下级运营数量</span>
              <span class="digit">{{ info.downNum }}</span>
            </p>
            <el-button
              type="primary"
              size="mini"
              @click="$router.push('/userCenter/downManager')"
            >
              添加
            </el-button>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'Home',
    data() {
      return {
        info: {
          distribution: 10,
          downNum: 2,
        },
        level: 1,
      }
    },
    computed: {
      ...mapGetters({
        username: 'user/username',
      }),
    },
    created() {},
    methods: {},
  }
</script>

<style lang="scss" scoped>
  .user-wrapper {
    border: 1px solid $base-color-orange;
    .top {
      font-size: 18px;
      margin: 30px;
    }
    .content {
      margin: 30px;
      .digit {
        margin-left: 20px;
        color: $base-color-orange;
        font-size: 16px;
        font-weight: bold;
      }
    }
    .item {
      display: flex;
      width: 500px;
      margin: 15px;
      justify-content: space-between;
      line-height: 0;
      .text {
        display: inline-block;
        text-align: right;
        width: 100px;
      }
      .digit {
        margin-left: 40px;
      }
    }
  }
  ::v-deep .el-button--primary {
    border-radius: 10px;
    padding: 5px 40px;
  }
</style>
