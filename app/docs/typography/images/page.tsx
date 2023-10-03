import type { Metadata, NextPage } from 'next';
import { DocsContentLayout } from '~/app/components/docs-content-layout';
import ImageContent from './';

export const metadata: Metadata = {
  description:
    'The image component can be used to embed images inside the web page in articles and sections based on multiple styles, sizes, layouts and hover animations',
  title: 'Tailwind CSS Images - Flowbite',
};
const ImagePage: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <ImageContent />
    </DocsContentLayout>
  );
};

export default ImagePage;
