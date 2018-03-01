import React from 'react';
import { loggedIn } from '../../actions/UserActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Navbar extends React.Component {
  componentDidMount(){
    this.props.loggedIn()
  }
  render() {
    return (
      <div className="navbar-container">
        <div className="navbar-item navbar-profile-link">
          <div id="navbar-profile-img"><img src={this.props.headshot ? this.props.headshot : "/assets/default-author-headshot.png"} alt="default headshot" /></div>
          <div id="navbar-profile-info">{this.props.signed_in && this.props.first_name && this.props.last_name ? this.props.first_name + " " + this.props.last_name : "Ploni Almoni"}<br />
          {
            ( this.props.signed_in && this.props.twitter) ? 
              <a href={"https://www.twitter.com/" +this.props.twitter}>{"@" + this.props.twitter}</a>
            : 
              "@plonialmoni"
          }
          </div>
        </div>
        <div className="navbar-item navbar-bookmark">
          <div id="navbar-bookmark-img"><img src="/assets/icons/bookmark-icon.png" alt="bookmark icon" /></div>
          <div id="navbar-bookmark-title">My Bookmarks</div>
        </div>
        <div className="navbar-item navbar-sponsors">
          <span id="sponsors-heading"><span id="heart">&hearts;</span>Sponsors<span id="heart">&hearts;</span></span>
          <div id="navbar-sponsor-img"><img src="/assets/sponsors-wanted.png" alt="sponsor wanted" /></div>
          <div id="navbar-sponsor-lead">
            Looking to reach an Anglo audience interested in all things Israel? Consider becoming a sponsor of Rechov Aliyah today!
          </div>
        </div>
        <div className="navbar-item navbar-links">
          <span id="links-heading">Get Around</span>
          <span id="link-item">About</span>
          <span id="link-item">Sponsors</span>
          <span id="link-item">Shop Rechov Aliyah</span>
          <span id="link-item">Privacy Policy</span>
          <span id="link-item">Terms of Use</span>
          <span id="link-item">Code of Conduct</span>
          <span id="link-item">Contact</span>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return ({
    signed_in: state.signed_in,
    email: state.email,
    first_name: state.first_name,
    last_name: state.last_name,
    user_location: state.user_location,
    twitter: state.twitter,
    id: state.id,
    picture: state.picture,
    headshot: state.headshot
  })
}

export default connect(mapStateToProps, { loggedIn })(Navbar);