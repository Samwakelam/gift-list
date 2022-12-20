import { useNavigate } from 'react-router-dom';

export interface NavigationService {
  navigate: (location: string) => void;
}

export const useNavigation = (): NavigationService => {
  const _navigate = useNavigate();

  const navigate = (location: string) => {
    _navigate(location);
  };

  return { navigate };
};
