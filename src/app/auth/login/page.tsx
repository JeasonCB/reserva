"use client"

import { useForm, SubmitHandler } from "react-hook-form"

function Page() {
    const { register, handleSubmit } = useForm();
    return (
        <div>
            <input type="email" {...register("UserPassword", { required: "True" })} />
            <input type="password" {...register("UserPassword", { required: "True" })} />
            <div>
                <button> login </button>
            </div>
        </div>
    );
}

export default Page;
