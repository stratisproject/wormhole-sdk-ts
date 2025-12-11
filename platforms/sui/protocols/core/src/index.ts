import { _platform } from "@xertra/wormhole-sdk-sui";
import { registerProtocol } from "@xertra/wormhole-sdk-connect";
import { SuiWormholeCore } from "./core.js";

registerProtocol("Sui", "WormholeCore", SuiWormholeCore);

export * from "./core.js";
