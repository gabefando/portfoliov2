import React from "react";

function Articles() {
    return(
        <div>
            <div className="mt-5 mb-4 text-center">
                <h1 id="articles">Articles</h1>
            </div>
            <div className="d-flex justify-content-center text-center mt-2">
                <div className="px-2">
                    <a type="button" className="btn btn-secondary" href="https://gist.github.com/gabefando/8ec6bae4835a3364f16014d38e84034c">Regex Tutorial: Email Matching</a>
                </div>
            </div>
        </div>
    )
}

export default Articles;