// Concept - Do not force a class to implement methods it doesn't need

/*
Bad practice
Why - SimplePrinter is forced to implement scan and fax
even though it only needs to print.
*/

interface Machine {
  print(): void
  scan(): void
  fax(): void
}

class SimplePrinter implements Machine {
  print() {
    console.log("Printing")
  }

  scan() {
    throw new Error("Not supported")
  }

  fax() {
    throw new Error("Not supported")
  }
}


/*
Correct way
*/

interface Printer {
  print(): void
}

interface Scanner {
  scan(): void
}

interface Fax {
  fax(): void
}

class SimplePrinter implements Printer {
  print() {
    console.log("Printing")
  }
}

class MultiFunctionPrinter implements Printer, Scanner, Fax {
  print() {
    console.log("Printing")
  }

  scan() {
    console.log("Scanning")
  }

  fax() {
    console.log("Faxing")
  }
}