import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { ListManager } from '@sam/library';

type ListManagerAppProps = {
  workshopId?: string;
  error?: boolean;
};

const ListManagerApp = ({ workshopId, error }: ListManagerAppProps) => {
  const router = useRouter();

  useEffect(() => {
    if (error || !workshopId) {
      router.push('/404');
    }
  }, []);

  return <ListManager workshopId={workshopId} />;
};

export default ListManagerApp;

export const getServerSideProps = async ({
  query,
  params,
}: GetServerSidePropsContext): Promise<{
  props: ListManagerAppProps;
}> => {
  if (!params) {
    return { props: { error: true } };
  }

  const workshopId: string = params.workshopId as string;

  return {
    props: {
      workshopId,
    },
  };
};
