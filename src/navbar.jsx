import React, { Component } from "react";
// import PropTypes from 'prop-types';

class Navbar extends Component {
    render() {
        const style = {
            position: "relative",
        };
        return (
            <>
                <div
                    className="navbar navbar-floating navbar-bordered navbar-glass	navbar-primary"
                    style={style}
                >
                    <div className="navbar-start">
                        <a className="navbar-item">News Junkeyy</a>
                    </div>
                    <div className="navbar-end">
                        <a className="navbar-item">Home</a>
                       
                    </div>
                </div>
            </>
        );
    }
}

Navbar.propTypes = {
    // Your PropTypes here
};

export default Navbar;
