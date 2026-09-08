# Blog Agent - Quick Start

## 1. Install Dependencies

```bash
npm install
```

## 2. Get OpenAI API Key

1. Go to https://platform.openai.com/api-keys
2. Create a new API key
3. Copy the key (starts with `sk-...`)

## 3. Set Environment Variable

### Option A: Export in terminal
```bash
export OPENAI_API_KEY="sk-your-actual-key-here"
```

### Option B: Create .env file
```bash
cp .env.example .env
# Edit .env and add your key
```

## 4. Use the Agent

### Quick Example
```bash
npm run blog-agent -- "I've been thinking about how AI models learn from feedback. The interesting thing is that reinforcement learning with human feedback (RLHF) isn't just about training models, it's about encoding human values into the learning process. This raises deep questions about whose values we're encoding and how biased feedback shapes model behavior."
```

### From a File
```bash
npm run blog-agent -- --file drafts/example-reflection.txt
```

## Expected Output

```
🤖 Starting blog post agent...

📝 Raw input length: 247 characters

🔄 Refining content with OpenAI...

✨ Refinement complete!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Title: Encoding Human Values in AI Through RLHF
Category: field-notes
Tags: rlhf, ai-alignment, machine-learning, ethics
Slug: encoding-human-values-in-ai-through-rlhf
Description: Exploring how reinforcement learning with human feedback shapes AI models and raises questions about bias and value alignment.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📄 Creating blog post file...
✅ Created: /workspace/src/content/blog/encoding-human-values-in-ai-through-rlhf.md

📤 Committing and pushing to GitHub...
[cursor/your-branch abc1234] Add blog post: Encoding Human Values in AI Through RLHF
 1 file changed, 25 insertions(+)
 create mode 100644 src/content/blog/encoding-human-values-in-ai-through-rlhf.md

✅ Successfully published blog post!

🎉 Blog post published successfully!
File: encoding-human-values-in-ai-through-rlhf.md
URL: https://shahabty.github.io/blog/encoding-human-values-in-ai-through-rlhf/
```

## What Happened?

1. ✅ **Refined** your rough draft with better grammar, structure, and style
2. ✅ **Analyzed** content and chose category: `field-notes`
3. ✅ **Generated** relevant tags: `rlhf, ai-alignment, machine-learning, ethics`
4. ✅ **Created** markdown file with proper frontmatter
5. ✅ **Committed** to git with descriptive message
6. ✅ **Pushed** to GitHub automatically

## Tips

- Minimum 50 characters (but aim for 200+ for best results)
- Don't worry about perfection - the AI will refine it
- Your voice and intent are preserved
- Review the generated file before the push completes

## Troubleshooting

### "OPENAI_API_KEY environment variable is required"
```bash
# Make sure you exported it correctly
echo $OPENAI_API_KEY
# Should show your key

# Re-export if needed
export OPENAI_API_KEY="sk-..."
```

### "Blog post already exists"
The generated slug matches an existing post. Either:
- Delete the existing post
- Modify your draft slightly to generate a different slug

### Git push fails
- Check you have push access to the repo
- Ensure git credentials are configured
- Try `git push` manually to diagnose

## Need Help?

See full documentation: [`BLOG_AGENT.md`](./BLOG_AGENT.md)
