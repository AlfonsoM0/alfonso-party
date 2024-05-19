import { EditorVIP } from 'components/editor-vip';
import { getAllVip } from 'firebase/get-all-vip';
import { VIP } from 'firebase/types';

export default async function Page() {
  let vips: VIP[] = [];

  try {
    vips = await getAllVip();
  } catch (error) {
    vips = [];
    console.error(error);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center pt-10">
      <h1>VIP Editor</h1>

      <EditorVIP />

      <h2 className="mt-10">Ya enviados</h2>
      <div>
        {vips.map((vip) => (
          <EditorVIP key={vip.guest} name={vip.guest} msg={vip.msg} rol={vip.rol} isEdit />
        ))}
      </div>
    </main>
  );
}
