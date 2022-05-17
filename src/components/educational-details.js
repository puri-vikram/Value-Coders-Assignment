import React from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { nextStep, backStep } from "../redux/Steps/steps.actions";
import { saveEduData } from "../redux/FormData/form-data.actions"
function EducationalDetails(props) {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm();

  React.useEffect(()=>{
        let _data = props.edu_data
        if(Object.keys(_data).length > 0){
            setValue('course', _data.course, { shouldDirty: true })
            setValue('college', _data.college, { shouldDirty: true })     
            setValue('year', _data.year, { shouldDirty: true })
            setValue('cgpa', _data.cgpa, { shouldDirty: true }) 
        }
    },[])

  const onSubmit = async (e) => {
    props.saveEduData(getValues())
    props.nextStep()
  };

  return (
        <div className="mt-3">
            <h3 className="fw-bold mb-3">Educational Details</h3>
            <form className="text-start" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <input
                        type="text"
                        name="course"
                        className="form-control"
                        placeholder='Course'
                        {...register("course", {
                        required: true
                        })}
                    />
                    {errors.course && errors.course.type === "required" && (
                    <p className="mb-0 mt-2 text-danger">
                        Course is required.
                    </p>
                    )}
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        name="college"
                        className="form-control"
                        placeholder='College'
                        {...register("college", {
                        required: true
                        })}
                    />
                    {errors.college && errors.college.type === "required" && (
                    <p className="mb-0 mt-2 text-danger">
                        College is required.
                    </p>
                    )}
                </div>
                <div className="mb-3">
                    <input
                        type="date"
                        name="year"
                        className="form-control"
                        placeholder='Year'
                        {...register("year", {
                        required: true
                        })}
                    />
                    {errors.year && errors.year.type === "required" && (
                    <p className="mb-0 mt-2 text-danger">
                        Year is required.
                    </p>
                    )}
                </div>
                <div className="mb-3">
                    <input
                        type="number"
                        name="cgpa"
                        className="form-control"
                        placeholder='Percentage/ CGPA'
                        {...register("cgpa", {
                        required: true, max: 100 
                        })}
                    />
                    {errors.cgpa && errors.cgpa.type === "required" && (
                    <p className="mb-0 mt-2 text-danger">
                        Percentage/ CGPA is required.
                    </p>
                    )}
                    {errors.cgpa && errors.cgpa.type === "max" && (
                    <p className="mb-0 mt-2 text-danger">
                        Percentage/ CGPA should be greater than 0 and less than 100.
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
      edu_data: state.all_data.edu_data
    }
  }
const mapDispatchToProps = (dispatch) => {
  return {
    nextStep: () => dispatch(nextStep()),
    backStep: ()=> dispatch(backStep()),
    saveEduData: (payload) => dispatch(saveEduData(payload)) 
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EducationalDetails);