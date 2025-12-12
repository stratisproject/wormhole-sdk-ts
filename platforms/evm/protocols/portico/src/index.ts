import { registerProtocol } from '@xertraplatform/wormhole-sdk-connect';
import { _platform } from '@xertraplatform/wormhole-sdk-evm';
import { EvmPorticoBridge } from './bridge.js';

registerProtocol(_platform, 'PorticoBridge', EvmPorticoBridge);

export * from './bridge.js';
