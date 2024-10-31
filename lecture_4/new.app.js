import sum from "./api/v1/math.js";

import _ from "lodash";
import dayjs from "dayjs";

// console.log(sum(1,1));

console.log(_.chunk(['a', 'b', 'c', 'd', 'more', 'more', 'more'], 2));


console.log(_.compact([0, 1, false, 2, '', 3]));

const date = dayjs('2024-02-30');
console.log(date.format('{YYYY} MM-DDTHH:mm:ss SSS [Z] A'));
const newDate = date.add(1, 'year');

console.log(newDate.format('{YYYY} MM-DDTHH:mm:ss SSS [Z] A'));