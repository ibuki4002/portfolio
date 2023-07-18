/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { ClipLoader } from 'react-spinners';



const Preloader = (props) => {
    const { load } = props;
    return (
        <div id={load ? "preloader" : "preloader-none"}>
            <ClipLoader size={100} color={'#1fc2ff'} loading={true} />
        </div>
    );
};

export default Preloader;
