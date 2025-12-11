import { applyChainsConfigConfigOverrides } from "@xertra/wormhole-sdk-connect";
import * as _sui from "@xertra/wormhole-sdk-sui";
import type { PlatformDefinition } from "../index.js";
/** Platform and protocol definitions for Sui */
const sui: PlatformDefinition<typeof _sui._platform> = {
  Address: _sui.SuiAddress,
  Platform: _sui.SuiPlatform,
  getSigner: _sui.getSuiSigner,
  protocols: {
    WormholeCore: () => import("@xertra/wormhole-sdk-sui-core"),
    TokenBridge: () => import("@xertra/wormhole-sdk-sui-tokenbridge"),
    CircleBridge: () => import("@xertra/wormhole-sdk-sui-cctp"),
  },
  getChain: (network, chain, overrides?) =>
    new _sui.SuiChain(
      chain,
      new _sui.SuiPlatform(
        network,
        applyChainsConfigConfigOverrides(network, _sui._platform, { [chain]: overrides }),
      ),
    ),
};
export default sui;
