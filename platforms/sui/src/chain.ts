import type { Network } from "@xertraplatform/wormhole-sdk-connect";
import { ChainContext } from "@xertraplatform/wormhole-sdk-connect";
import type { SuiChains } from "./types.js";

export class SuiChain<
  N extends Network = Network,
  C extends SuiChains = SuiChains,
> extends ChainContext<N, C> {}
