# Blog Agent Usage Guide

The blog agent is an AI-powered tool that refines your blog post drafts and automatically publishes them to your website.

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up your OpenAI API key:**
   ```bash
   # Linux/Mac
   export OPENAI_API_KEY="sk-your-key-here"
   
   # Or create a .env file
   cp .env.example .env
   # Edit .env and add your key
   ```

   Get your API key from: https://platform.openai.com/api-keys

## Usage

### Method 1: Direct text input

```bash
npm run blog-agent -- "I've been thinking about machine learning interpretability lately. The models we build are getting more complex but we're losing sight of why they make certain decisions. This is especially important in healthcare where doctors need to trust the AI recommendations..."
```

### Method 2: From a file

```bash
npm run blog-agent -- --file drafts/my-draft.txt
```

## What the Agent Does

1. **Refines your content:**
   - Fixes grammar and spelling errors
   - Improves clarity, flow, and tone
   - Restructures with proper headings and paragraphs
   - Optimizes for SEO

2. **Analyzes and categorizes:**
   - Determines the best category from:
     - `field-notes` (AI/ML topics)
     - `quiet-thoughts` (personal reflections)
     - `frame-notes` (film, theatre, science, future)
   - Generates 3-5 relevant tags
   - Creates a SEO-friendly meta description

3. **Publishes automatically:**
   - Creates the markdown file in `src/content/blog/`
   - Commits to git with a descriptive message
   - Pushes to GitHub

## Output Example

```
🤖 Starting blog post agent...

📝 Raw input length: 523 characters

🔄 Refining content with OpenAI...

✨ Refinement complete!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Title: Understanding Machine Learning Interpretability
Category: field-notes
Tags: machine-learning, interpretability, ai-safety, healthcare
Slug: understanding-ml-interpretability
Description: Exploring why model interpretability matters as AI systems grow more complex, especially in critical domains like healthcare.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📄 Creating blog post file...
✅ Created: /workspace/src/content/blog/understanding-ml-interpretability.md

📤 Committing and pushing to GitHub...
✅ Successfully published blog post!

🎉 Blog post published successfully!
File: understanding-ml-interpretability.md
URL: https://shahabty.github.io/blog/understanding-ml-interpretability/
```

## Tips

- **Minimum length**: At least 50 characters (aim for 200+ for best results)
- **Draft quality**: The rougher your draft, the more the AI will refine it
- **Voice preservation**: The agent keeps your writing voice while improving clarity
- **Review changes**: Check the generated file before it's pushed (you have a few seconds)
- **Category accuracy**: The AI chooses based on content theme—review to ensure it matches your intent

## Troubleshooting

### "OPENAI_API_KEY environment variable is required"
Set your API key:
```bash
export OPENAI_API_KEY="sk-your-key-here"
```

### "Blog post already exists"
The slug generated matches an existing post. Either:
- Delete the existing file
- Modify your draft to generate a different slug

### Git push fails
Ensure you have:
- Git configured with credentials
- Push access to the repository
- No uncommitted changes blocking the operation

## Examples

### Example 1: Quick thought
```bash
npm run blog-agent -- "Watched Oppenheimer last night. The way Nolan juxtaposes quantum physics with human morality made me think about how we frame ethical questions in AI today. Both require us to grapple with power we might not fully understand."
```

### Example 2: Technical note
```bash
npm run blog-agent -- "Been experimenting with retrieval augmented generation. The key insight: embedding quality matters way more than chunk size. We spent weeks optimizing chunk overlap when we should have focused on the embedding model first. Classic case of optimizing the wrong thing."
```

### Example 3: From a draft file
Create `drafts/my-post.txt`:
```
just some thoughts on transformer attention

attention is all you need they said but actually 
we need way more. context windows, efficiency, 
the quadratic cost is killing us for long sequences.

mamba and other alternatives are interesting but
we're not ready to give up on attention yet
```

Then run:
```bash
npm run blog-agent -- --file drafts/my-post.txt
```

The agent will transform this rough draft into a polished, properly formatted blog post with appropriate category and tags.
