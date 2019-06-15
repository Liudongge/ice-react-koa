import React, { Component, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Grid } from '@alifd/next';
import PageLoading from '../../components/PageLoading';
import { routerData } from '../../routerConfig';
import styles from './index.module.scss';

const { Row, Col } = Grid;
export default class UserLayout extends Component {
  static displayName = 'UserLayout';
  static propTypes = {};
  static defaultProps = {};

  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }

  render() {
    return (
      <div className={styles.container}>
        <Row wrap>
          <Col l="12">
            <div className={styles.containerForget}>
              <div className={styles.logo}>
                <a href="#" className={styles.link}>
                  <img
                    className={styles.logoImg}
                    src={require('./images/SC-logo.png')}
                    alt="logo"
                  />
                </a>
              </div>
              <div className={styles.title}>
                SC <br />
                一站式登陆解决方案
              </div>
              <p className={styles.description}>xxxxxxxxx-team</p>
              <div className={styles.border} />
            </div>
          </Col>
          <Col l="12">
            <div className={styles.content}>
              <Suspense fallback={<PageLoading />}>
                <Switch>
                  {routerData.map((item, index) => {
                    return item.component ? (
                      <Route
                        key={index}
                        path={item.path}
                        component={item.component}
                        exact={item.exact}
                      />
                    ) : null;
                  })}

                  <Redirect exact from="/user" to="/user/loginPage" />
                </Switch>
              </Suspense>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
