import React from "react";
import './style.css';

const segment = (props) =>{
    console.log("Hello");
    return(
        <div class="list">
			Name: {props.name}
			<br/>
			Scholarship Offered By: {props.institute}
			<br/>
			Reward: {props.reward}
			<br/>
			ELIGIBILITY
			<br/>
			Nationality: {props.nationality}
			<br/>
			Degree: {props.degree}
			<br/>
			Category: {props.category}
			<br/>
		</div>
    );
}
export default segment;