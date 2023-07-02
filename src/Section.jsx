import React from 'react';

const Section = ({ subject }) => {
    return (
        <>
            <div className="border-t border-white"></div>
            <h1  className='text-center text-6xl my-4' data-aos="fade-down-left">{subject}</h1>
            <div className="border-t border-white"></div>
        </>

    );
};

export default Section;