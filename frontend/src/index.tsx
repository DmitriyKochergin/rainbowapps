import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import App from 'components/App';
import localization from 'common/localization';
import store from 'common/store';

import 'styles/main.scss';

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider messages={localization.ru} locale="ru">
      {/*use HashRouter for GutHub Pages routing works only for exact match for url, any subdomains will result in 404*/}
      <HashRouter>
        <App/>
      </HashRouter>
    </IntlProvider>
  </Provider>,
  document.getElementById('root'),
);
