import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addExperienceAction, getCurrentProfileAction } from "../../redux/profileAction";
const initialState={
    title: "Software Engineer",
    company: "Tech Solutions",
    location: "New York",
    from: "2021-01-01",
    to: "2023-01-01",
    current: false,
    description: "Worked on various software development projects.",
  };
const AddExp = () => {

   const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentProfile, loading } = useSelector((s) => s.profileReducer);


  const [formData, setFormData] = useState(initialState);
  const { title, company, location, from, to, current, description } = formData;

  useEffect(() => {
      let isMounted = true;
  
      if (!currentProfile) {
        dispatch(getCurrentProfileAction());
      }
  
      if (!loading && currentProfile) {
        const expData = { ...initialState };
  
        
  
       
  
        if (isMounted) setFormData(expData);
      }
  
      return () => {
        isMounted = false;
      };
    }, [dispatch, loading, currentProfile]);


  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log("Updated form data", formData);
  };
  const onCheckboxChange = (e) => {
    setFormData({ ...formData, current: e.target.checked });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addExperienceAction(formData));
    console.log("Experience added", formData);
  };
  return (
    <>
      <section className="container">
        <h1 className="large text-primary">Add An Experience</h1>
        <p className="lead">
          <i className="fas fa-code-branch"></i> Add any developer/programming
          positions that you have had in the past
        </p>
        <small>* = required field</small>
        <form className="form" onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="* Job Title"
              name="title"
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="* Company"
              onChange={onChange}
              name="company"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              onChange={onChange}
              placeholder="Location"
              name="location"
            />
          </div>
          <div className="form-group">
            <h4>From Date</h4>
            <input type="date" onChange={onChange} name="from" />
          </div>
          <div className="form-group">
            <p>
              <input
                type="checkbox"
                onChange={onCheckboxChange}
                name="current"
                value=""
              />{" "}
              Current Job
            </p>
          </div>
          <div className="form-group">
            <h4>To Date</h4>
            <input onChange={onChange} type="date" name="to" />
          </div>
          <div className="form-group">
            <textarea
              name="description"
              cols="30"
              onChange={onChange}
              rows="5"
              placeholder="Job Description"
            ></textarea>
          </div>
          <input type="submit" className="btn btn-primary my-1" />
          <a className="btn btn-light my-1" href="dashboard.html">
            Go Back
          </a>
        </form>
      </section>
    </>
  );
};

export default AddExp;
