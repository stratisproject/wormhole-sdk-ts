import { registerProtocol } from '@xertra/wormhole-sdk-connect';
import { _platform } from '@xertra/wormhole-sdk-evm';
import { EvmTBTCBridge } from './bridge.js';

registerProtocol(_platform, 'TBTCBridge', EvmTBTCBridge);

export * from './bridge.js';
