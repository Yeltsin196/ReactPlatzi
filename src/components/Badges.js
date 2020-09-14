import React from 'react';
import {Link} from 'react-router-dom';
import './styles/Badges.css';
import confLogo from '../images/badge-header.svg';
import api from '../api';
import BadgeList from '../components/BadgeList';

class Badges extends React.Component {
    state={
        loading:true,
        error:null,
         data:undefined,
     }
    constructor(props){
       
        super(props);
        console.log('1. constructor');
       
    }
/*

          {
            id: '2de30c42-9deb-40fc-a41f-05e62b5939a7',
            firstName: 'Freda',
            lastName: 'Grady',
            email: 'Leann_Berge@gmail.com',
            jobTitle: 'Legacy Brand Director',
            twitter: 'FredaGrady22221-7573',
            avatarUrl:
              'https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon',
          },
*/ 
    componentDidMount(){
        this.fetchData()
       
    }

    fetchData = async() =>{
        this.setState({
            loading:true,error:null,
        })

        try{
            var data = await api.badges.list();
            const ArrayData=[];
    data.forEach(element => {
                
                var data2= {
                    id: element.id,
                    firstName: element.name,
                    lastName: '',
                    email: element.email,
                    jobTitle: element.company.bs,
                    twitter: element.username+'22221-7573',
                    avatarUrl:
                      'https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon',
                    };
                    ArrayData.push(data2);
               
            });
          this.setState({loading:false, data:ArrayData}); 

        }catch(error){
            this.setState({loading:false,error:error});
        }
    }

    componentDidUpdate(prevProps, prevState){
        /* console.log("5. didUpdate");
        console.log(
           { prevProps:prevProps, prevState:prevState} 
        );
        console.log(
           { props: this.props,state: this.state}
        ); */
    };

    componentWillUnmount(){/* 
        console.log('6. willunmount')
        clearTimeout(this.timeoutId); */
    }

    render() {
        if (this.state.loading === true) {
            return 'Loading...';
          }
     
        return (
            <div>
              
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges_conf-logo" src={confLogo} alt="logo" />
                        </div>
                    </div>
                </div>
                <div className="Badges__container">
                    <div className="Badges__buttons">
                         <Link to="/badges/new" className="btn btn-primary">New Badge</Link>
                    </div>
                </div>

                <div className="Badges__list">
                    <div className="Badges__container">
                    <ul className="list-unstyled">
                         <BadgeList badges={this.state.data}/> 

                        
                    </ul>
                    </div>
                </div>

            </div>

        );
    }
}

export default Badges;