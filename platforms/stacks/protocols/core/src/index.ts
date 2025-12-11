import { registerProtocol } from '@xertra/wormhole-sdk-connect';
import { _platform } from '@xertra/wormhole-sdk-stacks';
import { StacksWormholeCore } from './core.js';

registerProtocol(_platform, 'WormholeCore', StacksWormholeCore);

export * from './core.js';
