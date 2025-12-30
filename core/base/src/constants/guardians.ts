import type { MapLevels} from './../utils/index.js';
import { constMap, filterIndexes, zip, cartesianRightRecursive } from './../utils/index.js';
import type { Network } from './networks.js';

// prettier-ignore
const guardianKeyAndNameEntries = [[
  "Mainnet", [
    ["0xE38331EE9C9717EC7C5861b20D95A7dD5A8187cd", "Mainnet guardian"],
  ]], [
  "Testnet", [
    ["0x8A96ecF93cb1c7E261eD54902250B75c50AACD5B", "Testnet guardian"]
  ]]
] as const satisfies MapLevels<[Network, string, string]>;

export const [guardianKeys, guardianNames] =
  filterIndexes(zip(cartesianRightRecursive(guardianKeyAndNameEntries)), [1, 2]);

export const guardianNameToKey = constMap(guardianKeyAndNameEntries, [[0, 2], 1]);
export const guardianKeyToName = constMap(guardianKeyAndNameEntries, [1, [0, 2]]);

export const devnetGuardianPrivateKey =
  "cfb12303a19cde580bb4dd771639b0d26bc68353645571a8cff516ab2ee113a0";

// Number of seconds we expect to wait for attestation
// Used for eta calculation in route code
export const guardianAttestationEta = 5;
