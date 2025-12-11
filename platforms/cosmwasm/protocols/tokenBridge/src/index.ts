import { registerProtocol } from "@xertra/wormhole-sdk-connect";
import { _platform } from "@xertra/wormhole-sdk-cosmwasm";
import { CosmwasmTokenBridge } from "./tokenBridge.js";

registerProtocol(_platform, "TokenBridge", CosmwasmTokenBridge);

export * from "./tokenBridge.js";
