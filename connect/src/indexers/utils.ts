import { encoding } from "@xertraplatform/wormhole-sdk-base";

export function parseBalance(balance: string | undefined): bigint | null {
  try {
    if (!balance) {
      return null;
    }
    return encoding.bignum.decode(balance.trim());
  } catch {
    return null;
  }
}
