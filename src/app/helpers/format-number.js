// format-number.js
import { helper } from '@ember/component/helper';

export function formatNumber([number]) {
  return new Intl.NumberFormat().format(number);
}

export default helper(formatNumber);