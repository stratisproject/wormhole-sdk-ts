import type { Layout, LayoutToType } from "@xertra/wormhole-sdk-base";
import { encoding, serializeLayout } from "@xertra/wormhole-sdk-base";
import { layoutItems } from "@xertra/wormhole-sdk-definitions";
import { APTOS_SEPARATOR } from "@xertra/wormhole-sdk-aptos";

const foreignAddressSeedLayout = [
  { name: "tokenBridgeAddress", ...layoutItems.universalAddressItem },
  { name: "chain", ...layoutItems.chainItem() },
  {
    name: "domainSeparator",
    binary: "bytes",
    custom: encoding.bytes.encode(APTOS_SEPARATOR),
    omit: true,
  },
  { name: "tokenId", ...layoutItems.universalAddressItem },
  // from https://github.com/aptos-labs/aptos-core/blob/25696fd266498d81d346fe86e01c330705a71465/aptos-move/framework/aptos-framework/sources/account.move#L90-L95
  { name: "domainSeparator", binary: "bytes", custom: new Uint8Array([0xff]), omit: true },
] as const satisfies Layout;

export const serializeForeignAddressSeeds = (
  data: LayoutToType<typeof foreignAddressSeedLayout>,
): Uint8Array => serializeLayout(foreignAddressSeedLayout, data);
