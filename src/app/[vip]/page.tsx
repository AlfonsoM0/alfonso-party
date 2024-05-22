import { getVIP } from 'firebase';
import { redirect } from 'next/navigation';
import { SaveVipUrl } from './SaveVipUrl';
import { revalidateVip } from 'config/revalidate-page';
import { Invitation } from 'components/invitation';
import MainPage from '../page';

export const revalidate = revalidateVip;

export default async function Page({ params }: { params: { vip: string } }) {
  const vip = decodeURIComponent(params.vip);

  try {
    const infoVIP = await getVIP(vip);

    if (!infoVIP) return <MainPage />;

    const { guest, msg, rol } = infoVIP;

    return (
      <>
        <SaveVipUrl vipUrl={params.vip} />
        <Invitation guest={guest} message={msg} rol={rol} />
      </>
    );
  } catch (error) {
    console.error(error);
    redirect('/');
  }
}
