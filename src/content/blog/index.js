import fm from 'front-matter';

const modules = import.meta.glob('./*.md', {
    query: '?raw',
    eager: true,
});

export const posts = Object.entries(modules).map(([path, module]) => {
    const raw = module.default;

    const parsed = fm(raw);

    return {
        slug: path.split('/').pop().replace('.md', ''),
        ...parsed.attributes,
        content: parsed.body,
    };
});