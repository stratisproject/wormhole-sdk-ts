import { registerProtocol } from "@xertraplatform/wormhole-sdk-connect";
import { _platform } from "@xertraplatform/wormhole-sdk-cosmwasm";
import { CosmwasmWormholeCore } from "./core.js";

registerProtocol(_platform, "WormholeCore", CosmwasmWormholeCore);

export * from "./core.js";
