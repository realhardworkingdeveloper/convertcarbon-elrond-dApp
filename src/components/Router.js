import React, { memo, Fragment } from "react";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";
import PropsRoute from "../shared/components/PropsRoute";
import Home from "./home/Home";
import useLocationBlocker from "../shared/functions/useLocationBlocker";

import { DappUI, AuthenticatedRoutesWrapper } from '@elrondnetwork/dapp-core';
import '@elrondnetwork/dapp-core/dist/index.css';

const {
  TransactionsToastList,
  SignTransactionsModals,
  NotificationModal,
  DappCorePages: { UnlockPage }
} = DappUI;

const routes = [];

function Router(props) {
  const { selectHome } = props;

  // useLocationBlocker();
  return (
    <AuthenticatedRoutesWrapper
      routes={routes}
      unlockRoute={'/unlock'}
    >
    
      <TransactionsToastList />
      <NotificationModal />
      <SignTransactionsModals className='custom-class-for-modals' />
      <Switch>

        <Route
          exact
          path="/unlock"
          render={(props) => 
            <div style={{marginTop: '150px'}}>
                <UnlockPage loginRoute={
                    props.location.state.callbackUrl === undefined 
                    ? '/' 
                    : props.location.state.callbackUrl
                }/>
            </div>
          }
        />
        
        <PropsRoute
          exact
          path="/"
          component={Home}
          selectHome={selectHome}
          style={{marginTop: '150px'}}
        />

      </Switch>
    </AuthenticatedRoutesWrapper>
  );
}

Router.propTypes = {
  selectHome: PropTypes.func.isRequired,
  selectConnect: PropTypes.func.isRequired,
};

export default memo(Router);
