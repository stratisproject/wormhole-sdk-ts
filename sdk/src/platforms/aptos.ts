import * as _aptos from "@xertra/wormhole-sdk-aptos";
import type { PlatformDefinition } from "../index.js";
import { applyChainsConfigConfigOverrides } from "@xertra/wormhole-sdk-connect";

/** Platform and protocol definitions for Aptos */
const aptos: PlatformDefinition<typeof _aptos._platform> = {
  Address: _aptos.AptosAddress,
  Platform: _aptos.AptosPlatform,
  getSigner: _aptos.getAptosSigner,
  protocols: {
    WormholeCore: () => import("@xertra/wormhole-sdk-aptos-core"),
    TokenBridge: () => import("@xertra/wormhole-sdk-aptos-tokenbridge"),
    CircleBridge: () => import("@xertra/wormhole-sdk-aptos-cctp"),
  },
  getChain: (network, chain, overrides?) =>
    new _aptos.AptosChain(
      chain,
      new _aptos.AptosPlatform(
        network,
        applyChainsConfigConfigOverrides(network, _aptos._platform, {
          [chain]: overrides,
        }),
      ),
    ),
};

export default aptos;
