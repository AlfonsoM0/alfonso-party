'use client';

import { useEffect } from 'react';
import { useVipUrlState } from '../../hooks/use-vip-url-state';
import { useShowNavState } from 'hooks';
import { GuestNav } from 'components/guest-nav';

export function SaveVipUrl({ vipUrl }: { vipUrl: string }) {
  const { setVipUrl } = useVipUrlState();
  const { isShowNav } = useShowNavState();

  useEffect(() => {
    setVipUrl(vipUrl);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isShowNav) return <GuestNav />;
  return <></>;
}
