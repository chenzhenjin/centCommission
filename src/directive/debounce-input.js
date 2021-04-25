/*
 * @Author: chenzhenjin
 * @email: BrotherStudy@163.com
 * @Date: 2020-09-09 13:55:55
 * @LastEditTime: 2020-12-23 15:33:17
 * @Descripttion: 防抖输入，等用户输入完成0.5秒后调用函数
 * @notice: 使用时，组件定义了debounce-input，修改该值时，请刷新页面，不然看不到效果
 */
export default {
  //bind解构出value  node解构出data
  bind(el, { value }, { data }) {
    let awaitTime = 0
    if (!Number.isNaN(+data.attrs['debounce-second'])) {
      awaitTime = +data.attrs['debounce-second'] * 1000
    } else {
      console.error('debounce-second type is number or string digit')
    }
    // console.log("debounce-input awaitTime", awaitTime);
    el.handleInput = function (val) {
      if (el.timer) {
        clearTimeout(el.timer)
      }
      el.timer = setTimeout(() => {
        value(val)
      }, awaitTime || 500)
    }
    el.addEventListener('input', el.handleInput)
  },
  unbind(el) {
    el.timer && clearTimeout(el.timer)
    el && el.removeEventListener('input', el.handleInput)
  },
}
