import type { Network } from "@xertraplatform/wormhole-sdk-connect";
import { ChainContext } from "@xertraplatform/wormhole-sdk-connect";
import type { CosmwasmChains } from "./types.js";

export class CosmwasmChain<
  N extends Network = Network,
  C extends CosmwasmChains = CosmwasmChains,
> extends ChainContext<N, C> {}
