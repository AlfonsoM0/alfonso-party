import { EditorVIP } from 'components';
import { getAllVip } from 'firebase';
import type { VIP } from 'firebase/types';

export default async function Page() {
  let vips: VIP[] = [];

  try {
    vips = await getAllVip();
  } catch (error) {
    vips = [];
    console.error(error);
  }

  return (
    <main className="main-normal flex flex-col items-center justify-center">
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
