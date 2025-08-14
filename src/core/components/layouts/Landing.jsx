import React from "react";

const Landing = () => {
  return (
    <>
      {" "}
      <section className="landing">
        <div className="dark-overlay">
          <div className="landing-inner">
            <h1 className="x-large">Developer Connector</h1>
            <p className="lead">
              Create a developer profile/portfolio, share posts and get help
              from other developers
            </p>
            <div className="buttons">
              <a href="register.html" className="btn btn-primary">
                Sign Up
              </a>
              <a href="login.html" className="btn btn-light">
                Login
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
// import React from "react";
// import : to acces React from the 'react' package
// const : a constant declaration
// Landing : the name of the component
// = () => { ... } : defines a functional component using an arrow function
// return <div>Landing</div>; : the component returns a JSX element, which is
// export : can be used by other files to import this component
