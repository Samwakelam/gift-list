import { ListBuilder } from '@sam/library';
import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

type ListBuilderAppProps = {
  listId?: string;
  error?: boolean;
};

const ListBuilderApp = ({ listId, error }: ListBuilderAppProps) => {
  const router = useRouter();

  useEffect(() => {
    if (error || !listId) {
      router.push('/404');
    }
  }, []);

  return <ListBuilder listId={listId} />;
};

export default ListBuilderApp;

export const getServerSideProps = async ({
  query,
  params,
}: GetServerSidePropsContext): Promise<{
  props: ListBuilderAppProps;
}> => {
  if (!params) {
    return { props: { error: true } };
  }

  const listId: string = params.listId as string;

  return {
    props: {
      listId,
    },
  };
};
