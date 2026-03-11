//Concept - Subtypes (or implementations) should be usable without breaking expected behavior

/*
Bad practice
Why - Some birds cannot fly, but the function assumes all birds can.
This breaks the expected behavior.
*/

type Bird = {
  fly: () => void
}

const sparrow: Bird = {
  fly: () => console.log("Flying")
}

const penguin: Bird = {
  fly: () => {
    throw new Error("Penguins cannot fly")
  }
}

const makeBirdFly = (bird: Bird) => {
  bird.fly()
}

makeBirdFly(sparrow) // Works
makeBirdFly(penguin) // Runtime error



/*
Correct way
*/

type FlyingBird = {
  fly: () => void
}

const sparrow: FlyingBird = {
  fly: () => console.log("Flying")
}

const makeBirdFly = (bird: FlyingBird) => {
  bird.fly()
}

makeBirdFly(sparrow) // Works



// Non-flying birds simply don't implement the flying behavior
const penguin = {
  swim: () => console.log("Swimming")
}



// To add a new flying bird:
const eagle: FlyingBird = {
  fly: () => console.log("Soaring")
}