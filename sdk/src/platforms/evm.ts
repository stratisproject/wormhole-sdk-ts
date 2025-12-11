import { applyChainsConfigConfigOverrides } from "@xertra/wormhole-sdk-connect";
import * as _evm from "@xertra/wormhole-sdk-evm";
import type { PlatformDefinition } from "../index.js";

/** Platform and protocol definitions for Evm */
const evm: PlatformDefinition<typeof _evm._platform> = {
  Address: _evm.EvmAddress,
  Platform: _evm.EvmPlatform,
  getSigner: _evm.getEvmSigner,
  protocols: {
    WormholeCore: () => import("@xertra/wormhole-sdk-evm-core"),
    TokenBridge: () => import("@xertra/wormhole-sdk-evm-tokenbridge"),
    PorticoBridge: () => import("@xertra/wormhole-sdk-evm-portico"),
    CircleBridge: () => import("@xertra/wormhole-sdk-evm-cctp"),
    TBTCBridge: () => import("@xertra/wormhole-sdk-evm-tbtc"),
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
