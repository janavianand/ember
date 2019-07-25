import { helper } from '@ember/component/helper';
import { dateToString } from 'shlack/utils/date';

export default helper(function formatTimestamp(params/*, hash*/) {
  // debugger;
  const [dateVal] = params;
  return dateToString(dateVal)
  // return params;
});
