import { UrlEditor } from 'components/url-editor';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1>URL Editor</h1>

      <UrlEditor />
    </main>
  );
}
