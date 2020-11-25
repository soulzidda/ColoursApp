class CheckoutService {
  paid() {
    try {
      setTimeout(() => console.log('paid'), 3000);
    } catch (error) {
      throw error('Unable to create payment with stripe');
    }
  }
}

export const checkoutService = new CheckoutService();
