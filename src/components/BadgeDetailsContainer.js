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
        data:{},
        modalIsOpen:false
    };

    componentDidMount(){
        this.fetchData();
    }
    handleCloseModal = e =>{

            this.setState({
                modalIsOpen:false
            });
    };
    handleOpenModal = e =>{
        this.setState({
            modalIsOpen:true
        });
    };
    handleDeleteBadge = async e => {
        this.setState({
            loading:true,
            error:null
        });
        try {
          await  api.badges.remove(this.props.match.params.badgeId);
          this.setState({
            loading:false
        });
          this.props.history.push('/badges');
        } catch (error) {
            this.setState({
                loading:false,
                error:error
            });
        }
    };

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
           <BadgeDetails onCloseModal={this.handleCloseModal}
           onOpenModal={this.handleOpenModal}
           modalIsOpen={this.state.modalIsOpen}
           onDeleteBadge={this.handleDeleteBadge}
           badge={this.state.data}/>
        );
    }
}

export default BadgeDetailsContainer ;