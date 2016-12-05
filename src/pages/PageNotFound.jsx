import React from 'react';
import {Link} from 'react-router';

const PageNotFound = () =>(
    <div className="page-404">
        <div className="container">
            <h1>404</h1>
            <Link to="/">
                <button className="btn bg-primary"> Trở về trang chủ </button>
            </Link>
        </div>
    </div>
);

export default PageNotFound;