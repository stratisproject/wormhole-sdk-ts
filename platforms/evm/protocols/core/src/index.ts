import { registerProtocol } from '@xertra/wormhole-sdk-connect';
import { _platform } from '@xertra/wormhole-sdk-evm';
import { EvmWormholeCore } from './core.js';

registerProtocol(_platform, 'WormholeCore', EvmWormholeCore);

export * as ethers_contracts from './ethers-contracts/index.js';
export * from './core.js';
