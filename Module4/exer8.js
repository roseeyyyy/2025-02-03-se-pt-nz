<script src="https://cdn.jsdelivr.net/npm/luxon@3.4.4/build/global/luxon.min.js"></script>
const { DateTime, Interval } = luxon

const birthdate = DateTime.fromISO("1998-12-01")
const now = DateTime.now()
const daysBetween = Math.floor(now.diff(birthdate, "days").days)
console.log(`1. Days between: ${daysBetween} days`)

const diff = now.diff(birthdate, ['years', 'months', 'days']).toObject()
console.log(`2. Age: ${Math.floor(diff.years)} years, ${Math.floor(diff.months)} months, and ${Math.floor(diff.days)} days`)


const date1 = DateTime.fromISO("2025-04-01")
const date2 = DateTime.fromISO("2025-04-20")
const closerDate = Math.abs(now.diff(date1).milliseconds) < Math.abs(now.diff(date2).milliseconds)
? date1
: date2;
console.log(`3. Closest date to now: ${closerDate.toISODate()}`);

if (date1 < date2) {
console.log("4. Date 1 is before Date 2");
} else if (date1 > date2) {
console.log("4. Date 1 is after Date 2");
} else {
console.log("4. Date 1 is the same as Date 2");
}

const londonTime = DateTime.now().setZone("Europe/London");
console.log(`5. Current time in London: ${londonTime.toFormat("HH:mm:ss")}`);
