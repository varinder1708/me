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
const Submit = Loadable({
	loader: () => import('./Submit'),
	loading() {
		return <div>Loading...</div>
	}
})
//import Submit from './Submit';




async function action() {


 

  return {
    chunks: ['submit'],
    title: "asdfasd",
 description:"aaaaa",
    component: (
      <Layout>
        <Submit/>
       </Layout>
    ),
  };
}

export default action;
