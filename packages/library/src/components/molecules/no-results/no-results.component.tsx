import { tw } from 'twind';

import { NoResultsProps } from './no-results.definition';
import { NoResultsIcon } from './_partials/no-results-icon.component';

import * as S from './no-results.styles';

export const NoResults = ({ title, description, children }: NoResultsProps) => {
  return (
    <div className={tw(S.NoResultsCss)}>
      <NoResultsIcon />
      <h2 className={tw(S.TitleCSS)}>{title}</h2>
      <p className={tw(S.DescriptionCSS)}>{description}</p>
      {children}
    </div>
  );
};
