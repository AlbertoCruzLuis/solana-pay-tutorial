import { PublicKey } from "@solana/web3.js"
import { COUPON_ADDRESS, SHOP_ADDRESS, USDC_ADDRESS } from "../config"

// Your shop wallet address
export const shopAddress = new PublicKey(SHOP_ADDRESS)
// This is the same for everyone
export const usdcAddress = new PublicKey(USDC_ADDRESS)
// This is your token/coupon address
export const couponAddress = new PublicKey(COUPON_ADDRESS)