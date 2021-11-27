import React from "react";
import { Link } from "react-router-dom"

function Posts() {
    return (
        <div className="home">
            <div class="container">
                <Link to="/blog/this-is-a-post-tittle">
                    <div class="row align-items-center my-5">
                        <div class="col-lg-7">
                            <img class="img-fluid rounded mb-4 mb-lg-0" src="https://i.picsum.photos/id/1074/900/400.jpg?hmac=hz1DdwP8b0r7Ifq7G7Dv3obK4KMOD-GnO-la5Cc-ZHw" alt="name"
                            />
                        </div>
                        <div class="col-lg-5">
                            <h1 class="font-weight-light">This is a post tittle random</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eligendi dolores iusto officiis quaerat, soluta animi ea magni minima facere odit, fugiat, expedita provident. Odio.
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Posts