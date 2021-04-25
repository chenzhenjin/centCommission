<template>
  <div class="config-container">
    <div class="password">
      <p class="title">密码设置</p>
      <el-form
        ref="passwordForm"
        :model="passwordForm"
        :rules="passwordRules"
        label-width="120px"
      >
        <el-form-item label="账号：">{{ username }}</el-form-item>
        <el-form-item label="旧密码：" prop="oldPassword">
          <el-input v-model="passwordForm.oldPassword"></el-input>
        </el-form-item>
        <el-form-item label="新密码：" prop="newPassword">
          <el-input v-model="passwordForm.newPassword"></el-input>
        </el-form-item>
        <el-form-item label="确认密码：" prop="confirmPassword">
          <el-input v-model="passwordForm.confirmPassword"></el-input>
        </el-form-item>
        <p class="inline-center">
          <el-button type="primary" @click="updatePassword">确认修改</el-button>
        </p>
      </el-form>
    </div>
    <div class="account">
      <p class="title">提现账号设置</p>
      <el-form ref="zfbForm" :model="zfbForm" label-width="120px">
        <el-form-item
          prop="zfbAccount"
          :rules="zfbAccountRules"
          label="支付宝账号："
        >
          <el-input v-model="zfbForm.zfbAccount"></el-input>
        </el-form-item>
        <p class="inline-center">
          <el-button type="primary" @click="bindUpdate">绑定修改</el-button>
        </p>
      </el-form>
    </div>
  </div>
</template>

<script>
  import { confirmPasswordValidate } from '@/utils/validator'
  import { mapGetters } from 'vuex'
  export default {
    name: 'Config',
    data() {
      return {
        passwordForm: {
          oldPassword: '',
          newPassword: '',
          confirmPassword: '',
        },
        passwordRules: {
          oldPassword: [
            {
              required: true,
              message: '旧密码不能为空',
            },
            {
              min: 6,
              max: 16,
              message: '请输入8-16位数字',
            },
            {
              pattern: /^[0-9]*$/,
              message: '请输入数字',
            },
          ],
          newPassword: [
            {
              required: true,
              message: '新密码不能为空',
            },
            {
              min: 8,
              max: 16,
              message: '请输入8-16位数字',
            },
            {
              pattern: /^[0-9]*$/,
              message: '请输入数字',
            },
          ],
          confirmPassword: [
            {
              required: true,
              message: '确认密码不能为空',
            },
            {
              min: 8,
              max: 16,
              message: '请输入8-16位数字',
            },
            {
              pattern: /^[0-9]*$/,
              message: '请输入数字',
            },
            {
              validator: confirmPasswordValidate,
              trigger: ['blur'],
            },
          ],
        },
        zfbForm: { zfbAccount: '' },
        zfbAccountRules: [
          {
            required: true,
            message: '支付宝账号不能为空',
          },
        ],
      }
    },
    computed: {
      ...mapGetters({ username: 'user/username' }),
    },
    created() {
      confirmPasswordValidate.form = this.passwordForm
    },
    methods: {
      async updatePassword() {
        const checkResult = await this.$refs.passwordForm
          .validate()
          .catch((err) => err)
      },
      async bindUpdate() {
        const checkResult = await this.$refs.zfbForm
          .validate()
          .catch((err) => err)
      },
    },
  }
</script>

<style lang="scss" scoped>
  ::v-deep .el-form {
    width: 500px;
  }
  .title {
    font-size: 18px;
    font-weight: bold;
  }
</style>
