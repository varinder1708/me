/* eslint-disable import/prefer-default-export */

/* eslint-disable import/prefer-default-export */
export const TOI_LIVE_DOMAIN = 'https://timesofindia.indiatimes.com';
export const TOI_DEV_DOMAIN = 'http://toidev.indiatimes.com';
export const TOI_IMAGE_DOMAIN = 'https://static.toiimg.com';
export const TOI_FEED_DOMAIN = 'https://toibnews.timesofindia.indiatimes.com';
export const TOI_SEO_DOMAIN = 'https://timesofindia.indiatimes.com';
export const TOI_SITE_NAME = 'Times Of India';
export const GOOGLE_WEBCACHE_DOMAIN = 'webcache.googleusercontent.com';

export const PAGE_LIMIT = 10;
export const DOMAIN = 'http://localhost:3000';
export const PATH_CATEGORIES = '/directories';
export const PATH_TOLLFREE = '/directories/tollfree';
export const PATH_SHOWPAGE = '/directories/show';
export const PATH_COLLEGES = '/directories/colleges';
export const PATH_RESTAURANTS = '/directories/restaurants';

export const API_RESTAURANTS='http://dir-api.timesofindia.indiatimes.com/post-restaurants-listing/';
export const API_RESTAURANTS_FILTERS='http://dir-api.timesofindia.indiatimes.com/restaurants/get-all-filters'
export const API_ALL_CATEGORY =
  'https://timesofindia.indiatimes.com/dapi/classified?fn=cList';
// export const API_LIST_CATEGORY ='https://timesofindia.indiatimes.com/dapi/classified?fn=cData';
// export const API_LIST_CATEGORY =
//   'http://dir-api.timesofindia.indiatimes.com/post-classified-listing/{page_number}/{limit}/{filter-json-url-encoded}';
  export const API_LIST_CATEGORY =
  'http://dir-api.timesofindia.indiatimes.com/post-classified-listing/';

  //http://dir-api.timesofindia.indiatimes.com/post-classified-listing/
  
  //export const API_DETAIL_CATEGORY =' https://timesofindia.indiatimes.com/dapi/classified?fn=lData';
  export const API_DETAIL_CATEGORY ='http://dir-api.timesofindia.indiatimes.com/classified-details/{company-id}';
  
  export const API_DETAIL_CATEGORY_VIA_SLUG ='http://dir-api.timesofindia.indiatimes.com/category-details-slug/{category_slug}';
  export const API_DETAIL_CLASSIFIED_VIA_SLUG='http://dir-api.timesofindia.indiatimes.com/classified-details-slug/{obj_slug}';

  
export const ARRAY_LIST_CATEGORY = 'category_list';

//export const API_LIST_TOLLFREE ='https://timesofindia.indiatimes.com/dapi/classified?fn=tfCData';
//export const API_LIST_TOLLFREE ='http://dir-api.timesofindia.indiatimes.com/tollfree-listing/{page-no}/{limit}/{filter-json-url-encoded}';
export const API_LIST_TOLLFREE ='http://dir-api.timesofindia.indiatimes.com/post-tollfree-listing';

export const API_CATEGORY_DETAIL_TOLLFREE ='http://dir-api.timesofindia.indiatimes.com/tollfree-category-details/{category-id}';
//nearby api
export const NEARBY_API='http://dir-api.timesofindia.indiatimes.com/nearby-listings/{distance}/{latitude}/{longitude}/{city-name}/{category-name}';
//export const API_DETAIL_TOLLFREE ='https://timesofindia.indiatimes.com/dapi/classified?fn=tflData';
export const API_DETAIL_TOLLFREE ='http://dir-api.timesofindia.indiatimes.com/tollfree-details/{company-id}';

//export const API_CATEGORIES_LIST_TOLLFREE ='https://timesofindia.indiatimes.com/dapi/classified?fn=tfCatList'; //givesall
export const API_CATEGORIES_LIST_TOLLFREE ='http://dir-api.timesofindia.indiatimes.com/tollfree-category-listing';

export const ARRAY_LIST_TOLLFREE = 'tollfree_list';
export const lg=(str,str1,str2)=>
{
//console.log(str);
if(str1){
//console.log(str1);
}
if(str2)
{
//  console.log(str2);
}
}


 //colleges
export const COLLEGES_LIST='http://dir-api.timesofindia.indiatimes.com/colleges-listing/1/10';