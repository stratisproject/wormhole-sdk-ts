import type { Layout } from "@xertra/wormhole-sdk-base";

export const payloadIdItem = <ID extends number>(id: ID) =>
  ({
    name: "payloadId",
    binary: "uint",
    size: 1,
    custom: id,
    omit: true,
  } as const satisfies Layout & { readonly name: string });
