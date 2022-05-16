import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { nextStep } from "../redux/Steps/steps.actions";

function PersonalDetails(props) {
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
            <h3 className="fw-bold mb-3">Personal Details</h3>
            <form className="text-start" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <input
                        type="text"
                        name="fullname"
                        className="form-control"
                        placeholder='Fullname'
                        {...register("fullname", {
                        required: true
                        })}
                    />
                    {errors.fullname && errors.fullname.type === "required" && (
                    <p className="mb-0 mt-2 text-danger">
                        Fullname is required.
                    </p>
                    )}
                </div>
                <div className="mb-3">
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder='Email'
                        {...register("email", {
                        required: true
                        })}
                    />
                    {errors.email && errors.email.type === "required" && (
                    <p className="mb-0 mt-2 text-danger">
                        Email is required.
                    </p>
                    )}
                </div>
                <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary w-25 mt-2">
                        Next
                    </button>
                </div>
            </form>
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
    nextStep: () => dispatch(nextStep())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PersonalDetails);