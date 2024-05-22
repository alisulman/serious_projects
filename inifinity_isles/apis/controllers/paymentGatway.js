import { Stripe } from "stripe";

const key =
  "sk_test_51PIowqHN5Yok0Vr2ikA1QiY3S37CzImS39JDbGZCk8CyVQqjI0aO3t2J3UsKcTpJsm6SguB7x3eJGUoWhGm9ve0H00YvwnCA4P";
console.log(key);
const stripe = new Stripe(key);

export const PaymentGateway = async (req, res) => {
  try {
    console.log(req.body);
    const params = {
        submit_type : 'pay',
        mode : 'payment',
        payment_method_types: ['card'],
        billing_address_collection: 'auto',
        shipping_options: [
            
        ]
    }
    const session = await stripe.checkout.sessions.create(params)
    res.status(200).json(session.id)
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
