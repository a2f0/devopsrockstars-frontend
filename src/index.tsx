import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import FullScreenMap from './Map';
import Company from './Company';
import Skyline from './Skyline';
import FlexContainerRow from './shared/FlexContainerRow';
import FlexContainerColumn from './styled-components/FlexContainerColumn';
import Contact from './Contact';
import Footer from './Footer';
import FlexMain from './styled-components/FlexMain';
import Header from './Header';
import GlobalStyle from './styled-components/GlobalStyle';
import FlexFullHeightMin from './styled-components/FlexFullHeightMin';

function AppRouter() {
  return (
    <Router>
      <GlobalStyle />
      <FullScreenMap />
      <Route path="/" exact component={Skyline} />
      <FlexContainerRow>
        <FlexFullHeightMin>
          <FlexContainerColumn>
            <Header />
            <FlexMain>
              <FlexContainerColumn>
                <Route path="/company" exact component={Company} />
                <Route path="/contact" component={Contact} />
              </FlexContainerColumn>
            </FlexMain>
            <Footer />
          </FlexContainerColumn>
        </FlexFullHeightMin>
      </FlexContainerRow>
    </Router>
  );
}
ReactDOM.render(<AppRouter />, document.getElementById('©'));
