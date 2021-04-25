<template>
  <div class="down-container">
    <div class="content">
      <div class="top">
        <el-button type="primary" @click="dialogVisible = true">
          创建下级账号
        </el-button>
      </div>
      <div class="main">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column
            align="center"
            prop="account"
            label="登录账号"
          ></el-table-column>
          <el-table-column
            align="center"
            prop="myRatio"
            label="我方分佣比例"
            width="300"
          >
            <template slot-scope="slotScope">
              <el-input
                v-model="slotScope.row.myRatio"
                v-debounce-input="(event) => tableInput(slotScope, event)"
                debounce-second="0.5"
                placeholder="未设置"
                :disabled="slotScope.row.myRatioDisable"
              ></el-input>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="oppositeRatio"
            label="对方分佣比例"
            width="300"
          >
            <template slot-scope="slotScope">
              <el-input
                v-model="slotScope.row.oppositeRatio"
                placeholder="未设置"
                disabled
              ></el-input>
              <el-button type="text" @click="saveRatio(slotScope)">
                保存
              </el-button>
            </template>
          </el-table-column>
          <el-table-column align="center" label="操作">
            <template slot-scope="slotScope">
              <el-button type="text" @click="editorRatio(slotScope)">
                编辑
              </el-button>
              <el-button type="text" @click="deleteAccount(slotScope)">
                删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <el-dialog
      center
      title="创建下级账号"
      :visible.sync="dialogVisible"
      width="550px"
      @close="dialogClose"
    >
      <el-form ref="form" :model="form" :rules="rules" label-width="120px">
        <el-form-item label="创建下级账号：" prop="account">
          <el-input v-model="form.account"></el-input>
        </el-form-item>
        <el-form-item label="创建密码：" prop="newPassword">
          <el-input v-model="form.newPassword"></el-input>
        </el-form-item>
        <el-form-item label="确认密码：" prop="confirmPassword">
          <el-input v-model="form.confirmPassword"></el-input>
        </el-form-item>
        <p class="inline-center">
          <el-button type="primary" @click="confirmCreate">确定创建</el-button>
          <el-button type="primary" @click="dialogClose">取消创建</el-button>
        </p>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
  import { confirmPasswordValidate } from '@/utils/validator'
  export default {
    name: 'DownManager',
    data() {
      return {
        form: {
          account: '',
          newPassword: '',
          confirmPassword: '',
        },
        rules: {
          account: [
            {
              required: true,
              message: '账号不能为空',
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
        dialogVisible: false,
        tableData: [
          {
            account: '132',
            myRatio: '10',
            myRatioDisable: true,
            oppositeRatio: '20',
          },
          {
            account: '132456',
            myRatio: '15',
            myRatioDisable: true,
            oppositeRatio: '15',
          },
        ],
      }
    },
    created() {
      confirmPasswordValidate.form = this.form
    },
    methods: {
      tableInput({ row, $index }, event) {
        console.log('tableInput', row, event)
        let myRatio = +event.target.value
        this.tableData.splice($index, 1, {
          ...row,
          myRatio: myRatio + '',
          oppositeRatio: 30 - myRatio + '',
          myRatioDisable: false,
        })
        console.log('this.tableData', this.tableData)
      },
      editorRatio({ row, $index }) {
        this.tableData.splice($index, 1, {
          ...row,
          myRatioDisable: false,
        })
      },
      saveRatio({ row, $index }) {
        this.tableData.splice($index, 1, {
          ...row,
          myRatioDisable: true,
        })
      },
      deleteAccount({ row, $index }) {
        this.tableData.splice($index, 1)
      },
      async confirmCreate() {
        const checkResults = await this.$refs.form
          .validate()
          .catch((err) => err)
      },
      dialogClose() {
        this.dialogVisible = false
        this.form = {
          account: '',
          newPassword: '',
          confirmPassword: '',
        }
        this.$nextTick(() => {
          this.$refs.form.clearValidate()
        })
      },
    },
  }
</script>

<style lang="scss" scoped>
  .title {
    font-size: 20px;
    font-weight: bold;
  }
  ::v-deep .el-form {
    width: 500px;
  }
  ::v-deep .el-table .el-input {
    width: 100px;
  }
</style>
