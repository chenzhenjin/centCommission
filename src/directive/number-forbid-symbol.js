/*
 * @Author: chenzhenjin
 * @Email: BrotherStudy@163.com
 * @Date: 2020-12-24 10:37:43
 * @LastEditTime: 2020-12-25 09:33:34
 * @Descripttion: 模块描述
 */
const findEle = (parent, type) => {
  return parent.tagName.toLowerCase() === type
    ? parent
    : parent.querySelector(type)
}
//触发v-modal绑定的input事件，改变data中的数据
const trigger = (el, type) => {
  let event = document.createEvent('HTMLEvents')
  try {
    event.initEvent(type, true, true)
  } catch (error) {
    event = new Event(type, { cancelable: true, bubbles: true })
  }
  el.dispatchEvent(event)
}

export default {
  bind(el, { value }, { data }) {
    // 去掉数字键盘误输入/*-+.
    let regex = /[\/|\*|\-|\+|\.|\`]/g
    el.$input = findEle(el, 'input')
    el.$input.hanlder = function () {
      let val = el.$input.value
      el.$input.value = val.replace(regex, '')
      trigger(el.$input, 'input')
    }
    el.$input.addEventListener('keyup', el.$input.hanlder)
  },
  unbind(el) {
    el.$input.removeEventListener('keyup', el.$input.hanlder)
  },
}
