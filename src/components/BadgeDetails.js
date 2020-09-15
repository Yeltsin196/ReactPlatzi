import React from 'react';
import "./styles/BadgeDetails.css";
import confLogo from '../images/platziconf-logo.svg';
import PageError from './PageError';
import PageLoading from './PageLoading';
import api from '../api';
import Badge from  './Badge';
import { Link } from "react-router-dom";
class BadgeDetails extends React.Component {

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
            <div>
                <div className="BadgeDetails__hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                            <img src={confLogo} alt="Logo de la Conferencia" />
                            </div>
                            <div className="col-6 BadgeDetails__hero-attendant-name">
                                <h1>{badge.firstName} {badge.lastName}</h1>  
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                         <div className="col">
                            <Badge firstName={badge.firstName} lastName={badge.lastName} 
                            twitter={badge.twitter} jobTitle={badge.jobTitle} email={badge.email}
                            avatarUrl={badge.avatarUrl}/>
                        </div>
                        <div>
                            <h2>Actions</h2>
                            <div>
                                <div>
                                    <Link to={`/badges/${badge.id}/edit`}>
                                    <button className="btn btn-primary  mb-4">Edit</button>
                                    </Link>
                                </div>
                                <div>
                                   <button className="btn btn-danger">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BadgeDetails;