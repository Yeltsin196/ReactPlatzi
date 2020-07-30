import React from 'react';
/* import ReactDOM from 'react-dom'; */
import Badgeform from './Badgeform';
import logoconf from '../images/logoconf.png';
import './styles/badge.css';
class Badge extends React.Component {
    state ={
        form:{
            firstName:'',
            lastName:'',
            jobTittle:'',
            email:'',
            twitter:'',

        }
    };
    handleChange = (e)=>{
        
        /* const nextForm  = this.state.form;
        nextForm[e.target.name]=e.target.value; */

        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]:e.target.value
            }
        })
        console.log(this.state);
    }
    render() {
        return (
            <div className="container">
            <div className="row">
            <div className="badge col-6">
                <div className="badge_header">
                    <img src={logoconf} alt="header-img"/>
                </div>
                <div className="badge_section-name">
                <img className="badge-avatar" src={this.props.avatar} alt="imagen-avatar" />
                    <h1>{this.props.firstName} <br />{this.props.lastName}</h1>
                </div>
                <div className="badge_section-info">
                      <h3>{this.props.jobTittle}</h3>
                    <div>{this.props.twitter} </div>
                    
                </div>
                <div className="badge-footer">
                    #Platziconf
                </div>
            </div>
                <Badgeform  onChange={this.handleChange}  formValues={this.state.form}/>
            </div>
            </div>
        )
    }
}

export default Badge;