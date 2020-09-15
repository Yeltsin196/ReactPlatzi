import React from 'react';
import "./styles/BadgeDetails.css";
import confLogo from '../images/platziconf-logo.svg';
import PageError from './PageError';
import PageLoading from './PageLoading';
import api from '../api';
import Badge from  './Badge';
import { Link } from "react-router-dom";
import BadgeDetails from './BadgeDetails';
class BadgeDetailsContainer extends React.Component {

    state={
        loading:true,
        error:null,
        data:{}
    };

    componentDidMount(){
        this.fetchData();
    }

    fetchData = async e=>{
        this.setState({loading:true, error:false});
        try {
            const data = await api.badges.read(this.props.match.params.badgeId);
         
            var name= data.name.split(" ");
            var arrayData={
                id:data.id,
                firstName:name[0],
                lastName:name[1],
                email: data.email,
                jobTitle: data.company.bs,
                twitter: data.username + '22221-7573',
                avatarUrl:
                  'https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon',
            }
          
           this.setState({
                loading:false,
                data:arrayData
            }); 
           
        } catch (error) {
            this.setState({
                loading:false,
                error:error
            }); 
        }
    }
    render() {
         if(this.state.loading){
            return <PageLoading/>
        }
        if(this.state.error){
            return <PageError/>
        } 
       const badge= this.state.data;
        return (
           <BadgeDetails badge={this.state.data}/>
        );
    }
}

export default BadgeDetailsContainer ;