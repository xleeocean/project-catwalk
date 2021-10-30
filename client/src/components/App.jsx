import React from 'react';
import QuestionList from './questions/QuestionList.jsx';
import RelatedProducts from './related_products/RelatedProducts.jsx';
import ReviewMain from './review/reviewmain/ReviewMain.jsx';

// Import sampleData for testing purposes
// Related Products
import sampleProductIdData from '../assets/related_products/sampleProductIdData.js'

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currentProduct: {},
      // sample data for current product retrieved by id
      tempCurrentProduct: {sampleProductIdData},
      // shared component for Overview & Outfit
      tempOutfitList: []
    };
  }

  render () {

    return (
      <div>
        <h1> react is running </h1>
        <div className='overview-container'>Overview Goes Here</div>
        <RelatedProducts outfitIdList={this.state.tempOutfitList}/>
        <QuestionList />
        <div id='review'>Review Goes Here</div>
        <ReviewMain />
      </div>
    )
  }
}

export default App;