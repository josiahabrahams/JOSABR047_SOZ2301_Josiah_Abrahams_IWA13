let state = 'idle'
let user = null
let calculated = '1'

// Only allowed to change below


const  logCalc = () => { //fixed arrow function sytax
    const isString = typeof calculated === 'string'
    const calculatedAsNumber = isString ? +calculated /*used a unary */ : calculated
   
   calculated =calculatedAsNumber + 1 //fixed === to =
      
}

const calcUser = () => {//fixed arrow function sytax
     logCalc()//called logCalc by using : ()
  if (calculated > 2) user = 'John'
  if (calculated > 2) state = 'requesting'
  if (calculated > 3) state = 'idle'
}

const checkUser = () => {
	if (user && state === 'requesting') {
		console.log(`User: ${user} (${calculated})`)
	}
}

// Only allowed to change code above

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()