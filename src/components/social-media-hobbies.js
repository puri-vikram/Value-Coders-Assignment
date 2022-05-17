import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { nextStep, backStep } from "../redux/Steps/steps.actions";
import { saveSoHobbies } from "../redux/FormData/form-data.actions";

function SocialMediaHobbies(props) {
  const {
    register,
    handleSubmit,
    setError,
    getValues,
    setValue,
    formState: { errors },
  } = useForm();

    React.useEffect(()=>{
        let _data = props.so_hobby
        if(Object.keys(_data).length > 0){
            setValue('linkedin', _data.linkedin, { shouldDirty: true })
            setValue('github', _data.github, { shouldDirty: true })     
            setValue('facebook', _data.facebook, { shouldDirty: true })
            setValue('hobbies', _data.hobbies, { shouldDirty: true }) 
        }
    },[])

    const onSubmit = async (e) => {
        props.saveSoHobbies(getValues())
        props.nextStep()
    };

  return (
        <div className="mt-3">
            <h3 className="fw-bold mb-3">Social Media and Hobbies</h3>
            <form className="text-start" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <input
                        type="url"
                        name="linkedin"
                        className="form-control"
                        placeholder='Linkedin Profile Link'
                        {...register("linkedin", {
                        required: true
                        })}
                    />
                    {errors.linkedin && errors.linkedin.type === "required" && (
                    <p className="mb-0 mt-2 text-danger">
                        Linkedin profile link is required.
                    </p>
                    )}
                </div>
                <div className="mb-3">
                    <input
                        type="url"
                        name="github"
                        className="form-control"
                        placeholder='Github Profile Link'
                        {...register("github", {
                        required: true
                        })}
                    />
                    {errors.github && errors.github.type === "required" && (
                    <p className="mb-0 mt-2 text-danger">
                        Github profile link is required.
                    </p>
                    )}
                </div>
                <div className="mb-3">
                    <input
                        type="url"
                        name="facebook"
                        className="form-control"
                        placeholder='Facebook Profile Link'
                        {...register("facebook", {
                        required: true
                        })}
                    />
                    {errors.facebook && errors.facebook.type === "required" && (
                    <p className="mb-0 mt-2 text-danger">
                        Facebook profile link is required.
                    </p>
                    )}
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        name="hobbies"
                        className="form-control"
                        placeholder='Hobbies'
                        {...register("hobbies", {
                        required: true, max: 100 
                        })}
                    />
                    {errors.hobbies && errors.hobbies.type === "required" && (
                    <p className="mb-0 mt-2 text-danger">
                       Please Enter Your Hobbies.
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
      step: state.steps.step,
      so_hobby: state.all_data.so_hobby
    }
  }
const mapDispatchToProps = (dispatch) => {
  return {
    nextStep: () => dispatch(nextStep()),
    backStep: ()=> dispatch(backStep()),
    saveSoHobbies: (payload) => dispatch(saveSoHobbies(payload)) 
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SocialMediaHobbies);