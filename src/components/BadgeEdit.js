import React from 'react';

import './styles/BadgeEdit.css';
import header from '../images/badge-header.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/Badgeform';
import api from '../api';
class BadgeEdit extends React.Component {
  state = {
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
    },
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async e => {
    this.setState({
      loading: true,
      error: null
    })
    try {
      const data = await api.badges.read(this.props.match.params.badgeId);
      var name = data.name.split(" ");

      var arrayData = {
        firstName: name[0],
        lastName: name[1],
        email: data.email,
        jobTitle: data.company.bs,
        twitter: data.username + '22221-7573',
        avatarUrl:
          'https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon',


      };
      this.setState({
        loading: false,
        form: arrayData
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error
      });
    }
  }

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({
      loading: true,
      error: null
    })
    try {
      var arrayData = {
        name: this.state.form.name,
        email: this.state.form.email

      }

      await api.badges.update(this.props.match.params.badgeId, arrayData);
      this.setState({
        loading: false
      });
      this.props.history.push('/badges');
    } catch (error) {
      this.setState({
        loading: false,
        error: error
      });
    }
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <div>

        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                twitter={this.state.form.twitter}
                jobTitle={this.state.form.jobTitle}
                email={this.state.form.email}
                avatarUrl="https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon"
              />
            </div>

            <div className="col-6">
              <h1>Edit Attendant</h1>
              <BadgeForm onSubmit={this.handleSubmit}
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeEdit;