import React from "react";

function About() {
    return (
        <div className="about">
            <div className="container">
                <div className="row align-items-center my-5">
                    <div className="col-lg-7">
                        <img className="img-fluid rounded mb-4 mb-lg-0" src="https://i.picsum.photos/id/1048/900/400.jpg?hmac=0B75y18H3ZyiyhWcVgRDQz6XnXPnNJsOsLJ_-TMcXDY" alt="name"
                        />
                    </div>
                    <div className="col-lg-5">
                        <h1 className="font-weight-light">About</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam hic est earum quis officiis laudantium asperiores ipsam magni quod cupiditate dignissimos, aspernatur cumque totam maiores?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About