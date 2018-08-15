// export default ({
//   Vue, // the version of Vue being used in the VuePress app
//   options, // the options for the root Vue instance
//   router, // the router instance for the app
//   siteData // site metadata
// }) => {
//   // ...apply enhancements to the app
// }

import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import VueApollo from 'vue-apollo';

const apolloClient = new ApolloClient({
  link: new HttpLink({ uri: 'https://api-useast.graphcms.com/v1/cjj62i3wd02fl01ebw33g0q78/master' }),
  cache: new InMemoryCache(),
  connectToDevTools: true,
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
  errorHandler(error) {
    console.error('Apollo Provider Error', error)
  },
})
	
export default ({
	Vue,
	options,
	router,
	siteData
}) => {
  Vue.use(VueApollo);
	//console.log('options',options);
	options.provide = apolloProvider.provide();
}
