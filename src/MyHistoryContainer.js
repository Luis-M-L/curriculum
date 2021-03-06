import React from "react";

class MyHistoryContainer extends React.Component {
	
	state = {
		metadata: {},
		children: []
	}
	
  constructor(data) {
	  console.log("DataContainer constructor()");
	  data = data.data;
    super();
	 
	for(var i = 1; i < data.length; i++){
		this.state.children.push(data[i]);
	}
	
	this.state.metadata["site-key"] = data[0]["site-key"];
	this.state.metadata["sector-key"] = data[0]["sector-key"];
  }
  
  render(){
	 console.log("Render DataContainer");
	  
    const children = this.state.children.map((val) => {
      return (
        <div className="milestone">
			<div className="fecha-puesto">
				<div className="milestone-form">{val["dates"]}</div>
				<div className="position">{val["position"]}</div>
			</div>
			<div className="tareas">
				<div className="blank-tareas"/>
				<div className="lista-tareas-container">{this.getFormattedTasks(val["tasks"])}</div>
			</div>
			<div className="donde">
				<div className="site-label">{this.state.metadata["site-key"]}</div>
				<div className="site-info">{val["company"]}</div>
			</div>
			<div className="sector">
				<div className="sector-label">{this.state.metadata["sector-key"]}</div>
				<div className="sector-info">{val["sector"]}</div>
			</div>
		</div>
      )
    });
	
    return (
      <div className="milestone-container">
        {children}
      </div>
    );
  }
  
  getFormattedTasks(tasks){
	  const taskUlist = tasks.map((val) => {
		  return <li>{val}</li>
	  });
	  return (
		  <ul className="lista-tareas">
			{taskUlist}
		  </ul>
	  );
  }
}

export default MyHistoryContainer;