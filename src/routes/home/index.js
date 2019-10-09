/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '../../components/Layout';
import Loadable from 'react-loadable';
// const Home = Loadable({
// 	loader: () => import('./Home'),
// 	loading() {
// 		return <div>Loading...</div>
// 	}
// })
 import Home from './Home';


function action() {
  let config={};
  config.pagename="home";
 
  return {
    chunks: ['home'],
    title: 'Web Developer Delhi',
    component: (
      <Layout>
        <Home config={config} />
       </Layout>
    ),
  };
}

export default action;
