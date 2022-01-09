import React, { useRef } from "react";
import './style.css';
import Segment from "../segment/index";
import Typewriter from "typewriter-effect"
class Scholarship extends React.Component{
    scholarship = [["PNB Housing Finance Protsahan Scholarship","PNB Housing Finance","2,00,000 INR for two years","Indian","MBA","None"],
                   ["IDFC FIRST Bank MBA Scholarship","IDFC FIRST Bank","2,00,000 INR for two years","Indian","MBA","None"],
                   ["Post Graduate Scholarship for Professional Courses for SC/ST","Ministry of HRD","4,500 INR for per month for two years","Indian","MBA","SC/ST"],
                   ["AICTE PG (GATE/GPAT) Scholarship","AICTE","12,400 INR for one month for two years","Indian","MTech","None"],
                   ["Prime Minister’s Research Fellowship Scheme","Ministry of Human Resource Development","80,000 INR for one month for two years","Indian","MTech","None"]
                  ]
    constructor(props){
        super(props);
        // console.log("start");
        this.state = {
            showSearch:false,
            showScholarship:false,
            list : []
        };
        this.search = React.createRef()
    }
    displaySearch = () =>{
        this.setState({
            showSearch: true
        },
        ()=>{
            window.scrollTo({
                top:this.search.current.offsetTop,
                behavior:"smooth"
            });
        });
    };
    proccesForm = (event) =>{
        event.preventDefault();
        // console.log(event.target.Nationality.value);
        // console.log(event.target.degree.value);
        // console.log(event.target.category.value);
        const nationality = event.target.Nationality.value;
        const degree = event.target.degree.value;
        const category = event.target.category.value;
        const scholarshipList = [];
        for(var i=0; i<this.scholarship.length; i++){
            if(nationality==this.scholarship[i][3] && degree==this.scholarship[i][4] && (this.scholarship[i][5]=="None" || this.scholarship[i][5]==category)){
                scholarshipList.push(this.scholarship[i]);
            }
        }
        //console.log(scholarshipList);
        if(scholarshipList.length>0){
            this.setState({
                list:scholarshipList,
                showScholarship:true
            })
        }
        else{
            window.alert("No Scholarship To Display");
        }
    }
    render = () =>{
        return (
        <div>
        <div class="seg1">
            <mark>
            <Typewriter onInit={(tw)=>{
                tw.typeString("Every year, Students spend many hours to search for Scholarships but fail to find any relavent Scholarships for them.").start();
            }}/>
            </mark>
            <button className="explore" onClick={this.displaySearch}>EXPLORE</button>
        </div>
        {
            this.state.showSearch?
            <div ref={this.search} className="seg2">
               <form class="searchBar" onSubmit={this.proccesForm}>
			        <select name="Nationality">
				        <option value="none" selected disabled hidden>Nationality</option>
				        <option value="Indian">Indian</option>
			        </select>
			        <select name="degree">
				        <option value="none" selected disabled hidden>Degree</option>
				        <option value="MBA">MBA</option>
				        <option value="MTech">MTech</option>
			        </select>
			        <select name="category">
				        <option value="none" selected disabled hidden>Category</option>
				        <option value="GM">GM</option>
				        <option value="SC/ST">SC/ST</option>
				        <option value="OBC">OBC</option>
			        </select>
			        <input type="submit" class="styleSubmit" value="Search"/>
		        </form>
                {
                    this.state.showScholarship?
                    this.state.list.map((ss) => {
                        console.log(ss);
                        return (<Segment name={ss[0]} institute={ss[1]} reward={ss[2]} nationality={ss[3]} degree={ss[4]} category={ss[5]}/>);
                    }
                    ):<div class="list"> 
                        No Scholarship To Display.
		            </div>
                }
            </div>:null
        }
        </div>
        );
    };
};

export default Scholarship;