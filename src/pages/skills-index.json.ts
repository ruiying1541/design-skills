import { getCollection } from 'astro:content';

export async function GET() {
  const skills = await getCollection('skills');
  const index = skills.map(skill => ({
    name: skill.data.name,
    title: skill.data.title,
    description: skill.data.description,
    category: skill.data.category,
    tags: skill.data.tags,
    ai_trigger: skill.data.ai_trigger ?? [],
    ai_output: skill.data.ai_output ?? '',
    difficulty: skill.data.difficulty ?? null,
    tools: skill.data.tools ?? [],
    related: skill.data.related ?? [],
    updated: skill.data.updated ?? null,
    url: `/skills/${skill.id}`,
    raw_url: `https://raw.githubusercontent.com/[YOUR_USERNAME]/design-skills/main/src/content/skills/${skill.id}.md`,
  }));

  return new Response(JSON.stringify(index, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
