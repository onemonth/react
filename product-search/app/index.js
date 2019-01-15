var React = require('react');
var ReactDOM = require('react-dom');
var Search = require('./components/search.jsx');
var products = require('./products.js');

ReactDOM.render(<Search products={products} />, document.getElementById('app'));
