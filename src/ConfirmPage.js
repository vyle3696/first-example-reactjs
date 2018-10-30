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
1	
		this.confirmSuccess = this.confirmSuccess.bind(this);
	}

	componentWillMount(){
		$("body").css("overflow","hidden");
		$("html").css("overflow","hidden");
	}

	componentWillUnmount() {
		$("body").css("overflow","auto");
		$("html").css("overflow","auto");
	}

	componentDidMount(){
		console.log('load confirm');
		var that = this;
		$(document).ready(function() {
			"use strict";
	
			// UTILITY
			function getRandomInt(min, max) {
					return Math.floor(Math.random() * (max - min)) + min;
			}
			// END UTILITY
	
			// COMMANDS
			function clear() {
					terminal.text("");
			}
	
			function help() {
					terminal.append("There is no help... MUAHAHAHAHA. >:D\n");
			}
		
			function echo(args) {
					var str = args.join(" ");
					terminal.append(str + "\n");
			}
	
			function fortune() {
					var xhr = new XMLHttpRequest();
					xhr.open('GET', 'https://cdn.rawgit.com/bmc/fortunes/master/fortunes', false);
					xhr.send(null);
	
					if (xhr.status === 200) {
							var fortunes = xhr.responseText.split("%");
							var fortune = fortunes[getRandomInt(0, fortunes.length)].trim();
							terminal.append(fortune + "\n");
					}
			}
			// END COMMANDS
	
			var title = $(".title");
			var terminal = $(".terminal");
			var prompt = "➜";
			var path = "~";
	
			var commandHistory = [];
			var historyIndex = 0;
	
			var command = "";
			

			var pass = '123456';
	
			function processCommand() {
					var isValid = false;
			
					// Create args list by splitting the command
					// by space characters and then shift off the
					// actual command.
			
					var args = command.split(" ");
					var cmd = args[0];
					args.shift();
			
					console.log(cmd);
					// Iterate through the available commands to find a match.
					// Then call that command and pass in any arguments.


					// for (var i = 0; i < commands.length; i++) {
					// 		if (cmd === commands[i].name) {
					// 				commands[i].function(args);12

					// 				isValid = true;
					// 				break;
					// 		}
					// }

					if(cmd == pass){
						isValid = true;
						terminal.append("zsh: <span style='color:#00ff2d; font-weight: bold'><3 <3 <3 =====>>>>>>>>>></span>"  + "\n");
						setTimeout( that.confirmSuccess, 350);
					}

					// No match was found...
					if (!isValid) {
						terminal.append("zsh: <span style='color:red; font-weight: bold'>(>.<)Sai quá sai dòiiii(0.0)</span>"  + "\n");
					}
			
					// Add to command history and clean up.
					commandHistory.push(command);
					historyIndex = commandHistory.length;
					command = "";
			}
			
			function displayPrompt() {
					terminal.append("<span class=\"prompt\">" + prompt + "</span> ");
					terminal.append("<span class=\"path\">" + path + "</span> ");
			}
			
			// Delete n number of characters from the end of our output
			function erase(n) {
					command = command.slice(0, -n);
					terminal.html(terminal.html().slice(0, -n));
			}
			
			function clearCommand() {
					if (command.length > 0) {
							erase(command.length);
					}
			}
			
			function appendCommand(str) {
					terminal.append(str);
					command += str;
			}
			
			/*
				//	Keypress doesn't catch special keys,
				//	so we catch the backspace here and
				//	prevent it from navigating to the previous
				//	page. We also handle arrow keys for command history.
				*/
			
			$(document).keydown(function(e) {
				e = e || window.event;
				var keyCode = typeof e.which === "number" ? e.which : e.keyCode;
		
				// BACKSPACE
				if (keyCode === 8 && e.target.tagName !== "INPUT" && e.target.tagName !== "TEXTAREA") {
						e.preventDefault();
						if (command !== "") {
								erase(1);
						}
				}
		
				// UP or DOWN
				if (keyCode === 38 || keyCode === 40) {
						// Move up or down the history
						if (keyCode === 38) {
								// UP
								historyIndex--;
								if (historyIndex < 0) {
										historyIndex++;
								}
						} else if (keyCode === 40) {
								// DOWN
								historyIndex++;
								if (historyIndex > commandHistory.length - 1) {
										historyIndex--;
								}
						}
		
						// Get command
						var cmd = commandHistory[historyIndex];
						if (cmd !== undefined) {
								clearCommand();
								appendCommand(cmd);
						}
				}
		});
		
		$(document).keypress(function(e) {
				// Make sure we get the right event
				e = e || window.event;
				var keyCode = typeof e.which === "number" ? e.which : e.keyCode;
		
				// Which key was pressed?
				switch (keyCode) {
						// ENTER
						case 13:
								{
										terminal.append("\n");
										processCommand();
										displayPrompt();
										break;
								}
						default:
								{
										appendCommand(String.fromCharCode(keyCode));
								}
				}
		});
		
		// Set the window title
		title.text("w3team: ~ (zsh)");
		
		// Get the date for our fake last-login
		var date = new Date().toString(); date = date.substr(0, date.indexOf("GMT") - 1);
		
		// Display last-login and promt
		terminal.append("Last login: " + date + " on ttys000\n"); displayPrompt();
		});
    }

    confirmSuccess(){
		let path = window.MenuList[this.props.match.params.id].link;
		let permissionKey = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
		sessionStorage.setItem("permission", permissionKey);
		if(Support.isValidURL(path)){
			window.location.assign(path);
		}else{

			this.props.history.push(path + "?k=" + permissionKey);
			//window.location.assign(window.location.origin + window.MenuList[this.props.match.params.id].link);
		}
	}
	
	render(){
		
		return(
			<div className = "main-content-inner confirm-page">
					<div className="window">
						<div className="handle">
							<div className="buttons">
								<button className="close-btn">
								</button>
								<button className="minimize">
								</button>
								<button className="maximize">
								</button>
							</div>
							<span className="title"></span>
						</div>
						<div className="terminal"></div>
					</div>
				
			</div>
			
		);
		
	}
}

export default ConfirmPage;