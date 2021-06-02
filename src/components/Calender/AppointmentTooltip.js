import React from 'react';
import Tooltip from 'devextreme-react/tooltip';

export default class AppointmentTooltip extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movieData: ""
        };
    }

    render() {
        const { movieData } = this.state;
        return (
            <div className="movie-tooltip">
                {/* <img src={movieData.image} /> */}
                <div className="movie-info">
                    <div className="movie-title">
                        test
                        {/* {movieData.text} ({movieData.year}) */}
                    </div>
                    <div>
                        Appointment:
                    </div>
                    <div>
                        Duration:  minutes
          </div>
                </div>
            </div>
        );
    }
}