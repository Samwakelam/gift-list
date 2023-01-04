import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { ListManager } from '@sam/library';
import { Workshop } from '@sam/types';
import { getWorkshop } from 'src/pages/api/workshops/[id]';

type ListManagerAppProps = {
  workshop?: Workshop;
  error?: boolean;
};

const ListManagerApp = ({ workshop, error }: ListManagerAppProps) => {
  const router = useRouter();

  useEffect(() => {
    if (error || !workshop) {
      router.push('/404');
    }
  }, []);
  if (!workshop) return null;
  return <ListManager workshop={workshop} />;
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

  const response = await getWorkshop(workshopId);

  const workshop = JSON.parse(JSON.stringify(response.json.data))[0];

  return {
    props: {
      workshop,
    },
  };
};
