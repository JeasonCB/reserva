"use client"
import { useForm } from "react-hook-form"
const inputStyle = "p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
const labelStyle = "font-bold"
const buttonStyle = "w-full bg-blue-500 text-white p-3 rounded-lg mt-2"
function Page() {
    const { register, handleSubmit, formState:{errors} } = useForm();
    const onSubmit = handleSubmit((data) => {
        console.log(data);
    });
    return (
        <div className="h-[calc(100dvh-7rem)] flex justify-center items-center">
            <form onSubmit={onSubmit} className="w-1/4">
                <h1 className="text-slate-600 font-bold text-4xl mb-4">Register</h1>
                
                <label className={labelStyle} htmlFor="usename"> User name</label>
                <input type="text" {...register("UserName", {required: {value: true,message: "This field is required"}
                })} className={inputStyle}
                />
                {errors.UserName?.message && <p className="text-red-500 text-sm">{errors.UserName.message.toString()}</p>}
                
                
                <label className={labelStyle} htmlFor="usename"> Email</label>
                <input type="email" {...register("UserEmail", {
                    required: {
                        value: true,
                        message: "This field is required"
                    }
                })} className={inputStyle} />
                {errors.UserName?.message && <p className="text-red-500 text-sm">{errors.UserName.message.toString()}</p>}

                <label className={labelStyle} htmlFor="usename"> Password</label>
                <input type="password" {...register("UserPassword", { required: {
                        value: true,
                        message: "This field is required"
                }
                })} className={inputStyle} />
                {errors.UserName?.message && <p className="text-red-500 text-sm">{errors.UserName.message.toString()}</p>}

                <label className={labelStyle} htmlFor="usename"> Confirm Password</label>
                <input type="password" {...register("ConfirmUserPassword", { required: {
                        value: true,
                        message: "This field is required"
                }
                })} className={inputStyle} />
                {errors.UserName?.message && <p className="text-red-500 text-sm">{errors.UserName.message.toString()}</p>}


                <div>
                    <button className={buttonStyle}> register </button>
                </div>
            </form>
        </div>
    );
}

export default Page;
