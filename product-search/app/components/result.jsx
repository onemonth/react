var React = require('react');

class Result extends React.Component {
  displayPrice (price) {
    return (price / 100.0).toFixed(2);
  }

  render () {
    return (
      <div className={"result " + (this.props.product.inStock ? 'in-stock' : 'not-in-stock')}>
        <h2><a href={this.props.product.url}>{this.props.product.name}</a></h2>
        <p>${this.displayPrice(this.props.product.price)}</p>
        <p>{this.props.product.description}</p>
      </div>
    )
  }
}

module.exports = Result;
