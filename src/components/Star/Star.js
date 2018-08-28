import React, { Component } from 'react';

class Star extends Component {

    constructor (){
        super();

        this.state = {
            starName: '',//will hold input value from name
            role: '',//will hold input value from role
        };
    }//end constructor

    //will bind input field to starName
    handleNameChange = (event) => {
        this.setState({
           starName: event.target.value
        });
    }
    
    //will bind input field to role
    handleRoleChange = (event) => {
        this.setState({
            role: event.target.value
        })
    }

    //on button click will console log the star's name
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.starName);
    }


    render (){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
               <label>Star Name : 
                   <input 
                   name="starName" 
                   type="text"
                   onChange={this.handleNameChange}/>
                   </label> 
                <label>Star Role: 
                    <input 
                    name="role" 
                    type="text" 
                    onChange={this.handleRoleChange}/>
                    </label>
                <input type="submit" value="Submit" />
                </form>
                <br />
                {this.state.starName} is famous for {this.state.role}.
            </div>
        );
    }
}

export default Star;