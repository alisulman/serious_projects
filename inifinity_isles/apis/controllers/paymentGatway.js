import { Stripe } from "stripe";

const key =
  "sk_test_51PIowqHN5Yok0Vr2ikA1QiY3S37CzImS39JDbGZCk8CyVQqjI0aO3t2J3UsKcTpJsm6SguB7x3eJGUoWhGm9ve0H00YvwnCA4P";
console.log(key);
const stripe = new Stripe(key);

export const PaymentGateway = async (req, res) => {
  try {
    console.log(req.body);

    const params = {
      submit_type: 'pay',
      mode: 'payment',
      payment_method_types: ['card'],
      billing_address_collection: 'auto',
      shipping_options: [{ shipping_rate: "shr_1PKKLhHN5Yok0Vr2H6fZX8dJ" }],
      line_items: req.body.map((item) => {
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: item.title,
              // images: [item.image], // Fixed to 'images'
            },
            unit_amount: item.price * 100,
          },
          adjustable_quantity: {
            enabled: true,
            minimum: 1
          },
          quantity: item.qty // Fixed typo 'quatity' to 'quantity'
        };
      }),
      success_url: 'http://localhost:5173/success_payment',
      cancel_url: 'http://localhost:5173/cancel_payment'
    };

    const session = await stripe.checkout.sessions.create(params);
    res.status(200).json({ id: session.id });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
