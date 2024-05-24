'use client';

import { useEffect, useState } from 'react';
import { useVipUrlState } from 'hooks';
import { useShowNavState } from 'hooks';
import { GuestNav } from 'components/guest-nav';
import { VIP } from 'firebase/types';
import { getAllVip } from 'firebase';

export function SaveVipUrl({ vipUrl }: { vipUrl: string }) {
  const { setVipUrl, setIsOrganizer } = useVipUrlState();
  const { isShowNav } = useShowNavState();

  useEffect(() => {
    setVipUrl(vipUrl);
    getAllVip()
      .then((vips) => {
        const findVip = vips.find((vip) => vip.guest === decodeURIComponent(vipUrl));
        if (findVip) {
          const isOrganizer = findVip.rol.toLowerCase().includes('organizador');
          setIsOrganizer(isOrganizer);
          console.log('isOrganizer', isOrganizer);
        }
      })
      .catch(console.error);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isShowNav) return <GuestNav />;
  return <></>;
}
