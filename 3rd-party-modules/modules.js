const colors = require("colors")
const figlet = require("figlet")
const dayjs = require("dayjs")
const relativeTime = require("dayjs/plugin/relativeTime");
const validator = require("validator")




const str = "sharath@a.com"
const str1 = "sharath1"

const url = "image1"

console.log(validator.isEmail(str))
console.log(validator.isAlpha(str1))
console.log(validator.isURL(url))

console.log(dayjs().format('{YYYY} MM-DDTHH:mm:ss '))
dayjs.extend(relativeTime)
console.log(dayjs("2025-01-01").fromNow())





// async function change() {
//     const a = await figlet.text("hello world")
//     console.log(a)
// }

// change()

// console.log("hi".green)

// console.log(colors.red("danger"))

// console.log(colors.bgCyan("wow"))

// console.log(colors.rainbow("rainbow"))

// console.log("im error".bgRed)
// console.log("im error".trap)

