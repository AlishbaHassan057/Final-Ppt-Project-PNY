import React from 'react'
import SubBlog from './SubBlog'


const Blogs = () => {
    return (
        <>
            <div className="container mx-auto text-center mt-5">
                <h5>Our Blog</h5>
                <h1>Latest Blog & Articles</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="row">
                    <SubBlog />
                </div>

            </div>



        </>
    )
}

export default Blogs