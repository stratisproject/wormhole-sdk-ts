import { utils } from '@xertra/wormhole-sdk-solana';
import type { PublicKey, PublicKeyInitData } from '@solana/web3.js';
import type { BN } from '@coral-xyz/anchor';
import type { Chain } from '@xertra/wormhole-sdk-connect';
import { toChainId } from '@xertra/wormhole-sdk-connect';

export interface ForeignContract {
  chain: number;
  address: number[];
  fee: BN;
}

export function deriveForeignContractAddress(
  programId: PublicKeyInitData,
  chainId: Chain,
): PublicKey {
  const chainIdBuf = Buffer.alloc(2);
  chainIdBuf.writeUInt16BE(toChainId(chainId));
  return utils.deriveAddress(
    [Buffer.from('foreign_contract'), chainIdBuf],
    programId,
  );
}
