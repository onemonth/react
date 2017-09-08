'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function FormattedDate(props) {
  return React.createElement(
    'h2',
    null,
    'It is ',
    props.date.toLocaleTimeString(),
    '.'
  );
}

var Clock = function (_React$Component) {
  _inherits(Clock, _React$Component);

  function Clock(props) {
    _classCallCheck(this, Clock);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = { date: new Date() };
    return _this;
  }

  Clock.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    this.timerID = setInterval(function () {
      return _this2.tick();
    }, 1000);
  };

  Clock.prototype.componentWillUnmount = function componentWillUnmount() {
    clearInterval(this.timerID);
  };

  Clock.prototype.tick = function tick() {
    this.setState({
      date: new Date()
    });
  };

  Clock.prototype.render = function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        null,
        'Hello, world!'
      ),
      React.createElement(FormattedDate, { date: this.state.date })
    );
  };

  return Clock;
}(React.Component);

ReactDOM.render(React.createElement(Clock, null), document.getElementById('root'));