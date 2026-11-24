import { writeFileSync, mkdirSync, existsSync } from 'node:fs';

const entry = "I'd vend you my heart, but it's stuck behind the glass - want to try shaking me instead?";

const dir = '/output';
if (!existsSync(dir)) {
  mkdirSync(dir, { recursive: true });
}

writeFileSync('/output/entry.txt', entry, 'utf8');
process.stdout.write(entry + '\n');
