var person = {
  name: 'Chris Castig',
  location: 'Brooklyn, New York',
  occupation: {
    title: 'Protecting Freedom',
    employer: '@onemonthedu'
  },
  photo: './images/chris-merica.png',
  updates: [{
    platform: 'twitter',
    status: 'I\'m happy, hope you\'re happy too!'
  }, {
    platform: 'twitter',
    status: 'The better the singer\'s voice, the harder it is to hear what they\'re saying'
  }, {
    platform: 'twitter',
    status: 'Fear makes the wolf look bigger'
  }, {
    platform: 'facebook',
    status: 'If you\’re working on something that you think is going to get accomplished in this lifetime then you’re not thinking big enough'
  }]
};

class Photo extends React.Component {

  render() {

    return React.createElement(
      'div',
      { className: 'photo' },
      React.createElement('img', { src: this.props.photo, alt: 'Photo' })
    );
  }
}

class Bio extends React.Component {

  render() {

    return React.createElement(
      'div',
      { className: 'bio' },
      React.createElement(
        'h1',
        { className: 'name' },
        this.props.name
      ),
      React.createElement(
        'h2',
        { className: 'location' },
        this.props.location
      ),
      React.createElement(
        'div',
        { className: 'occupation' },
        React.createElement(
          'p',
          null,
          this.props.occupation.title,
          ' at ',
          this.props.occupation.employer
        )
      )
    );
  }
}

class Updates extends React.Component {

  updates() {

    return this.props.updates.map(function (update, index) {

      return React.createElement(
        'li',
        { className: "update " + update.platform, key: index },
        update.status
      );
    });
  }

  render() {

    return React.createElement(
      'div',
      { className: 'updates' },
      React.createElement(
        'ul',
        null,
        this.updates()
      )
    );
  }
}

class Card extends React.Component {

  render() {

    return React.createElement(
      'div',
      { className: 'card' },
      React.createElement(Photo, { photo: person.photo }),
      React.createElement(Bio, { name: person.name, location: person.location, occupation: person.occupation }),
      React.createElement(Updates, { updates: person.updates })
    );
  }

}

ReactDOM.render(React.createElement(Card, null), document.getElementById('app'));