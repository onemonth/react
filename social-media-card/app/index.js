var person = {
    name: 'Chris Castig',
    location: 'Brooklyn, New York',
    occupation: {
      title: 'Protecting Freedom',
      employer: '@onemonthedu'
    },
    photo: './images/chris-merica.png',
    updates: [
      {
        platform: 'twitter',
        status: 'I\'m happy, hope you\'re happy too!'
      },
      {
        platform: 'twitter',
        status: 'The better the singer\'s voice, the harder it is to hear what they\'re saying'
      },
      {
        platform: 'twitter',
        status: 'Fear makes the wolf look bigger'
      },
      {
        platform: 'facebook',
        status: 'If you\’re working on something that you think is going to get accomplished in this lifetime then you’re not thinking big enough'
      }
    ]
  }


  class Photo extends React.Component {

      render () {

        return (
            <div className="photo">
              <img src={this.props.photo} alt="Photo" />
            </div>
        )

      }
  }


  class Bio extends React.Component {

      render () {

        return(
            <div className="bio">
              <h1 className="name">{this.props.name}</h1>
              <h2 className="location">{this.props.location}</h2>
              <div className="occupation">
                <p>{this.props.occupation.title} at {this.props.occupation.employer}</p>
              </div>
            </div>
        )

      }
  }


    class Updates extends React.Component {

      updates() {

        return this.props.updates.map(function(update, index){

          return (
              <li className={"update " + update.platform} key={index} > 
                {update.status}
              </li>
            )
        });

      }


      render () {

        return(
          <div className="updates">
               <ul>
                  {this.updates()}
               </ul>
          </div>
        )

      }
  }


  class Card extends React.Component {

      render () {

        return(
          <div className="card">
            <Photo photo={person.photo}  /> 
            <Bio name={person.name} location={person.location} occupation={person.occupation} /> 
            <Updates updates={person.updates} /> 
          </div> 
        )

      }

  }

  ReactDOM.render(<Card />,document.getElementById('app')); 