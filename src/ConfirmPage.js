import React from 'react';
import './css/ConfirmPage.css';
import $ from 'jquery';
import { Redirect } from 'react-router';
import {Support} from './Support.js';


class ConfirmPage extends React.Component{
	constructor(props){
        super(props);
		this.state = {
            notice: "",
            isLoged: false
		}

        this.onConfirmSubmit = this.onConfirmSubmit.bind(this);
		this.onConfirmClick = this.onConfirmClick.bind(this);
		
		this.confirmSuccess = this.confirmSuccess.bind(this);
		this.confirmFailed = this.confirmFailed.bind(this);
	}

	onConfirmClick(e) {
		e.preventDefault();
		this.onConfirmSubmit();
	  }
	
	onConfirmSubmit(){

		if($("#password").val() == "123456"){
            this.confirmSuccess(window.MenuList[this.props.match.params.id].link);
        }else{
            this.confirmFailed();
        }
	}

    confirmSuccess(path){
		//console.log(data);
        //this.setState({isLoged: true})
		//this.props.history.push("/");
		if(Support.isValidURL(path)){
			window.location.assign(path);
		}else{
			window.location.assign(window.location.origin + window.MenuList[this.props.match.params.id].link);
		}
	}
	confirmFailed(){
        this.setState({notice:  "password is incorrect"});
	}

	render(){
		
			return(
			<div className="confirm-page">
				<div className="row confirm-page-inner">
					<div className="confirm-form  col-xs-12	col-sm-6	col-md-4">
                    <h2 style={{padding:"20px"}}>Enter password</h2>
					<form onSubmit={ this.onConfirmClick } id="confirm-content" className="content">
						
                        <input id="password" type="password" name="pass" placeholder="Password"/>
                        <button id="submit" onClick={this.onConfirmClick} >Confirm</button>
					</form>
			      <p id="notice">{this.state.notice}</p>
			    </div>
				</div>
			</div>
		);
		
	}
}

export default ConfirmPage;