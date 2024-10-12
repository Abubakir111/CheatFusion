import { loadStripe } from '@stripe/stripe-js';

// Инициализация Stripe с публичным ключом
const stripePromise = loadStripe(
  'pk_test_51Q4U5gDMZMWnsAfsCtsDIW0GuLRGILw7yG2Z91uJKzZfAaUxUiuM3DbahylEuUzGtZydmZp6UGTnPNk232gdRvyH0085MiBGiV'
);

const CheckoutButton = () => {
  const handleClick = async () => {
    const stripe = await stripePromise;

    // Создайте запрос на Stripe для редиректа на страницу оплаты
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{ price: 'PRICE_ID', quantity: 1 }], // Укажите ID продукта и его количество
      mode: 'payment',
      successUrl: window.location.origin + '/success',
      cancelUrl: window.location.origin + '/cancel'
    });

    if (error) {
      console.error('Error redirecting to checkout:', error);
    }
  };

  return (
    <button role='link' onClick={handleClick}>
      Оплатить через Stripe
    </button>
  );
};

export default CheckoutButton;
