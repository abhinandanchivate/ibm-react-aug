import React from "react";
import { Route, Routes } from "react-router-dom";
import ProfileForm from "../components/forms/CreateProfileForm";
import AddEducation from "../components/forms/AddEducation";
import AddExp from "../components/forms/AddExp";

const ProfileRouter = () => {
  return (
    <Routes>
      {/* Create profile */}
      <Route path="create" element={<ProfileForm />} />

      {/* Edit profile */}
      <Route path="edit" element={<ProfileForm />} />

      {/*Add Education */}
      <Route path="addEducation" element={<AddEducation/>}/>

      

      {/*Add experience */}
      <Route path="addExperience" element={<AddExp/>}/>

      
    </Routes>
  );
};

export default ProfileRouter;
