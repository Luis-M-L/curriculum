import React from "react";

import profile from './profile.png';

class MyPersonalContainer extends React.Component {
	
	state = {
		metadata: {},
		children: []
	}
	
  constructor(data) {
	data = data.data;
    super();
	
	for(var i = 1; i < data.length; i++){
		this.state.children.push(data[i]);
	}
  }
  
  render(){
	const children = this.state.children.map((val) => {
      return (
        <div className="personal-text">
			<div className="personal-labels">{val["key"]}</div>
			<div className="personal-data">{val["value"]}</div>
		</div>
      )
    });
	
    return (
      <div className="personal-container">
        {children}
		  <div className="foto-container">
			<img src={profile} alt=""/>
		  </div>	
      </div>
    );
  }
}

export default MyPersonalContainer;