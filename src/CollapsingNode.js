import React, { useState, useEffect } from "react";
import { Collapse } from "reactstrap";

import profile from './profile.png';

function CollapsingNode({ children, ...props }) {
	
  const { title, collapse, milestoneData } = props;
  console.log(milestoneData);
  const [isCollapse, setIsCollapse] = useState(collapse);
  
  const fantasy = () => {
    setIsCollapse(!isCollapse);
  };

  const animate = collapse => {
    setIsCollapse(collapse);
  };

  useEffect(() => {
    animate(!collapse);
  }, [collapse]);
  
  children = getFormattedInfo(milestoneData);

  return (
    <div className="coll-panel">
      <button
        type="button"
        className="collapse-button"
        onClick={() => fantasy()}
      >
        <i /> {title}
      </button>
      <Collapse className="border text-left p-2" isOpen={isCollapse}>
		  {children}
      </Collapse>
    </div>
  );
}

function getFormattedInfo(milestoneData){
	var formattedInfo;
	
	var datatype = milestoneData[0]["datatype"];
	if(datatype === "personal"){
		console.log("Detected personal node");
		formattedInfo = getPersonalNode(milestoneData);
	} else if (datatype === "work"){
		console.log("Detected work node");
		formattedInfo = getWorkNode(milestoneData);
	} else if (datatype === "academics"){
		console.log("Detected academic node");
		formattedInfo = getAcademicNode(milestoneData);
	} else {
		console.log("It must be a competencies node");
		formattedInfo = getCompetenciesNode(milestoneData);
	}
	return formattedInfo;
}

function getPersonalNode(milestoneData){
	return (
		<div className="personal-container">
			<div className="personal-text">
				<div className="personal-labels">Full name</div>
				<div className="personal-data">{milestoneData[1]["fullname"]}</div>
			</div>
			<div className="personal-text">
				<div className="personal-labels">Address</div>
				<div className="personal-data">{milestoneData[1]["address"]}</div>
			</div>
			<div className="personal-text">
				<div className="personal-labels">Phone</div>
				<div className="personal-data">{milestoneData[1]["phone"]}</div>
			</div>
				<div className="personal-labels">e-Mail</div>
				<div className="personal-data">{milestoneData[1]["email"]}</div>
			<div className="personal-text">
				<div className="personal-labels">Nationality</div>
				<div className="personal-data">{milestoneData[1]["nationality"]}</div>
			</div>
			<div className="personal-text">
				<div className="personal-labels">Birthdate</div>
				<div className="personal-data">{milestoneData[1]["birthdate"]}</div>
			</div>
			<div className="personal-text">
				<div className="personal-labels">Sex</div>
				<div className="personal-data">{milestoneData[1]["sex"]}</div>
			</div>
			<div className="foto-container">
				<img src={profile} alt=""/>
			</div>
		</div>
	);
}

function getWorkNode(milestoneData){
	var workNode;
			workNode = fillWorkNode(milestoneData);
	/*for(var i = 1; i < milestoneData.length; i++){
		if(workNode === undefined){
		}else{
			workNode.nextSibling = fillWorkNode(milestoneData[i]);
		}
		
	}*/
	return workNode;
}

function fillWorkNode(data){
	return (
	<div className="work-container">
		<div className="milestone">
			<div className="fecha-puesto">
				<div className="milestone-form">{data[1]["dates"]}</div>
				<div className="position">{data[1]["position"]}</div>
			</div>
			<div className="tareas">
				<div className="blank-tareas"/>
				<div className="lista-tareas">{data[1]["tasks"]}</div>
			</div>
			<div className="donde">
				<div className="site-label">{data[0]["site-key"]}</div>
				<div className="site-info">{data[1]["company"]}</div>
			</div>
			<div className="sector">
				<div className="sector-label">{data[0]["sector-key"]}</div>
				<div className="sector-info">{data[1]["sector"]}</div>
			</div>
		</div>
		<div className="milestone">
			<div className="fecha-puesto">
				<div className="milestone-form">{data[2]["dates"]}</div>
				<div className="position">{data[2]["position"]}</div>
			</div>
			<div className="tareas">
				<div className="blank-tareas"/>
				<div className="lista-tareas">{data[2]["tasks"]}</div>
			</div>
			<div className="donde">
				<div className="site-label">{data[0]["site-key"]}</div>
				<div className="site-info">{data[2]["company"]}</div>
			</div>
			<div className="sector">
				<div className="sector-label">{data[0]["sector-key"]}</div>
				<div className="sector-info">{data[2]["sector"]}</div>
			</div>
		</div>
		<div className="milestone">
			<div className="fecha-puesto">
				<div className="milestone-form">{data[3]["dates"]}</div>
				<div className="position">{data[3]["position"]}</div>
			</div>
			<div className="tareas">
				<div className="blank-tareas"/>
				<div className="lista-tareas">{data[3]["tasks"]}</div>
			</div>
			<div className="donde">
				<div className="site-label">{data[0]["site-key"]}</div>
				<div className="site-info">	{data[3]["company"]}</div>
			</div>							
			<div className="sector">
				<div className="sector-label">{data[0]["sector-key"]}</div>
				<div className="sector-info">{data[3]["sector"]}</div>
			</div>
		</div>
	</div>
	);
}

function getAcademicNode(milestoneData){
	return getWorkNode(milestoneData);
}

function getCompetenciesNode(milestoneData){
	return (
		<div>
			<div>
				<span className="competencies-label">{milestoneData[1]["label"]}</span>
				<span className="competencies-description">{milestoneData[1]["description"]}</span>
			</div>
			<div>
				<span className="competencies-label">{milestoneData[2]["label"]}</span>
				<span className="competencies-description">{milestoneData[2]["description"]}</span>
			</div>
			<div>
				<span className="competencies-label">{milestoneData[3]["label"]}</span>
				<span className="competencies-description">{milestoneData[3]["description"]}</span>
			</div>			
			<div>
				<span className="competencies-label">{milestoneData[4]["label"]}</span>
				<span className="competencies-description">{milestoneData[4]["description"]}</span>
			</div>
		</div>
	);
}

CollapsingNode.defaultProps = {
  children: "Add node as a child",
  title: "Collapsible Panel",
  collapse: true
};

export default CollapsingNode;
