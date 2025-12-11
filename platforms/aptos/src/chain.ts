import type { Network } from "@xertra/wormhole-sdk-connect";
import { ChainContext } from "@xertra/wormhole-sdk-connect";
import type { AptosChains } from "./types.js";

export class AptosChain<
  N extends Network = Network,
  C extends AptosChains = AptosChains,
> extends ChainContext<N, C> {}
