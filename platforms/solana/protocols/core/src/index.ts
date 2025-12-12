import { _platform } from '@xertraplatform/wormhole-sdk-solana';
import { registerProtocol } from '@xertraplatform/wormhole-sdk-connect';
import { SolanaWormholeCore } from './core.js';

registerProtocol(_platform, 'WormholeCore', SolanaWormholeCore);

export * from './core.js';
export * from './types.js';
export * as utils from './utils/index.js';
export * from './postMessageLayout.js';
