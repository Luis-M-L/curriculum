import React, { useState, useEffect } from "react";
import { Collapse } from "reactstrap";
import MyHistoryContainer from "./MyHistoryContainer.js";
import MySkillsContainer from "./MySkillsContainer.js";
import MyPersonalContainer from "./MyPersonalContainer.js";

function CollapsingNode({ children, ...props }) {
	
  const { title, collapse, milestoneData } = props;
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
		formattedInfo = getPersonalNode(milestoneData);
	} else if (datatype === "work"){
		formattedInfo = getWorkNode(milestoneData);
	} else if (datatype === "academics"){
		formattedInfo = getAcademicNode(milestoneData);
	} else {
		formattedInfo = getCompetenciesNode(milestoneData);
	}
	return formattedInfo;
}

function getPersonalNode(milestoneData){
	return <MyPersonalContainer data={milestoneData}/>;
}

function getWorkNode(milestoneData){
	return <MyHistoryContainer data={milestoneData}/>;
}

function getAcademicNode(milestoneData){
	return getWorkNode(milestoneData);
}

function getCompetenciesNode(milestoneData){
	return <MySkillsContainer data={milestoneData}/>;
}

CollapsingNode.defaultProps = {
  children: "Add node as a child",
  title: "Collapsible Panel",
  collapse: true
};

export default CollapsingNode;
