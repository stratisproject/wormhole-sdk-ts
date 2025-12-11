import { registerProtocol } from '@xertra/wormhole-sdk-connect';
import { _platform } from '@xertra/wormhole-sdk-solana';
import { SolanaTBTCBridge } from './bridge.js';

registerProtocol(_platform, 'TBTCBridge', SolanaTBTCBridge);

export * from './bridge.js';
