import * as fs from 'fs';
import * as path from 'path';
import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(prompt: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${year}-${month}-${day} ${hours}:${minutes}:00 +0530`;
}

async function createPost() {
  console.log('\n📝 Create New Blog Post\n');
  console.log('='.repeat(40));
  
  const title = await question('Title: ');
  if (!title.trim()) {
    console.log('❌ Title is required');
    rl.close();
    return;
  }
  
  const description = await question('Description (short summary): ');
  
  const categoriesInput = await question('Categories (comma-separated, e.g., "aws,system-design"): ');
  const categories = categoriesInput.split(',').map(c => c.trim()).filter(Boolean);
  
  const tagsInput = await question('Tags (comma-separated, e.g., "tutorial,beginners"): ');
  const tags = tagsInput.split(',').map(t => t.trim()).filter(Boolean);
  
  const scheduleDateInput = await question('Publish date (YYYY-MM-DD, or press Enter for now): ');
  
  let publishDate: Date;
  let isScheduled = false;
  
  if (scheduleDateInput.trim()) {
    publishDate = new Date(scheduleDateInput + 'T09:00:00');
    const now = new Date();
    isScheduled = publishDate > now;
  } else {
    publishDate = new Date();
  }
  
  const slug = slugify(title);
  const datePrefix = `${publishDate.getFullYear()}-${String(publishDate.getMonth() + 1).padStart(2, '0')}-${String(publishDate.getDate()).padStart(2, '0')}`;
  const filename = `${datePrefix}-${slug}.md`;
  
  const folder = isScheduled ? 'blog-drafts/_scheduled' : 'blog-drafts/_posts';
  
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true });
  }
  
  const frontmatter = `---
title: "${title}"
date: ${formatDate(publishDate)}
categories: [${categories.join(', ')}]
tags: [${tags.join(', ')}]
description: "${description}"
image:
  path: /assets/img/posts/${slug}.png
  alt: ${title}
---

## Introduction

Write your introduction here...

## Main Content

Your main content goes here...

### Subheading 1

Content...

### Subheading 2

Content...

## Conclusion

Wrap up your post here...

---

*Have questions? Drop a comment below or [reach out on LinkedIn](https://www.linkedin.com/in/rupesh-tiwari/)!*
`;

  const filepath = path.join(folder, filename);
  fs.writeFileSync(filepath, frontmatter);
  
  console.log('\n✅ Post created successfully!');
  console.log(`📄 File: ${filepath}`);
  console.log(`📅 ${isScheduled ? 'Scheduled for' : 'Publish date'}: ${publishDate.toDateString()}`);
  
  if (isScheduled) {
    console.log('\n💡 This post is scheduled for the future.');
    console.log('   Run `npm run push-blog` to push to your blog repo.');
    console.log('   The GitHub Action will auto-publish it on the scheduled date.');
  } else {
    console.log('\n💡 Run `npm run push-blog` to publish this post now.');
  }
  
  rl.close();
}

createPost().catch(console.error);
