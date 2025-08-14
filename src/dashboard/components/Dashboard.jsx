import React, { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteExpByIdAction,
  getCurrentProfileAction,
} from "../../profile/redux/profileAction";
import { Link } from "react-router-dom";
import DashboardAction from "./DashboardAction";
import EducationDetails from "./EducationDetails";
import ExperienceDetails from "./ExperienceDetails";

const Dashboard = () => {
  // useDispatch
  const dispatch = useDispatch();
  // useSelector
  const { user } = useSelector((state) => state.authReducer);
  const { currentProfile } = useSelector((state) => state.profileReducer);
  const handleDeleteExperience = useCallback(
    (expId) => {
      dispatch(deleteExpByIdAction(expId));
    },
    [dispatch]
  );

  const displayProfile = useMemo(() => {
    if (currentProfile) {
      return (
        <>
          <div></div>
          <div></div>
          <div>
            <br></br> <br></br>
          </div>
          <DashboardAction />
          <EducationDetails edus={currentProfile.education} />
          <ExperienceDetails
            exps={currentProfile.experience}
            deleteExperience={handleDeleteExperience}
          />
        </>
      );
    }

    return (
      <>
        <p>You have not yet set up a profile, please add some info</p>
        <Link to="/profile/create" className="btn btn-primary my-1">
          Create Profile
        </Link>
      </>
    );
  }, [currentProfile]);
  useEffect(() => {
    dispatch(getCurrentProfileAction());
  }, [dispatch]);

  return (
    <>
      Welcome {user?.name} Dashboard
      <>{displayProfile}</>
    </>
  );
  //{user?.name} will help us from fallback to null
  // orcrashing the app.
};

export default Dashboard;
/**
 * | Form          | Signature              | When it runs                       | Typical use                          |
| ------------- | ---------------------- | ---------------------------------- | ------------------------------------ |
| Every render  | `useEffect(fn)`        | After **every** commit             | Sync something with the DOM/logging  |
| Mount/unmount | `useEffect(fn, [])`    | Once on mount → cleanup on unmount | Subscriptions, timers, one-time init |
| On changes    | `useEffect(fn, [a,b])` | On mount and when **a/b** change   | Fetching, recomputing derived data   |

 */
