import type { Network } from "@xertra/wormhole-sdk-connect";
import { ChainContext } from "@xertra/wormhole-sdk-connect";
import type { CosmwasmChains } from "./types.js";

export class CosmwasmChain<
  N extends Network = Network,
  C extends CosmwasmChains = CosmwasmChains,
> extends ChainContext<N, C> {}
