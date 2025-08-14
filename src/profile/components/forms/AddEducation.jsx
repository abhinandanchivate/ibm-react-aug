import React, { useEffect, useMemo } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useMatch, useNavigate } from 'react-router-dom';
import { addEduationAction, getCurrentProfileAction } from '../../redux/profileAction';

const initialState={
    school: 'PICT',
    degree: 'BE',
    fieldofstudy: 'ENTC',
    from: '2022-11-14',
    to: '2025-06-30',
    current: false,
    description: 'This is a sample description for the education.',
  };
const AddEducation = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addingEducation = useMatch("/profile/addEducation");
  const { currentProfile, loading } = useSelector((s) => s.profileReducer);
  const title = useMemo(
    () => (addingEducation ? "Add Your Education" : "Edit Your Education"),
    [addingEducation]
  );

  const [formData, setFormData] = useState(initialState);
  const { school, degree, fieldofstudy, from, to, current, description } = formData;

useEffect(() => {
    let isMounted = true;

    if (!currentProfile) {
      dispatch(getCurrentProfileAction());
    }

    if (!loading && currentProfile) {
      const educationData = { ...initialState };

      

     

      if (isMounted) setFormData(educationData);
    }

    return () => {
      isMounted = false;
    };
  }, [dispatch, loading, currentProfile]);

  const onChange = (e) => {
   setFormData({ ...formData, [e.target.name]: e.target.value });
   console.log("Updated form data", formData);
  }
  const onCheckboxChange = (e) => {
    setFormData({ ...formData, current: e.target.checked });
  }
  const onSubmit = (e) => {
    e.preventDefault();
    const editing = Boolean(currentProfile.education);
    console.log("GOt profile ,",currentProfile);
    dispatch(addEduationAction(formData,editing));
    console.log("Education added", formData);
  }
  return (
    <>
     <section className="container">
      <h1 className="large text-primary">
        {title}
      </h1>
      <p className="lead">
        <i className="fas fa-graduation-cap"></i> Add any school, bootcamp, etc that
        you have attended
      </p>
      <small>* = required field</small>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="* School or Bootcamp"
            name="school"
            value={school}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Degree or Certificate"
            name="degree"
            value={degree}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input type="text" 
          value={fieldofstudy}
          onChange={onChange}
          placeholder="Field Of Study" name="fieldofstudy" />
        </div>
        <div className="form-group">
          <h4>From Date</h4>
          <input type="date" 
          value={from}
          onChange={onChange}
          name="from" />
        </div>
        <div className="form-group">
          <p>
            <input 
            value={current}
            onChange={onCheckboxChange}
            type="checkbox" name="current"  /> Current School or Bootcamp
          </p>
        </div>
        <div className="form-group">
          <h4>To Date</h4>
          <input 
          value={to}
          onChange={onChange}
          disabled={current}
          type="date" name="to" />
        </div>
        <div className="form-group">
          <textarea
            name="description"
            cols="30"
            value={description}
            onChange={onChange}
            rows="5"
            placeholder="Program Description"
          ></textarea>
        </div>
        <input type="submit" className="btn btn-primary my-1" />
        <a className="btn btn-light my-1" href="dashboard.html">Go Back</a>
      </form>
    </section>
    </>
  )
}

export default AddEducation