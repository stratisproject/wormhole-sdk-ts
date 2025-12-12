import { applyChainsConfigConfigOverrides } from "@xertraplatform/wormhole-sdk-connect";
import * as _solana from "@xertraplatform/wormhole-sdk-solana";
import type { PlatformDefinition } from "../index.js";
/** Platform and protocol definitons for Solana */
const solana: PlatformDefinition<typeof _solana._platform> = {
  Address: _solana.SolanaAddress,
  Platform: _solana.SolanaPlatform,
  getSigner: _solana.getSolanaSignAndSendSigner,
  protocols: {
    WormholeCore: () => import("@xertraplatform/wormhole-sdk-solana-core"),
    TokenBridge: () => import("@xertraplatform/wormhole-sdk-solana-tokenbridge"),
    CircleBridge: () => import("@xertraplatform/wormhole-sdk-solana-cctp"),
    TBTCBridge: () => import("@xertraplatform/wormhole-sdk-solana-tbtc"),
  },
  getChain: (network, chain, overrides?) =>
    new _solana.SolanaChain(
      chain,
      new _solana.SolanaPlatform(
        network,
        applyChainsConfigConfigOverrides(network, _solana._platform, { [chain]: overrides }),
      ),
    ),
};
export default solana;
