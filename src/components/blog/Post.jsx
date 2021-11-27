import React, { useEffect } from "react";
import { useParams } from "react-router";

function Post() {
    let { postSlug } = useParams();
    useEffect(() =>{
        //Fetch post using the postSlug
    }, [postSlug]);

    return(
        <div className="home">
            <div class="container">
                <h1 className="mt-5">This is a Post Tittle</h1>
                <h6 className="mb-5">The post slug is, {postSlug}</h6>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque doloribus magni molestiae a dolor laudantium quidem blanditiis dolorem accusamus molestias. Magni quos in repellat commodi.
                </p>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque doloribus magni molestiae a dolor laudantium quidem blanditiis dolorem accusamus molestias. Magni quos in repellat commodi.
                </p>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque doloribus magni molestiae a dolor laudantium quidem blanditiis dolorem accusamus molestias. Magni quos in repellat commodi.
                </p>
            </div>
        </div>
    );
}

export default Post;