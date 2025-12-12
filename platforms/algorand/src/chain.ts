import type { Network } from "@xertraplatform/wormhole-sdk-connect";
import { ChainContext } from "@xertraplatform/wormhole-sdk-connect";
import type { AlgorandChains } from "./types.js";

export class AlgorandChain<
  N extends Network = Network,
  C extends AlgorandChains = AlgorandChains,
> extends ChainContext<N, C> {}
