'use client';

import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import * as Tabs from '@radix-ui/react-tabs';

export default function Editor() {
  const [markdown, setMarkdown] = useState<string>('# Nuevo Artículo\n\nEscribe aquí tu contenido...');

  return (
    <div className="w-full max-w-4xl mx-auto p-4 border rounded-lg shadow-sm bg-white">
      <Tabs.Root defaultValue="write" className="flex flex-col">
        <Tabs.List className="flex border-b mb-4" aria-label="Editor tabs">
          <Tabs.Trigger
            value="write"
            className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 outline-none"
          >
            Escribir
          </Tabs.Trigger>
          <Tabs.Trigger
            value="preview"
            className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 outline-none"
          >
            Previsualizar
          </Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="write" className="outline-none">
          <textarea
            className="w-full h-[500px] p-4 font-mono text-sm border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            placeholder="Escribe tu contenido en Markdown aquí..."
          />
        </Tabs.Content>

        <Tabs.Content value="preview" className="outline-none">
          <div className="w-full h-[500px] p-4 border rounded-md overflow-auto prose prose-blue max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {markdown}
            </ReactMarkdown>
          </div>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
}
