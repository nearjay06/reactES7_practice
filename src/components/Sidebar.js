import React from 'react';
import Nav from './Navbar'

// function Side(){

class Side extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:"joan"
        }
    }

    render(){
        console.log(this.state,"state");
        
        return(

            <div className="menu">
                <Nav studentName={this.state.name}/>
                    <p >This is the sidebar.</p>
                                
                <div className="unordered">
                <ul>
                    <li><a href="/">Type of Cats</a></li>
                    <li><a href="/">Prices</a></li>
                    <li><a href="/">Contact Us</a></li>
                
                </ul>
                </div>
            
            </div>
        
        );
        }
}

export default Side;