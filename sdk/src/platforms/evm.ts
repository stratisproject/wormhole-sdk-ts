import { applyChainsConfigConfigOverrides } from "@xertraplatform/wormhole-sdk-connect";
import * as _evm from "@xertraplatform/wormhole-sdk-evm";
import type { PlatformDefinition } from "../index.js";

/** Platform and protocol definitions for Evm */
const evm: PlatformDefinition<typeof _evm._platform> = {
  Address: _evm.EvmAddress,
  Platform: _evm.EvmPlatform,
  getSigner: _evm.getEvmSigner,
  protocols: {
    WormholeCore: () => import("@xertraplatform/wormhole-sdk-evm-core"),
    TokenBridge: () => import("@xertraplatform/wormhole-sdk-evm-tokenbridge"),
    PorticoBridge: () => import("@xertraplatform/wormhole-sdk-evm-portico"),
    CircleBridge: () => import("@xertraplatform/wormhole-sdk-evm-cctp"),
    TBTCBridge: () => import("@xertraplatform/wormhole-sdk-evm-tbtc"),
  },
  getChain: (network, chain, overrides?) =>
    new _evm.EvmChain(
      chain,
      new _evm.EvmPlatform(
        network,
        applyChainsConfigConfigOverrides(network, _evm._platform, {
          [chain]: overrides,
        }),
      ),
    ),
};

export default evm;
