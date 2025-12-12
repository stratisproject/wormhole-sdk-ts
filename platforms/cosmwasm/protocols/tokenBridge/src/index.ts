import { registerProtocol } from "@xertraplatform/wormhole-sdk-connect";
import { _platform } from "@xertraplatform/wormhole-sdk-cosmwasm";
import { CosmwasmTokenBridge } from "./tokenBridge.js";

registerProtocol(_platform, "TokenBridge", CosmwasmTokenBridge);

export * from "./tokenBridge.js";
