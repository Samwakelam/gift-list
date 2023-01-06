import { useRouter } from 'next/router';

export interface NavigationService {
  navigate: (location: string) => void;
}

export const useNavigation = (): NavigationService => {
  const router = useRouter();

  const navigate = (location: string) => {
    router.push(location);
  };

  return { navigate };
};
