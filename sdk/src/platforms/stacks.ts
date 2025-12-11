import { applyChainsConfigConfigOverrides } from "@xertra/wormhole-sdk-connect";
import type { PlatformDefinition } from "../index.js";
import * as _stacks from "@xertra/wormhole-sdk-stacks";

export const stacks: PlatformDefinition<typeof _stacks._platform> = {
  Address: _stacks.StacksAddress,
  Platform: _stacks.StacksPlatform,
  getSigner: _stacks.getStacksSigner,
  protocols: {
    WormholeCore: () => import("@xertra/wormhole-sdk-stacks-core"),
  },
  getChain: (network, chain, overrides?) =>
    new _stacks.StacksChain(
      chain,
      new _stacks.StacksPlatform(
        network,
        applyChainsConfigConfigOverrides(network, _stacks._platform, {
          [chain]: overrides,
        }),
      ),
    ),
};
export default stacks;
