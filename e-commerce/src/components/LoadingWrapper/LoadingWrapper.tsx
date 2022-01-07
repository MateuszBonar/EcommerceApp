import React, { FC } from 'react';

const LoadingWrapper: FC<{ isLoading: boolean }> = ({ isLoading, children }): JSX.Element => {
  return <>{isLoading ? <div style={{ textAlign: 'center' }}>Loading...</div> : children}</>;
};

export default LoadingWrapper;
