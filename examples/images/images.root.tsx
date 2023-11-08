import { type CodeData } from '~/components/code-demo';
import { Image } from '../../src/components/Image/Image';

const code = `
'use client';

import { Spinner } from 'flowbite-react';

function Component() {
  return (
    <div className="flex w-full">
    <Image
      src="https://images.unsplash.com/photo-1601625463687-25541fb72f62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      alt="this is the description"
    />
    </div>
  );
}
`;

const codeRSC = `
import { Spinner } from 'flowbite-react';

function Component() {
  return (
    <div className="flex w-full">
    <Image
      src="https://images.unsplash.com/photo-1601625463687-25541fb72f62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      alt="this is the description"
    />
    </div>
  );
}
`;

function Component() {
  return (
    <div className="flex w-full">
      <Image
        src="https://images.unsplash.com/photo-1601625463687-25541fb72f62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="this is the description"
      />
    </div>
  );
}

export const root: CodeData = {
  type: 'single',
  code: [
    {
      fileName: 'client',
      language: 'tsx',
      code,
    },
    {
      fileName: 'server',
      language: 'tsx',
      code: codeRSC,
    },
  ],
  githubSlug: 'images/images.root.tsx',
  component: <Component />,
};
