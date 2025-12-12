import { registerProtocol } from "@xertraplatform/wormhole-sdk-connect";

import { AptosCircleBridge } from "./circleBridge.js";

registerProtocol("Aptos", "CircleBridge", AptosCircleBridge);
export * from "./circleBridge.js";
