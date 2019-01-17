var React = require('react');
var Result = require('./result.jsx');

class Results extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      foundProducts: props.products
    }
  }

  componentWillReceiveProps (nextProps) {
    var foundProducts = nextProps.products.filter(product => {
      return product.name.toLowerCase().match(nextProps.query.toLowerCase()) ||
             product.description.toLowerCase().match(nextProps.query.toLowerCase());
    });
    this.setState({
      foundProducts: foundProducts
    });
  }

  render () {
    return (
      <div className="results">
        {this.state.foundProducts.map((product, i) => {
          return (
            <Result product={product} key={i} />
          )
        })}
      </div>
    )
  }
}

module.exports = Results;
