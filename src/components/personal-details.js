import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { nextStep } from "../redux/Steps/steps.actions";
import { saveProData } from "../redux/FormData/form-data.actions";
function PersonalDetails(props) {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm();

    useEffect(()=>{
        let _data = props.pro_data
        if(Object.keys(_data).length > 0){
            setValue('fullname', _data.fullname, { shouldDirty: true })
            setValue('email', _data.email, { shouldDirty: true })      
        }
    },[])
  
  const onSubmit = async (e) => {
    props.saveProData(getValues())
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
      step: state.steps.step,
      pro_data: state.all_data.pro_data
    }
  }
const mapDispatchToProps = (dispatch) => {
  return {
    nextStep: () => dispatch(nextStep()),
    saveProData: (payload) => dispatch(saveProData(payload)) 
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PersonalDetails);