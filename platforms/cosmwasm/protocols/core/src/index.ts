import { registerProtocol } from "@xertra/wormhole-sdk-connect";
import { _platform } from "@xertra/wormhole-sdk-cosmwasm";
import { CosmwasmWormholeCore } from "./core.js";

registerProtocol(_platform, "WormholeCore", CosmwasmWormholeCore);

export * from "./core.js";
