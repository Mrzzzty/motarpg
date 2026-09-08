/**
 * 无头测试运行器：esbuild 打包 TS 测试入口 → node 执行。
 * 用法：node scripts/run-headless.mjs src/test/mapTest.ts
 */
import { build } from 'esbuild';
import { mkdirSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import path from 'node:path';

const entry = process.argv[2];
if (!entry) {
  console.error('用法: node scripts/run-headless.mjs <测试入口.ts>');
  process.exit(1);
}

const outfile = path.resolve('.test-out', `${path.basename(entry, '.ts')}.mjs`);
mkdirSync(path.dirname(outfile), { recursive: true });

await build({
  entryPoints: [path.resolve(entry)],
  bundle: true,
  format: 'esm',
  platform: 'node',
  target: 'node18',
  outfile,
  logLevel: 'silent',
});

await import(pathToFileURL(outfile).href);
