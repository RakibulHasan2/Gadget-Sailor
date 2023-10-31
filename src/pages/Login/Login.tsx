import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function Login() {
    
    const { register, handleSubmit } = useForm(); //formState: { errors }
   
    const handleLogin = (data: object) => {
       console.log(data);
    }

    return (
        <div className='lg:flex justify-center items-center'>
            <div>
                <img className='w-96 h-1/3' src="https://clipart.world/wp-content/uploads/2020/06/guy-doing-homework-with-laptop-1.jpg" alt="" srcSet="" />
            </div>
            <div className='w-96 p-7'>
                <h2 className='text-3xl text-sky-500 font-bold text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="text"
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {/* {errors.email && <p className='text-red-600'>{errors.email?.message}</p>} */}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        <label className="label"> <span className="label-text">Forget Password?</span></label>
                        {/* {errors.password && <p className='text-red-600'>{errors.password?.message}</p>} */}
                    </div>
                    <input className='btn bg-blue-600 w-full' value="Login" type="submit" />
                    <div>
                        {/* {loginError && <p className='text-red-600'>{loginError}</p>} */}
                    </div>
                </form>
                <p>New to Gadget Sailor <Link className='text-sky-500 font-bold' to="/signup">Create new Account</Link></p>
                <div className="divider">OR</div>
                {/* <button onClick={googleSignIn} className='btn btn-outline w-full'>Continue With Google <FcGoogle className='ml-3'></FcGoogle></button> */}
            </div>
        </div>
    )
}
