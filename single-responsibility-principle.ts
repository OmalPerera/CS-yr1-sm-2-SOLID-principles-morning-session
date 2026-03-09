//Single Responsibility Principle (SRP)
//concept - One module/function = one responsibility

/*
----------------------------
Bad – one function doing everything
why? - The function handles persistence, email, and analytics.
*/

type User = { name: string }

function createUser(user: User) {
  console.log("Saving user to database")

  console.log(`Sending welcome email to ${user.name}`)

  console.log("Logging analytics event")
}


/*
-----------------------------
Good – separate responsibilities
Each function now has one reason to change.
*/

type User = { name: string }

const saveUser = (user: User) => {
  console.log("Saving user to database")
}

const sendWelcomeEmail = (user: User) => {
  console.log(`Sending welcome email to ${user.name}`)
}

const logAnalytics = (user: User) => {
  console.log("Logging analytics event")
}



