// Concept - Depend on abstractions instead of concrete implementations

/*
Bad practice
Why - OrderService directly depends on EmailService.
Changing the notification method requires modifying OrderService.
*/

class EmailService {
  send(message: string) {
    console.log("Sending email:", message)
  }
}

class OrderService {
  private emailService = new EmailService()

  placeOrder() {
    console.log("Order placed")
    this.emailService.send("Order confirmation")
  }
}



/*
Correct way
*/

interface NotificationService {
  send(message: string): void
}

class EmailService implements NotificationService {
  send(message: string) {
    console.log("Sending email:", message)
  }
}

class SMSService implements NotificationService {
  send(message: string) {
    console.log("Sending SMS:", message)
  }
}

class OrderService {
  constructor(private notification: NotificationService) {}

  placeOrder() {
    console.log("Order placed")
    this.notification.send("Order confirmation")
  }
}



// Usage
const emailService = new EmailService()
const orderService = new OrderService(emailService)
orderService.placeOrder()


// To change notification method:
const smsService = new SMSService()
const orderServiceWithSMS = new OrderService(smsService)