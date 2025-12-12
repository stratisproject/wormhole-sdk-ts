import { registerProtocol } from "@xertraplatform/wormhole-sdk-connect";
import { _platform } from "@xertraplatform/wormhole-sdk-algorand";
import { AlgorandTokenBridge } from "./tokenBridge.js";

registerProtocol(_platform, "TokenBridge", AlgorandTokenBridge);

export * from "./tokenBridge.js";
