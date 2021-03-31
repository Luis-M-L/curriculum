import React, { useState, useEffect } from "react";
import { Collapse } from "reactstrap";

//import MilestoneNode from './MilestoneNode';

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
        className="coll-panel-btn btn-primary btn-block text-left"
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
			<div className="personal-labels">
				<p>Full name</p>
				<p>Address</p>
				<p>Phone</p>
				<p>e-Mail</p>
				<p>Nationality</p>
				<p>Birthdate</p>
				<p>Sex</p>
			</div>
			<div className="personal-data">
				<p>{milestoneData[1]["fullname"]}</p>
				<p>{milestoneData[1]["address"]}</p>
				<p>{milestoneData[1]["phone"]}</p>
				<p>{milestoneData[1]["email"]}</p>
				<p>{milestoneData[1]["nationality"]}</p>
				<p>{milestoneData[1]["birthdate"]}</p>
				<p>{milestoneData[1]["sex"]}</p>
			</div>
			<div className="foto-container">
			<img src='../public/profile.png' alt=""/>
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
			<div className="tareas">{data[1]["tasks"]}</div>
			<div className="donde">{data[1]["company"]}</div>
			<div className="sector">{data[1]["sector"]}</div>
		</div>
		<div className="milestone">
			<div className="fecha-puesto">
				<div className="milestone-form">{data[2]["dates"]}</div>
				<div className="position">{data[2]["position"]}</div>
			</div>
			<div className="tareas">{data[2]["tasks"]}</div>
			<div className="donde">{data[2]["company"]}</div>
			<div className="sector">{data[2]["sector"]}</div>
		</div>
		<div className="milestone">
			<div className="fecha-puesto">
				<div className="milestone-form">{data[3]["dates"]}</div>
				<div className="position">{data[3]["position"]}</div>
			</div>
			<div className="tareas">{data[3]["tasks"]}</div>
			<div className="donde">{data[3]["company"]}</div>
			<div className="sector">{data[3]["sector"]}</div>
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
				<span>{milestoneData[1]["label"]}</span>
				<span>{milestoneData[1]["description"]}</span>
			</div>
			<div>
				<span>{milestoneData[2]["label"]}</span>
				<span>{milestoneData[2]["description"]}</span>
			</div>
			<div>
				<span>{milestoneData[3]["label"]}</span>
				<span>{milestoneData[3]["description"]}</span>
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
