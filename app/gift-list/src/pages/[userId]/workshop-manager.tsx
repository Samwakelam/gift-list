import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { WorkshopManager } from '@sam/library';
import { Owner } from '@sam/types';

import { getOwner } from '../api/owners/[id]';

type WorkshopManagerAppProps = {
  user?: Owner;
  error?: boolean;
};

const WorkshopManagerApp = ({ user, error }: WorkshopManagerAppProps) => {
  const router = useRouter();

  useEffect(() => {
    if (error || !user) {
      router.push('/404');
    }
  }, []);

  if (!user) return null;
  return <WorkshopManager user={user} />;
};

export default WorkshopManagerApp;

export const getServerSideProps = async ({
  query,
  params,
}: GetServerSidePropsContext): Promise<{
  props: WorkshopManagerAppProps;
}> => {
  if (!params) {
    return { props: { error: true } };
  }

  const userId: string = params.userId as string;

  const response = await getOwner(userId);

  const user = JSON.parse(JSON.stringify(response.json.data))[0];

  return {
    props: {
      user,
    },
  };
};
