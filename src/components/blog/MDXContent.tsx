"use client";

import { useMemo } from "react";

interface MDXContentProps {
  content: string;
}

// Simple markdown-like renderer for blog content
// In production, you might want to use @next/mdx or next-mdx-remote
export function MDXContent({ content }: MDXContentProps) {
  const html = useMemo(() => {
    // Convert markdown to HTML (simple conversion)
    let processed = content
      // Headers
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
      // Bold
      .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
      // Italic
      .replace(/\*(.*)\*/gim, '<em>$1</em>')
      // Links
      .replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2" class="text-primary hover:underline">$1</a>')
      // Line breaks
      .replace(/\n\n/gim, '</p><p>')
      // Lists - simple approach without 's' flag
      .replace(/^\- (.*$)/gim, '<li>$1</li>');
    
    // Handle list wrapping separately
    const listRegex = /(<li>[\s\S]*?<\/li>)/gm;
    processed = processed.replace(listRegex, '<ul>$1</ul>');
    
    // Wrap in paragraph tags
    processed = `<p>${processed}</p>`;
    
    // Clean up empty paragraphs
    processed = processed.replace(/<p><\/p>/g, '');
    processed = processed.replace(/<p>(<h[1-6]>)/g, '$1');
    processed = processed.replace(/(<\/h[1-6]>)<\/p>/g, '$1');
    processed = processed.replace(/<p>(<ul>)/g, '$1');
    processed = processed.replace(/(<\/ul>)<\/p>/g, '$1');
    
    return processed;
  }, [content]);

  return (
    <div 
      className="prose prose-slate max-w-none"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
