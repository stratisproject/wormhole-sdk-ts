import { registerProtocol } from "@xertra/wormhole-sdk-connect";

import { SuiCircleBridge } from "./circleBridge.js";

registerProtocol("Sui", "CircleBridge", SuiCircleBridge);
export * from "./circleBridge.js";
export * from "./objects.js";
