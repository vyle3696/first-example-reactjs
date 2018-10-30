import React from 'react';
import './css/ConfirmPage.scss';
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

	componentDidMount(){
        console.log('load confirm');
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
			this.props.history.push(window.MenuList[this.props.match.params.id].link);
			//window.location.assign(window.location.origin + window.MenuList[this.props.match.params.id].link);
		}
	}
	confirmFailed(){
        this.setState({notice:  "password is incorrect"});
	}

	render(){
		
			return(
				<div class="container">
				<div class="window">
						<div class="handle">
								<div class="buttons">
										<button class="close">
										</button>
										<button class="minimize">
										</button>
										<button class="maximize">
										</button>
								</div>
								<span class="title"></span>
						</div>
						<div class="terminal"></div>
				</div>
		</div>
		);
		
	}
}

export default ConfirmPage;