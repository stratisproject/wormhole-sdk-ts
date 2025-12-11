// EXAMPLE_SYNC_IMPORT
import { Wormhole } from "@xertra/wormhole-sdk";
import evm from "@xertra/wormhole-sdk/platforms/evm";

const wh = new Wormhole("Mainnet", [evm.Platform]);
console.log(wh.config);
// EXAMPLE_SYNC_IMPORT
