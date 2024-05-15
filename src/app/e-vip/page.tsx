'use client';

import { EditorVIP } from 'components/editor-vip';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1>VIP Editor</h1>

      <EditorVIP />
    </main>
  );
}
