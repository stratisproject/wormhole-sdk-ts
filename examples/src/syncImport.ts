// EXAMPLE_SYNC_IMPORT
import { Wormhole } from "@xertraplatform/wormhole-sdk";
import evm from "@xertraplatform/wormhole-sdk/platforms/evm";

const wh = new Wormhole("Mainnet", [evm.Platform]);
console.log(wh.config);
// EXAMPLE_SYNC_IMPORT
