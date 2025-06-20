import { helper } from '@ember/component/helper';

export function formatTime([date, options]) {
  if (!date) return '';
  if (options === 'timeOnly') {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }
  return date.toLocaleString([], { 
    weekday: 'short', 
    month: 'short', 
    day: 'numeric',
    hour: '2-digit', 
    minute: '2-digit' 
  });
}

export default helper(formatTime);