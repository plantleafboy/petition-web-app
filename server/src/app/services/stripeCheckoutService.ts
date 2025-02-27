import express from 'express';
const app = express();
import dotenv from 'dotenv';
import {sendEmailWithoutParameters} from "../utilities/nodemailerConfig";
import Logger from '../../config/logger';
dotenv.config();
import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_TEST_SECRET_KEY!);


// async function fulfillCheckout(sessionId: string) {
//     // Set your secret key. Remember to switch to your live secret key in production.
//     // See your keys here: https://dashboard.stripe.com/apikeys
//     Logger.info('Fulfilling Checkout Session ' + sessionId);
//
//     // TODO: Make this function safe to run multiple times,
//     // even concurrently, with the same session ID
//
//     // TODO: Make sure fulfillment hasn't already been
//     // disable payment button afterwards for such users? embedded checkout handles?
//     // performed for this Checkout Session if (axios.get().then.. check user.fulfilled from DB).
//
//     // Retrieve the Checkout Session from the API with line_items expanded
//     const checkoutSession = await stripe.checkout.sessions.retrieve(sessionId, {
//         expand: ['line_items'],
//     });
//
//     // Check the Checkout Session's payment_status property
//     // to determine if fulfillment should be performed
//     if (checkoutSession.payment_status !== 'unpaid') {
//         // TODO: Perform fulfillment of the line items
//         try {
//             await sendEmailWithoutParameters()
//         } catch (e) {
//             Logger.error('Error sending email:', e);
//         }
//
//
//         // TODO: Record/save fulfillment status for this Checkout Session save IN USER DB
//     }
// }
