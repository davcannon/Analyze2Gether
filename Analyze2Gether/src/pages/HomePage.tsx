import React from 'react';

export default function HomePage() {
    return (
        <div
            style={{
                fontFamily: 'Arial, sans-serif',
                padding: '20px',
                maxWidth: '80rem',
                margin: '0 auto', // Center container within the page
            }}
        >

            {/* Main Content */}
            <div style={{textAlign: 'left', marginBottom: '40px'}}>
                <h2>Dataset Dashboard</h2>
                <h3>Hi Logan 👋</h3>
            </div>

            {/* Section with Individual Cards */}


            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    marginBottom: '40px',
                }}
            >

                <div className="card-homepage-grid">
                    <div>
                        <img src={require('../assets/images/Star.png')} />
                    </div>
                    <div>
                        <h2>VLE versus Grades</h2>
                        <p>Study of student participations with VLE and their corresponding grades</p>
                    </div>
                    <button className={"card-homepage-button"}>DE</button><button className={"card-homepage-button"}>CDL</button>
                </div>
                <div className="card-homepage-grid">
                    <div>
                        <img src={require('../assets/images/Star.png')}/>
                    </div>
                    <div>
                        <h2>VLE versus Grades</h2>
                        <p>Study of student participations with VLE and their corresponding grades</p>
                    </div>
                    <button className={"card-homepage-button"}>DE</button><button className={"card-homepage-button"}>CDL</button>

                </div>
                <div className="card-homepage-grid">
                    <div>
                        <img src={require('../assets/images/Star.png')}/>
                    </div>
                    <div>
                        <h2>VLE versus Grades</h2>
                        <p>Study of student participations with VLE and their corresponding grades</p>
                    </div>
                    <button className={"card-homepage-button"}>DE</button><button className={"card-homepage-button"}>CDL</button>
                </div>
            </div>


            {/* Notification Heading */}
            <div
                style={{
                    fontFamily: 'Lato, sans-serif',
                    textAlign: 'left',
                    marginBottom: '20px',
                }}
            >
                <h2>Notifications</h2>
            </div>

            {/* Notifications Section */}
            <div className="card-homepage-notifications">
                <ul style={{listStyleType: 'disc', paddingLeft: '20px'}}>
                    <li>
                        <strong>Sia annotated on VLE vs Grades {'>'} courses:</strong> We can see an inflection here.
                    </li>
                    <li>
                        <strong>Will annotated on VLE vs Grades {'>'} courses:</strong> Positive, upward trend observed
                        here.
                    </li>
                </ul>
            </div>
        </div>
    );

}