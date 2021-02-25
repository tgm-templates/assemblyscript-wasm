import {encode as base64} from "https://deno.land/std@0.88.0/encoding/base64.ts";
import {existsSync} from "https://deno.land/std@0.88.0/fs/mod.ts";
import {compress} from "https://deno.land/x/brotli@v0.1.4/mod.ts";

const wasmFile = "build/optimized.wasm";

async function processModTs(wasmFile: string) {
    //encode wasm binary file with lz4
    const wasm = await Deno.readFile(wasmFile);
    const compressed = compress(wasm);
    const encodedWasmText = base64(compressed);
    // process markdown.deno.js for Deno
    const modTsFile = "mod.ts";
    if (existsSync(modTsFile)) {
        let modTsCode = await Deno.readTextFile(modTsFile);
        let begin = modTsCode.indexOf('atob("');
        let first = modTsCode.substring(0, begin + 6);
        let second = modTsCode.substring(begin + 6);
        second = second.substr(second.indexOf('"'));
        modTsCode = first + encodedWasmText + second;
        await Deno.writeTextFile(modTsFile, modTsCode);
    }
    console.log("mod.ts proceeded successfully!")
}

await processModTs(wasmFile);
