import React from 'react';
import "./styles/BadgeDetails.css";
import confLogo from '../images/platziconf-logo.svg';
import PageError from './PageError';
import PageLoading from './PageLoading';
import api from '../api';
import Badge from  './Badge';
import { Link } from "react-router-dom";
import DeleteBadgeModal from './DeleteBadgeModal';
import ReactDOM from 'react-dom';
import Modal from './Modal';

function useIncreaseCount(max){
    const[count,setCount]= React.useState(0);
    if(count>max){
        setCount(0);
    }
    return [count,setCount];
}

function BadgeDetails(props){
    const[count,setCount] = useIncreaseCount(4); 
   
    const badge= props.badge;
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
                 <div className="col-6">
                    <Badge firstName={badge.firstName} lastName={badge.lastName} 
                    twitter={badge.twitter} jobTitle={badge.jobTitle} email={badge.email}
                    avatarUrl={badge.avatarUrl}/>
                </div>
                <div className="col-6">
                    <h2>Actions</h2>
                    <button onClick={()=>{
                        setCount(count+1);
                    }} className="btn btn-primary">

                        increase count:{count}
                    </button>
                    <div>
                        <div>
                          
                            <Link to={`/badges/${badge.id}/edit`}>
                            <button className="btn btn-primary  mb-4">Edit</button>
                            </Link>
                        </div>
                        <div>
                           <button onClick={props.onOpenModal}   className="btn btn-danger">Delete</button>

                           <DeleteBadgeModal isOpen={props.modalIsOpen}
                            onClose={props.onCloseModal}
                            onDeleteBadge={props.onDeleteBadge}/> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default BadgeDetails ;