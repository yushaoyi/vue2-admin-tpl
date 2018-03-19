import { Message, MessageBox } from 'element-ui'
import { TOAST_DURATION } from '@/common/config'

export function toastInfo (msg, duration) {
  Message.info({
    showClose: true,
    message: msg,
    duration: duration || TOAST_DURATION
  })
}

export function toastSuccess (msg, duration) {
  Message.success({
    showClose: true,
    message: msg,
    duration: duration || TOAST_DURATION
  })
}

export function toastError (msg, duration) {
  Message.error({
    showClose: true,
    message: msg,
    duration: duration || TOAST_DURATION
  })
}

export function toastWarning (msg, duration) {
  Message.warning({
    showClose: true,
    message: msg,
    duration: duration || TOAST_DURATION
  })
}

export function confirm (msg, title, customClass) {
  return MessageBox.confirm(msg || '是否确认操作？', title || '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    closeOnClickModal: false,
    customClass: customClass || ''
  })
}
