var React = require('react');

class SearchBar extends React.Component {
  handleQuery (event) {
   this.props.onQuery(event.target.value);
   var a = this.props.onQuery(event.target.value);
   console.log(event.target.value);
  }

  render () {
    return (
      <div className="search-bar">
        <input onChange={this.handleQuery.bind(this)} placeholder="Search" />
      </div>
    )
  }
}

module.exports = SearchBar;
