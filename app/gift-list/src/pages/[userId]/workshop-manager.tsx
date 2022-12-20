import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { WorkshopManager } from '@sam/library';

type WorkshopManagerAppProps = {
  userId?: string;
  error?: boolean;
};

const WorkshopManagerApp = ({ userId, error }: WorkshopManagerAppProps) => {
  const router = useRouter();

  useEffect(() => {
    if (error || !userId) {
      router.push('/404');
    }
  }, []);

  return <WorkshopManager userId={userId} />;
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

  return {
    props: {
      userId,
    },
  };
};
