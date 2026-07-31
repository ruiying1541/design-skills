import { execFileSync } from 'node:child_process';
import { mkdirSync, mkdtempSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { basename, join, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const sourceDir = join(root, 'src', 'content', 'skills');
const outputDir = join(root, 'public', 'skill-downloads');

function readQuotedField(frontmatter, field) {
  const match = frontmatter.match(new RegExp(`^${field}:\\s*["']([^"']+)["']\\s*$`, 'm'));
  if (!match) throw new Error(`Missing quoted ${field} field`);
  return match[1];
}

function escapeYaml(value) {
  return JSON.stringify(value);
}

mkdirSync(outputDir, { recursive: true });

for (const filename of readdirSync(sourceDir).filter((file) => file.endsWith('.md')).sort()) {
  const source = readFileSync(join(sourceDir, filename), 'utf8');
  const match = source.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) throw new Error(`Invalid frontmatter: ${filename}`);

  const [, frontmatter, body] = match;
  const name = readQuotedField(frontmatter, 'name');
  const description = readQuotedField(frontmatter, 'description');
  const title = readQuotedField(frontmatter, 'title');
  const stagingRoot = mkdtempSync(join(tmpdir(), 'design-skill-package-'));
  const skillDir = join(stagingRoot, name);
  const zipPath = join(outputDir, `${basename(filename, '.md')}.zip`);

  mkdirSync(skillDir, { recursive: true });
  writeFileSync(
    join(skillDir, 'SKILL.md'),
    [
      '---',
      `name: ${escapeYaml(name)}`,
      `description: ${escapeYaml(description)}`,
      '---',
      '',
      `# ${title}`,
      '',
      body.trim(),
      '',
    ].join('\n'),
  );

  rmSync(zipPath, { force: true });
  execFileSync('/usr/bin/zip', ['-q', '-r', zipPath, name], { cwd: stagingRoot });
  rmSync(stagingRoot, { recursive: true, force: true });
}

console.log(`Packaged ${readdirSync(sourceDir).filter((file) => file.endsWith('.md')).length} Codex skills.`);
