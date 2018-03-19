import Util from 'util'

export function getPaymentInfo () {
  return Util.getServer('/api/courseType')
}
