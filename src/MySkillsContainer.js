import React from "react";

class MySkillsContainer extends React.Component {
	
	state = {
		metadata: {},
		children: []
	}
	
  constructor(data) {
	data = data.data;
    super();
	
    // the data 
	for(var i = 1; i < data.length; i++){
		this.state.children.push(data[i]);
	}
  }
  
  render(){
	 console.log("Render DataContainer");
	  
    const children = this.state.children.map((val) => {
      return (
        <div>
			<span className="competencies-label">{val["label"]}</span>
			<span className="competencies-description">{val["description"]}</span>
		</div>
      )
    });
	
    return (
      <div>
        {children}
      </div>
    );
  }
}

export default MySkillsContainer;