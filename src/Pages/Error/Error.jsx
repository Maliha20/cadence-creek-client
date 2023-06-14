import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import errorpic from '../../assets/New folder/—Pngtree—error 404 glitch effect_6033747.png'
const Error = () => {
    
    const { error, status } = useRouteError()
    return (
        <div className='flex justify-center items-center h-screen p-16 bg-stone-200 text-blue-950'>
        <div className='flex flex-col items-center justify-center my-8'>
             <img className='w-96 h-1/2' src={errorpic} alt="" />

            <div className='max-w-md text-center'>
                <h2 className='mb-8 font-extrabold text-9xl text-gray-600'>
                    <span className='sr-only'>Error</span> {status || 404}
                </h2>
                <p className='text-2xl font-semibold md:text-3xl mb-8'>
                    {error?.message}
                </p>
                <Link
                    to='/'
                    className='px-6 py-4 my-8 font-semibold rounded bg-blue-800 text-blue-50'
                >
                    Let's go home
                </Link>
            </div>
        </div>
    </div>
    );
};

export default Error;