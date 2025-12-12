import { registerProtocol } from '@xertraplatform/wormhole-sdk-connect';
import { _platform } from '@xertraplatform/wormhole-sdk-stacks';
import { StacksWormholeCore } from './core.js';

registerProtocol(_platform, 'WormholeCore', StacksWormholeCore);

export * from './core.js';
