import type { PublicKeyInitData } from '@solana/web3.js';
import { PublicKey } from '@solana/web3.js';
import { utils } from '@xertraplatform/wormhole-sdk-solana';

export function deriveCustodyKey(
  tokenBridgeProgramId: PublicKeyInitData,
  mint: PublicKeyInitData,
): PublicKey {
  return utils.deriveAddress(
    [new PublicKey(mint).toBuffer()],
    tokenBridgeProgramId,
  );
}
