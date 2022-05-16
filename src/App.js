import { connect } from "react-redux"
import './App.css';
import * as Icon from 'react-bootstrap-icons';
import PersonalDetails from "./components/personal-details";
import EducationalDetails from "./components/educational-details";
import ProfessionalExperience from "./components/professional-experience";
import SocialMediaHobbies from "./components/social-media-hobbies";
import Success from "./components/success";
const stepper = [
  'Personal Details',
  'Educational Details',
  'Professional Details',
  'Social Media and Hobbies',
  'Success'
]
function App(props) {
  const {step} = props
  return (
    <div className="App">
      <div className="container">
        <div className="w-75 m-auto mt-5 shadow p-3 bg-body rounded">
            <div className="row">
            <div className="col-12">
              <ul className="d-flex justify-content-between p-0 py-3 shadow">
                {stepper.map((headings, i) => 
                  <li className="list-unstyled d-flex align-items-center text-start mx-2">
                    <span class={`badge bg-${step >= (i+1) ? 'primary' : 'dark'} rounded-circle me-1`}>
                        {step > (i + 1) ? <Icon.Check2 fontSize={10} color="white" /> : (i + 1)}
                    </span>
                    

                    <span>{headings}</span>
                  </li>
                )}
              </ul>
            </div>
            <div className="col-12">
            {(() => {
                switch (step) {
                  case 1:
                    return <PersonalDetails/>
                    break;
                  case 2:
                    return <EducationalDetails/>
                    break;
                  case 3:
                    return <ProfessionalExperience/>
                    break;
                  case 4:
                    return <SocialMediaHobbies/>
                    break;
                  case 5:
                    return <Success/>
                    break;
                  default:
                    return <PersonalDetails/>
                    break;
                }
              })()}
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}


const mapStateToProps = state => {
  return {
    step: state.steps.step
  }
}

export default connect(mapStateToProps)(App)
