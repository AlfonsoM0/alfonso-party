import { ButtonsEditMenu } from 'components/buttons-edit-menu';
import { getAllGuestMenu } from '../../../firebase/get-all-menu';
import { orderAllGuestByDate } from '../../../utils/order-all-guest-by-date';

export default async function Page() {
  const allGuestsMenus = (await getAllGuestMenu()) || [];
  const orderedGuestsMenus = orderAllGuestByDate(allGuestsMenus);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center pt-10">
      <h1>Menu Editor</h1>

      <br />

      <ul>
        {orderedGuestsMenus.map((gm) => (
          <ButtonsEditMenu key={gm.id} guestMenu={gm} />
        ))}
      </ul>
    </main>
  );
}
