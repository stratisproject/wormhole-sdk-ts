import { registerProtocol } from '@xertraplatform/wormhole-sdk-connect';
import { _platform } from '@xertraplatform/wormhole-sdk-solana';
import { SolanaTBTCBridge } from './bridge.js';

registerProtocol(_platform, 'TBTCBridge', SolanaTBTCBridge);

export * from './bridge.js';
