import React, { FC } from 'react';
import i18next from 'i18next';

const LoadingWrapper: FC<{ isLoading: boolean }> = ({ isLoading, children }): JSX.Element => {
  return (
    <>
      {isLoading ? <div style={{ textAlign: 'center' }}>{i18next.t('inf_loading')}</div> : children}
    </>
  );
};

export default LoadingWrapper;
