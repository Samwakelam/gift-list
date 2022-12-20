import Link from 'next/link';

import themeConfig from '@sam/library';

const page = () => {
  return (
    <ul>
      <li>
        <Link href="/list-manager">List Manager</Link>
      </li>
      <li>
        <Link href="/workshop-manager">Workshop Manager</Link>
      </li>
      <li>
        <Link href="/list-builder">List Builder</Link>
      </li>
      <li>
        <Link href="/gift-studio">Gift Studio</Link>
      </li>
    </ul>
  );
};

export default page;
