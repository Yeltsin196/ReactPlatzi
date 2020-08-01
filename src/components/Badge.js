import React from 'react';
/* import ReactDOM from 'react-dom'; */
import Badgeform from './Badgeform';
import logoconf from '../images/badge-header.svg';
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
                    <h1>{this.state.form.firstName} <br />{this.state.form.lastName}</h1>
                </div>
                <div className="badge_section-info">
                      <h3>{this.state.form.jobTittle}</h3>
                    <div>{this.state.form.twitter} </div>
                    
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