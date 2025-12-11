import { registerProtocol } from '@xertra/wormhole-sdk-connect';
import { _platform } from '@xertra/wormhole-sdk-evm';
import { EvmPorticoBridge } from './bridge.js';

registerProtocol(_platform, 'PorticoBridge', EvmPorticoBridge);

export * from './bridge.js';
