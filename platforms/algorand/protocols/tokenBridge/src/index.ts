import { registerProtocol } from "@xertra/wormhole-sdk-connect";
import { _platform } from "@xertra/wormhole-sdk-algorand";
import { AlgorandTokenBridge } from "./tokenBridge.js";

registerProtocol(_platform, "TokenBridge", AlgorandTokenBridge);

export * from "./tokenBridge.js";
