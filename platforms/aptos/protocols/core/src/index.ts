import { registerProtocol } from "@xertraplatform/wormhole-sdk-connect";
import { AptosWormholeCore } from "./core.js";

registerProtocol("Aptos", "WormholeCore", AptosWormholeCore);

export * from "./core.js";
