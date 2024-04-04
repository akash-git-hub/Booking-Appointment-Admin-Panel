import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { login } from "../../networking/NetworkCall";
import { useRef, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";
import { AuthContext } from "../../states/AuthContext";
import Loder from "../../components/Loder";


const Login = () => {
    const [loading, setLoading] = useState(false);
    const userNameRef = useRef();
    const pwdRef = useRef();
    const { setDoctorLoggedIn } = useContext(AuthContext);
    const Navigate = useNavigate();

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        if (
            userNameRef.current.value.toString().trim() === "" ||
            pwdRef.current.value.toString().trim() === ""
        ) {
            toast.error("All fields are required!");
            return;
        }
        setLoading(true);
        const data = {
            user_name: userNameRef.current.value,
            password: pwdRef.current.value,
        };
        const res = await login(data);
        if (res.success) {
            setDoctorLoggedIn(true);
            localStorage.setItem("doctorLoggedIn", "true");
            localStorage.setItem("doctorAuthToken", `${res.data.token}`);
            localStorage.setItem("doctorProfileData", JSON.stringify(res.data));
            toast.success(res.message);
            Navigate("/calendar", { replace: true });
        } else {
            toast.error(res.message);
        }
        setLoading(false);
    };
    return (
        <>
            <Loder loder={loading} />
            <ToastContainer />
            <section
                className="bg-home d-flex bg-light align-items-center"
                style={{
                    background: 'url("../assets/images/bg/bg-lines-one.png") center',
                }}
            >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5 col-md-8">
                            <div className="card login-page shadow mt-4 rounded border-0 pt-5">
                                <img
                                    src="/doctor/assets/images/logo-dark.png"
                                    height={50}
                                    className="mx-auto d-block"
                                    alt=""
                                />
                                <div className="card-body" style={{ padding: ' 1rem 2.5rem' }}>
                                    {/* <h4 className="text-center">Sign In</h4> */}
                                    <form onSubmit={onSubmitHandler} className="login-form mt-4 mb-3">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="mb-3 text-left">
                                                    <label className="form-label">
                                                        User Name <span className="text-danger">*</span>
                                                    </label>
                                                    <input
                                                        ref={userNameRef}
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Enter User Name"
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
                                                        ref={pwdRef}
                                                        type="password"
                                                        className="form-control"
                                                        placeholder="Password"
                                                        required=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 mb-0">
                                                <div className="d-grid">
                                                    <button className="btn btn-primary" type="submit"  >  LogIn </button>
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
        </>
    );
};

export default Login;
