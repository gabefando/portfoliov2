import React from "react";

function Projects() {
    return(
        <div>
            <div className="mt-5 mb-4 text-center">
                <h1  id="projects">Projects</h1>
            </div>

            <div className="container text-dark">
                <div className="card-group">
                        <div className="card">
                            <img className="card-img-top" src="https://github.com/gabefando/travel-website/raw/main/images/Troogle_Index.png" alt=""/>
                            <div className="card-body">
                                <h4 className="card-title">Troogle</h4>
                                <p className="card-text">
                                    Troogle is an interactive website that lets you quickly search for hotels and it has a currency conversion calculator.
                                    <strong>The tools used to make this site were HTML, CSS, Bootstrap, JavaScript, and 2 free APIs.</strong> 
                                </p>
                            </div>
                            <div className="card-body">
                                <a href="https://github.com/gabefando/travel-website" class="btn btn-secondary">GitHub Repo</a>
                                <a href="https://gabefando.github.io/travel-website/" class="btn btn-secondary">Launched Site</a>
                            </div>
                        </div>


                        <div className="card">
                            <img className="card-img-top" src="https://github.com/gabefando/workday-scheduler/raw/main/screenshot.png" alt="" />
                            <div className="card-body">
                                <h4 className="card-title">Workday Scheduler</h4>
                                <p className="card-text">
                                    Schedule events during the business hours of 9am to 5pm. Events will save to your localstorage so 
                                    if you refresh the page they remain. Events are color coded for past, present, and future.
                                    <strong>The tools used to make this site were HTML, CSS, Bootstrap, JavaScript, and Moment.js.</strong> 
                                </p>
                            </div>
                            <div className="card-body">
                                <a href="https://github.com/gabefando/workday-scheduler" class="btn btn-secondary">GitHub Repo</a>
                                <a href="https://gabefando.github.io/workday-scheduler/" class="btn btn-secondary">Launched Site</a>
                            </div>
                        </div>

                        <div className="card">
                            <img className="card-img-top" src="https://github.com/gabefando/robofriends/raw/main/src/assets/image/screenshot.jpeg" alt=""/>
                            <div className="card-body">
                                <h4 className="card-title">Robofriends</h4>
                                <p className="card-text">
                                    Project made from udemy react course I did. Allows you to search through a "friends list" of robots. 
                                    <strong>The tools used to make this site were React and Tachyons.</strong> 
                                </p>
                            </div>
                            <div className="card-body">
                                <a href="https://github.com/gabefando/robofriends" class="btn btn-secondary">GitHub Repo</a>
                                <a href="https://gabefando.github.io/robofriends/" class="btn btn-secondary">Launched Site</a>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;