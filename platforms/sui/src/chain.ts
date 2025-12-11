import type { Network } from "@xertra/wormhole-sdk-connect";
import { ChainContext } from "@xertra/wormhole-sdk-connect";
import type { SuiChains } from "./types.js";

export class SuiChain<
  N extends Network = Network,
  C extends SuiChains = SuiChains,
> extends ChainContext<N, C> {}
