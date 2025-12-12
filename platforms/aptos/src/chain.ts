import type { Network } from "@xertraplatform/wormhole-sdk-connect";
import { ChainContext } from "@xertraplatform/wormhole-sdk-connect";
import type { AptosChains } from "./types.js";

export class AptosChain<
  N extends Network = Network,
  C extends AptosChains = AptosChains,
> extends ChainContext<N, C> {}
