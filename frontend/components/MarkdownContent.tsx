'use client';

interface MarkdownContentProps {
  content: string;
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
  const renderLine = (line: string, index: number) => {
    const trimmedLine = line.trim();

    // Skip HTML comments
    if (trimmedLine.startsWith('<!--') && trimmedLine.endsWith('-->')) {
      return null;
    }

    // Skip horizontal rules at the end (often used before source links)
    if (trimmedLine === '---') {
      return <hr key={index} className="my-8 border-t-2 border-gray-200" />;
    }

    // Headers
    if (trimmedLine.startsWith('### ')) {
      return (
        <h3 key={index} className="text-xl font-bold mt-6 mb-3 text-gray-900">
          {trimmedLine.replace('### ', '')}
        </h3>
      );
    }

    if (trimmedLine.startsWith('## ')) {
      return (
        <h2 key={index} className="text-2xl font-bold mt-8 mb-4 text-gray-900">
          {trimmedLine.replace('## ', '')}
        </h2>
      );
    }

    if (trimmedLine.startsWith('# ')) {
      return null; // Skip main title as it's already rendered separately
    }

    // Blockquote (starts with >)
    if (trimmedLine.startsWith('> ')) {
      return (
        <blockquote key={index} className="border-l-4 border-green-500 pl-4 py-2 my-4 italic text-gray-700 bg-gray-50">
          {trimmedLine.replace('> ', '')}
        </blockquote>
      );
    }

    // List items
    if (trimmedLine.startsWith('- ') || trimmedLine.startsWith('* ')) {
      const content = trimmedLine.replace(/^[-*] /, '');
      return (
        <li key={index} className="ml-6 my-2 text-gray-700">
          {renderInlineFormatting(content)}
        </li>
      );
    }

    // Checkbox items (✓, ✗, etc.)
    if (trimmedLine.match(/^[✓✗☑☐] /)) {
      return (
        <li key={index} className="ml-6 my-2 text-gray-700 list-none">
          {trimmedLine}
        </li>
      );
    }

    // Links in markdown format [text](url)
    if (trimmedLine.includes('**Źródło:**') || trimmedLine.includes('**Data')) {
      return (
        <p key={index} className="my-3 text-sm text-gray-600">
          {renderInlineFormatting(trimmedLine)}
        </p>
      );
    }

    // Regular paragraphs
    if (trimmedLine.length > 0) {
      return (
        <p key={index} className="my-4 text-gray-700 leading-relaxed">
          {renderInlineFormatting(trimmedLine)}
        </p>
      );
    }

    return null;
  };

  const renderInlineFormatting = (text: string) => {
    // Handle links [text](url)
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts: (string | JSX.Element)[] = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(text)) !== null) {
      // Add text before the link
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }

      // Add the link
      parts.push(
        <a
          key={match.index}
          href={match[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 hover:text-green-700 underline"
        >
          {match[1]}
        </a>
      );

      lastIndex = match.index + match[0].length;
    }

    // Add remaining text
    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    // If no links were found, handle bold text
    if (parts.length === 0) {
      return formatBoldText(text);
    }

    // Format bold in the text parts
    return parts.map((part, i) =>
      typeof part === 'string' ? <span key={i}>{formatBoldText(part)}</span> : part
    );
  };

  const formatBoldText = (text: string) => {
    const boldRegex = /\*\*([^*]+)\*\*/g;
    const parts = text.split(boldRegex);

    return parts.map((part, i) =>
      i % 2 === 1 ? <strong key={i} className="font-bold">{part}</strong> : part
    );
  };

  const lines = content.split('\n');

  return (
    <div className="prose prose-lg max-w-none">
      {lines.map((line, index) => renderLine(line, index))}
    </div>
  );
}
