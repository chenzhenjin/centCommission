/*
 * @Author: chenzhenjin
 * @Email: BrotherStudy@163.com
 * @Date: 2020-12-23 15:37:21
 * @LastEditTime: 2020-12-23 17:21:27
 * @Descripttion: 自定义点击复制指令
 */
import { Message } from 'element-ui'
export default {
  bind(el, { value }) {
    console.log('copy value', value)
    el.$value = value
    el.clickHandler = () => {
      if (!el.$value) {
        console.log('无复制内容')
        return
      }
      let input = document.createElement('input')
      input.value = el.$value
      input.readOnly = 'readOnly'
      input.style.position = 'absoulte'
      input.style.zIndex = '-9999px'
      document.body.appendChild(input)
      input.select()
      let result = document.execCommand('copy')
      if (result) {
        Message({
          message: '复制成功',
          type: 'success',
        })
        document.body.removeChild(input)
      }
    }
    el.addEventListener('click', el.clickHandler)
  },
  componentUpdated(el, { value }) {
    el.$value = value
  },
  unbind(el) {
    el.removeEventListener('click', el.clickHandler)
  },
}
