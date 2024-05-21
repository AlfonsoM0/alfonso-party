'use client';

import Link from 'next/link';
import { useShowNavState, useVipUrlState } from 'hooks';
import { useEffect } from 'react';

export function GuestNav() {
  const { setShowNav } = useShowNavState();
  const { vipUrl } = useVipUrlState();

  useEffect(() => {
    setShowNav(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="fixed top-0 left-0 z-[1] flex">
      <div>
        <Link className="btn btn-md btn-ghost rounded-full" type="button" href="/">
          🪩
        </Link>
      </div>

      <div>
        <Link className="btn btn-md btn-ghost rounded-full" type="button" href="/menu">
          🍕 Menu
        </Link>
      </div>

      <div>
        <Link className="btn btn-md btn-ghost rounded-full" type="button" href="/karaoke">
          🎤 Karaoke
        </Link>
      </div>

      {vipUrl ? (
        <div>
          <Link className="btn btn-md btn-ghost rounded-full" type="button" href={`${vipUrl}`}>
            🪪 VIP
          </Link>
        </div>
      ) : null}
    </div>
  );
}
