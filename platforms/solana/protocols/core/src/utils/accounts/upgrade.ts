import type { PublicKey, PublicKeyInitData } from '@solana/web3.js';
import { utils } from '@xertraplatform/wormhole-sdk-solana';

export function deriveUpgradeAuthorityKey(
  wormholeProgramId: PublicKeyInitData,
): PublicKey {
  return utils.deriveAddress([Buffer.from('upgrade')], wormholeProgramId);
}
