import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { readFileSync, readdirSync } from 'node:fs';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';

const run = notes => spawnSync(process.execPath, [fileURLToPath(new URL('./release-notes.mjs', import.meta.url))], { env: { ...process.env, RELEASE_NOTES: notes }, encoding: 'utf8' });
const dir = new URL('../release-notes/', import.meta.url);
const notes = readFileSync(new URL('0.1.8.md', dir), 'utf8');
test('all corrected historical releases pass the public notes gate', () => {
  for (const file of readdirSync(dir)) assert.equal(run(readFileSync(new URL(file, dir), 'utf8')).status, 0, file);
});
test('rejects internal notes and missing directions or links', () => {
  for (const detail of ['Built from Anyrainel/WSPal', 'Source: 839a05cd5f1f25da69774d53ecf0da49270a055a', 'commit abc1234', 'This is a draft', 'All platform builds passed']) assert.notEqual(run(`${notes}\n${detail}`).status, 0);
  assert.notEqual(run('').status, 0);
  assert.notEqual(run(notes.replaceAll('https://mavori.ai/contact', 'https://example.com')).status, 0);
  assert.notEqual(run(notes.replace(/update|upgrading|upgrade/gi, 'refresh')).status, 0);
});
