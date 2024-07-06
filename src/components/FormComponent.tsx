import React, {FC} from 'react';
import {useForm} from "react-hook-form";
import {IForm} from "../models/IForm";
import {postPost} from "../services/post.api.service";
import {joiResolver} from "@hookform/resolvers/joi";
import {postValidator} from "../validators/post.validator";

const FormComponent:FC = () => {

    let {
        formState:{errors, isValid},
        register,
        handleSubmit
    } = useForm<IForm>({
        mode:'all',
        resolver:joiResolver(postValidator)
    });
    return (
        <div>
            <form onSubmit={handleSubmit(postPost)}>
                <div>
                    <input type="number" {...register('userId')}/>
                    {errors.userId && <div>{errors.userId.message}</div>}
                </div>
                <div>
                    <input type="text" {...register('title')}/>
                    {errors.title && <div>{errors.title.message}</div>}
                </div>
                <div>
                    <input type="text" {...register('body')}/>
                    {errors.body && <div>{errors.body.message}</div>}
                </div>
                <button disabled={!isValid}>send</button>
            </form>
        </div>
    );
};

export default FormComponent;