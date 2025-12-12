import { registerProtocol } from "@xertraplatform/wormhole-sdk-connect";

import { SuiCircleBridge } from "./circleBridge.js";

registerProtocol("Sui", "CircleBridge", SuiCircleBridge);
export * from "./circleBridge.js";
export * from "./objects.js";
