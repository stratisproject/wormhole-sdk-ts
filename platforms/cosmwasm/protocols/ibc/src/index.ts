import { registerProtocol } from "@xertraplatform/wormhole-sdk-connect";
import { _platform } from "@xertraplatform/wormhole-sdk-cosmwasm";
import { CosmwasmIbcBridge } from "./ibc.js";

registerProtocol(_platform, "IbcBridge", CosmwasmIbcBridge);

export * from "./ibc.js";
