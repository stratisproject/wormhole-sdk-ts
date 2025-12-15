import fs from "fs";
import type { Chain, Network} from "@xertraplatform/wormhole-sdk-connect";
import { Wormhole, chains } from "@xertraplatform/wormhole-sdk-connect";
import { EvmPlatform } from "@xertraplatform/wormhole-sdk-evm";
import { SolanaPlatform } from "@xertraplatform/wormhole-sdk-solana";
import { CosmwasmPlatform } from "@xertraplatform/wormhole-sdk-cosmwasm";
import { AlgorandPlatform } from "@xertraplatform/wormhole-sdk-algorand";

import "@xertraplatform/wormhole-sdk-evm-core";
import "@xertraplatform/wormhole-sdk-evm-tokenbridge";
import "@xertraplatform/wormhole-sdk-evm-cctp";
import "@xertraplatform/wormhole-sdk-evm-portico";

import "@xertraplatform/wormhole-sdk-solana-core";
import "@xertraplatform/wormhole-sdk-solana-tokenbridge";
import "@xertraplatform/wormhole-sdk-solana-cctp";

import "@xertraplatform/wormhole-sdk-cosmwasm-core";
import "@xertraplatform/wormhole-sdk-cosmwasm-tokenbridge";
import "@xertraplatform/wormhole-sdk-cosmwasm-ibc";

import "@xertraplatform/wormhole-sdk-algorand-core";
import "@xertraplatform/wormhole-sdk-algorand-tokenbridge";

type SupportedProtocols = Record<string, Record<string, boolean>>;

function supportedCheck(sp: SupportedProtocols, proto: string, chain: string): string {
  const supported = proto in sp && chain in sp[proto]! ? sp[proto]![chain] : false;
  return supported ? ":white_check_mark:" : ":no_entry_sign:";
}

(async function () {
  const supportedTestnetProtos = getSupportmatrix("Testnet");
  const supportedMainnetProtos = getSupportmatrix("Mainnet");

  const allProtos = new Set([
    ...Object.keys(supportedTestnetProtos),
    ...Object.keys(supportedMainnetProtos),
  ]);

  const rows = ["| Chain | Route | Mainnet | Testnet |", "| -- | -- | -- | -- |"];
  for (const chain of chains) {
    for (const proto of allProtos) {
      const mainnetSupported = supportedCheck(supportedMainnetProtos, proto, chain);
      const testnetSupported = supportedCheck(supportedTestnetProtos, proto, chain);

      rows.push(`| ${chain} | ${proto} | ${mainnetSupported} | ${testnetSupported} |`);
    }
  }
  const supportTable = rows.join("\n");
  fs.writeFileSync("SUPPORT_MATRIX.md", supportTable);
})();

function getSupportmatrix(n: Network) {
  // Setup
  const wh = new Wormhole(n, [EvmPlatform, SolanaPlatform, CosmwasmPlatform, AlgorandPlatform]);

  const resolver = wh.resolver([]);

  const protoSupport: SupportedProtocols = {};
  for (const rc of resolver.routeConstructors) {
    const name = rc.meta.name;
    protoSupport[name] = {};

    const chains = rc.supportedChains(wh.network);
    for (const chain of chains) {
      try {
        const ctx = wh.getChain(chain as Chain);
        protoSupport[name]![chain] = rc.supportedChains(ctx.network).includes(ctx.chain);
      } catch (e) {
        console.log("error on: ", chain);
      }
    }
  }
  return protoSupport;
}
