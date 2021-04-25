const confirmPasswordCheck = function (
  rule,
  value,
  callback,
  error = '新密码与确认密码不一致',
  form
) {
  form.newPassword !== form.confirmPassword
    ? callback(new Error(error))
    : callback()
}

const newValidate = function (fn) {
  return function () {
    fn(
      arguments[0],
      arguments[1],
      arguments[2],
      this.validator.error,
      this.validator.form
    )
  }
}
export const confirmPasswordValidate = newValidate(confirmPasswordCheck)
