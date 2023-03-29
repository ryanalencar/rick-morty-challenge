import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';

import { CHARACTERS_QUERY_KEY } from '@/constants/query-keys';
import { getAllCharacters } from '@/services/api/character';

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(CHARACTERS_QUERY_KEY, getAllCharacters);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default function Home() {
  const { data } = useQuery({ queryKey: CHARACTERS_QUERY_KEY, queryFn: getAllCharacters });

  return (
    <>
      <h1>Hello World!</h1>
      <pre style={{ color: 'white' }}>
        {JSON.stringify(data, null, 2)}
      </pre>
    </>
  );
}
