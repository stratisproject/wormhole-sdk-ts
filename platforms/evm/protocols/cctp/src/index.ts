import { registerProtocol } from '@xertraplatform/wormhole-sdk-connect';
import { _platform } from '@xertraplatform/wormhole-sdk-evm';
import { EvmCircleBridge } from './circleBridge.js';
import { EvmAutomaticCircleBridge } from './automaticCircleBridge.js';

registerProtocol(_platform, 'CircleBridge', EvmCircleBridge);
registerProtocol(_platform, 'AutomaticCircleBridge', EvmAutomaticCircleBridge);

export * as ethers_contracts from './ethers-contracts/index.js';
export * from './circleBridge.js';
export * from './automaticCircleBridge.js';
