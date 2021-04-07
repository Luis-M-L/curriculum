import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import CollapsingNode from './CollapsingNode';
import './App.css';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
//import "./styles.css";

import personalInfo from './info/personal_info.json';				
import workingExperience from './info/working_experience.json';	
import academicFormation from './info/academic_formation.json';	
import competencies from './info/competencies.json';				

function App() {
	
	const [collapse, setCollapse] = useState(true);
    const [title, setTitle] = useState("Expand All");
    const [icon, setIcon] = useState("fa fa-chevron-right");
    const collapseAll = () => {
        setCollapse(!collapse);
        setIcon(state => {
            return state === "fa fa-chevron-right"
                ? "fa fa-chevron-down"
                : "fa fa-chevron-right";
        });
        setTitle(state => {
            return state === "Expand All" ? "Collapse All" : "Expand All";
        });
    };
    return (
        <div className="App container my-2">
            {/* Expand/Collapse All */}
            <button
                type="button"
                className="btn-warning mt-4 mb-3 float-left"
                onClick={collapseAll}
            >
                <i className={icon} /> {title}
            </button>
            <CollapsingNode title="Personal information" collapse={collapse} milestoneData={personalInfo}>
            </CollapsingNode>
            <CollapsingNode title="Work experience" collapse={collapse} milestoneData={workingExperience}>
            </CollapsingNode>
            <CollapsingNode title="Academic formation" collapse={collapse} milestoneData={academicFormation}>
            </CollapsingNode>
            <CollapsingNode title="Personal skills and competencies" collapse={collapse} milestoneData={competencies}>
            </CollapsingNode>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;