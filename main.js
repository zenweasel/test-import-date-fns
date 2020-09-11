import * as dateFnsPackage from "date-fns";
console.log(dateFnsPackage);

const { default: { parseISO, format, toDate, isValid } } = dateFnsPackage;

console.log(typeof toDate);
