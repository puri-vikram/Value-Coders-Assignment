import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { nextStep, backStep } from "../redux/Steps/steps.actions";

function ProfessionalExperience(props) {
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
            <h3 className="fw-bold mb-3">Professional Experience Details</h3>
            <form className="text-start" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <input
                        type="text"
                        name="company"
                        className="form-control"
                        placeholder='Company name'
                        {...register("company", {
                        required: true
                        })}
                    />
                    {errors.company && errors.company.type === "required" && (
                    <p className="mb-0 mt-2 text-danger">
                        Company name is required.
                    </p>
                    )}
                </div>
               
                <div className="mb-3">
                    <input
                        type="date"
                        name="from"
                        className="form-control"
                        placeholder='From'
                        {...register("from", {
                        required: true
                        })}
                    />
                    {errors.from && errors.from.type === "required" && (
                    <p className="mb-0 mt-2 text-danger">
                        From is required.
                    </p>
                    )}
                </div>
                <div className="mb-3">
                    <input
                        type="date"
                        name="to"
                        className="form-control"
                        placeholder='To'
                        {...register("to", {
                        required: true, max: 100 
                        })}
                    />
                    {errors.to && errors.to.type === "required" && (
                    <p className="mb-0 mt-2 text-danger">
                        To is required.
                    </p>
                    )}
                </div>

                <div className="mb-3">
                    <input
                        type="text"
                        name="designation"
                        className="form-control"
                        placeholder='Designation'
                        {...register("designation", {
                        required: true, max: 100 
                        })}
                    />
                    {errors.designation && errors.designation.type === "required" && (
                    <p className="mb-0 mt-2 text-danger">
                        Designation is required.
                    </p>
                    )}
                </div>

                <div className="d-flex justify-content-around">
                    <button type="button" onClick={() => props.backStep()} className="btn btn-danger w-25 mt-2">
                        Previous
                    </button>
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
    nextStep: () => dispatch(nextStep()),
    backStep: ()=> dispatch(backStep())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProfessionalExperience);