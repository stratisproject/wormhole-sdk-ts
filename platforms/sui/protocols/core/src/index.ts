import { _platform } from "@xertraplatform/wormhole-sdk-sui";
import { registerProtocol } from "@xertraplatform/wormhole-sdk-connect";
import { SuiWormholeCore } from "./core.js";

registerProtocol("Sui", "WormholeCore", SuiWormholeCore);

export * from "./core.js";
