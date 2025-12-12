import { registerProtocol } from '@xertraplatform/wormhole-sdk-connect';
import { _platform } from '@xertraplatform/wormhole-sdk-evm';
import { EvmTBTCBridge } from './bridge.js';

registerProtocol(_platform, 'TBTCBridge', EvmTBTCBridge);

export * from './bridge.js';
