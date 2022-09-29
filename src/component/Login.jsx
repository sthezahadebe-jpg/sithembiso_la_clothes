import React from 'react';
import "../App.css";


const Login = () => {
    return (
        <div className='group'>
            <section>
                <form>
                    <div className="h3 mb-3 fw-normal">Please sign in</div>

                    <div className="form-floating">
                        <div>
                            Email Address
                            <input type="email" className="form-control" id="floatingInput" placeholder="Email Address..." />
                        </div>

                    </div>
                    <br />
                    <div className="form-floating">
                        <div>
                            Password
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password..." />
                        </div>
                    </div>

                    <div className="checkbox mb-3">
                        <div>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </div>
                    </div>

                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>

                </form>
            </section>
        </div>
    )
};

export default Login;