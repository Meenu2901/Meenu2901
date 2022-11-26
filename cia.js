import React from "react";
import "./cia.css";
const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
const mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
class PasswordStrength extends React.Component {

    constructor() {
        super();
        this.state = {
            backgroundColor: "#4285F4",
    
        }
        
        this.analyze = this.analyze.bind(this);
    }


    analyze(event) {
        if(strongRegex.test(event.target.value)) {
            this.setState({ backgroundColor: "#0F9D58" });
        } else if(mediumRegex.test(event.target.value)) {
            this.setState({ backgroundColor: "#F4B400" });
        } else {
            this.setState({ backgroundColor: "#DB4437" });
        }
    }

    render() {
        return (
            <div
            >
                <h1>LOGIN PAGE</h1>
                <p><label for="username">Username:</label></p>
                
                <p><input type="text" name="username" placeholder="YOUR USERNAME"/></p>
                
                <p><label for="email">Email:</label></p>
                
                <p><input type="email" name="password" placeholder="YOUR EMAIL"/></p>
                
                <p><label for="password">Password:</label></p>
                
                <p><input  style={{ backgroundColor: this.state.backgroundColor}} type="text" name="password" onChange={this.analyze} placeholder="YOUR PASSWORD"/></p>
            </div>
        );
    }

}

export default PasswordStrength;