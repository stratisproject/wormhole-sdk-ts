import { registerProtocol } from "@xertra/wormhole-sdk-connect";
import { _platform } from "@xertra/wormhole-sdk-cosmwasm";
import { CosmwasmIbcBridge } from "./ibc.js";

registerProtocol(_platform, "IbcBridge", CosmwasmIbcBridge);

export * from "./ibc.js";
