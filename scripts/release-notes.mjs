import { writeFileSync } from 'node:fs';

const notes = process.env.RELEASE_NOTES ?? '';
if (!notes.trim() || notes.length > 6000) throw new Error('Provide concise user-facing release notes (up to 6000 characters).');
if (/\bwspal\b|\b[0-9a-f]{7,40}\b|built from|source_sha|this is a draft|packaged-app launch checks|platform builds/i.test(notes)) throw new Error('Remove internal source and build details from release notes.');
for (const url of ['https://mavori.ai/download', 'https://mavori.ai/docs/desktop', 'https://mavori.ai/contact']) {
  if (!notes.includes(`](${url})`)) throw new Error(`Include a user help link: ${url}`);
}
if (!/\b(update|upgrading|upgrade)\b/i.test(notes)) throw new Error('Include update instructions.');
if (process.argv[2]) writeFileSync(process.argv[2], `${notes.trim()}\n`);
