import React from "react";

function Home() {
    return (
        <div className="home">
            <div className="container">
                <div className="row align-items-center my-5">
                    <div className="col-lg-7">
                        <img class="img-fluid rounded mb-4 mb-lg-0" 
                        src="https://i.picsum.photos/id/1037/900/400.jpg?hmac=QcjNl48cKsn8x3bOuYEdPliJsSZo_8VxHxRrLWtM5Kg" alt="name" 
                        />
                    </div>
                    <div className="col-lg-5">
                        <h1 className="font-weight-light">Home</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quos commodi eveniet, consectetur eos modi dolore saepe repudiandae quaerat recusandae ipsa consequuntur autem sunt quibusdam.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;