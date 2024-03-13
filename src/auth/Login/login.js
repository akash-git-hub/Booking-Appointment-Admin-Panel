import React from "react";

const login = () => {
  return (
    <div>
      <section
        className="bg-home d-flex bg-light align-items-center"
        style={{
          background: 'url("../assets/images/bg/bg-lines-one.png") center',
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-8">
              <img
                src="../assets/images/logo-dark.png"
                height={22}
                className="mx-auto d-block"
                alt=""
              />
              <div className="card login-page shadow mt-4 rounded border-0">
                <div className="card-body">
                  <h4 className="text-center">Sign In</h4>
                  <form action="index.html" className="login-form mt-4">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="mb-3 text-left">
                          <label className="form-label">
                            Your Name <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Name"
                            name="name"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="mb-3 text-left">
                          <label className="form-label">
                            Password <span className="text-danger">*</span>
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 mb-0">
                        <div className="d-grid">
                          <button className="btn btn-primary">Sign in</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              {/**/}
            </div>{" "}
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>{" "}
        {/*end container*/}
      </section>
    </div>
  );
};

export default login;
