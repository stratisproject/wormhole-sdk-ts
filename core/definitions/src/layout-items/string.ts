import type {
  Layout,
  CustomConversion,
} from "@xertraplatform/wormhole-sdk-base";
import { encoding } from "@xertraplatform/wormhole-sdk-base";

const trimZeros = (arr: Uint8Array) => {
  const i = arr.findIndex((x) => x !== 0);
  return -1 < i ? arr.slice(i) : new Uint8Array([]);
};

export const stringConversion = {
  to: encoding.bytes.decode,
  from: encoding.bytes.encode,
} as const satisfies CustomConversion<Uint8Array, string>;

export const fixedLengthStringItem = (size: number) => ({
  binary: "bytes",
  size,
  custom: {
    to: (val: Uint8Array): string => encoding.bytes.decode(trimZeros(val)),
    from: (val: string): Uint8Array => encoding.bytes.zpad(encoding.bytes.encode(val), size),
  } satisfies CustomConversion<Uint8Array, string>,
} as const satisfies Layout);
