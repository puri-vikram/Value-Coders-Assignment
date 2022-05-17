import React from "react";
import { connect } from "react-redux";
import { nextStep, backStep } from "../redux/Steps/steps.actions";

function Success(props) {
  const { pro_data, edu_data, professnl_data, so_hobby } = props
  const showData = () => {
      alert(JSON.stringify({...pro_data, ...edu_data, ...professnl_data, ...so_hobby}));
  }

  return (
        <div className="mt-3">
            <h3 className="fw-bold mb-3">SUCCESS</h3>
            <div className="text-start">
                <h4>To See What Have You Submitted</h4>
                <div className="d-flex justify-content-around">
                    <button type="button" onClick={() => props.backStep()} className="btn btn-danger w-25 mt-2">
                        Previous
                    </button>
                    <button type="button" onClick={() =>showData()} className="btn btn-primary w-25 mt-2">
                        Click Here
                    </button>
                </div>
            </div>
        </div>
  );
}
const mapStateToProps = state => {
    return {
      step: state.steps.step,
      so_hobby: state.all_data.so_hobby,
      professnl_data: state.all_data.professnl_data,
      edu_data: state.all_data.edu_data,
      pro_data: state.all_data.pro_data
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
      backStep: ()=> dispatch(backStep()),
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(Success);