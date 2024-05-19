import Link from 'next/link';

export function GuestNav() {
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
    </div>
  );
}
