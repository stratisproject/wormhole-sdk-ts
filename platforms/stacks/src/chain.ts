import type { ChainToPlatform, Network } from '@xertraplatform/wormhole-sdk-connect';
import { ChainContext } from '@xertraplatform/wormhole-sdk-connect';
import type { StacksChains } from './types.js';

export class StacksChain<
  N extends Network,
  C extends StacksChains,
> extends ChainContext<N, C, ChainToPlatform<C>> {}
