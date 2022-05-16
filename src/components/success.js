import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { nextStep, backStep } from "../redux/Steps/steps.actions";

function Success(props) {
  const {
    watch,
    register,
    handleSubmit,
    setError,
    getValues,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    props.nextStep()
  };

  return (
        <div className="mt-3">
            <h3 className="fw-bold mb-3">SUCCESS</h3>
            <div className="text-start">
                <h4>To See What Have You Submitted</h4>
                <button type="button" onClick={() => props.backStep()} className="btn btn-primary w-25 mt-2">
                    Click Here
                </button>
            </div>
        </div>
  );
}
const mapStateToProps = state => {
    return {
      step: state.steps.step
    }
  }
const mapDispatchToProps = (dispatch) => {
  return {
    nextStep: () => dispatch(nextStep()),
    backStep: ()=> dispatch(backStep())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Success);