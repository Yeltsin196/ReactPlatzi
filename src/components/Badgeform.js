import React from 'react';

class Badgeform extends React.Component{
    /* state ={
        jobTittle:"Designer"
    }; */
    /* handleChange = (e)=>{
        
        this.setState({
            [e.target.name]:e.target.value,
        })
        console.log(this.state);
    } */
    HandleClick = (e) =>{
        console.log("Button was clicked");
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        console.log("Form was submitted");
    }

    render(){
        return( 
            <div className="col-6">

            
            <h1>New Attendant</h1>
            <form onSubmit={this.handleSubmit}>
               <div className="form-group">
                    <label htmlFor="">First Name</label>
                    <input onChange={this.props.onChange}
                        value={this.props.formValues.firstName}
                     className="form-control" type="text" name="firstName"/>
               </div>
               <div className="form-group">
                    <label htmlFor="">Last Name</label>
                    <input onChange={this.props.onChange}
                    value={this.props.formValues.lastName}
                     className="form-control" type="text" name="lastName"/>
               </div>
               <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input onChange={this.props.onChange}
                    value={this.props.formValues.email}
                     className="form-control" type="email" name="email"/>
               </div>
               <div className="form-group">
                    <label htmlFor="">Job Tittle</label>
                    <input onChange={this.props.onChange}
                    value={this.props.formValues.jobTittle}
                     className="form-control" type="text" name="jobTittle"/>
               </div>
               <div className="form-group">
                    <label htmlFor="">Twitter</label>
                    <input onChange={this.props.onChange}
                    value={this.props.formValues.twitter}
                     className="form-control" type="text" name="twitter"/>
               </div>
            </form>
            <button onClick={this.HandleClick} type="button" className="btn btn-primary">Save</button>
            </div>
        );
    }
}

export default Badgeform ;