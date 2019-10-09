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
//import Contact from './Contact';
import Loadable from 'react-loadable';
const Contact = Loadable({
	loader: () => import('./Contact'),
	loading() {
		return <div>Loading...</div>
	}
})
function action() {
  let config={};
  config.pagename="contact";
  
  return {
    chunks: ['contact'],
    title: 'Web Developer Delhi :Send Message',
    component: (
      <Layout>
        <Contact  config={config}/>
       </Layout>
    ),
  };
}

export default action;
