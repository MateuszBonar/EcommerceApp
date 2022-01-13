import { Component } from 'react';
import { Route } from 'react-router-dom';

const PublicRouting = ({ component: Component, ...rest }): JSX.Element => {
  return <Route {...rest} render={props => <Component {...props} />} />;
};

export default PublicRouting;
