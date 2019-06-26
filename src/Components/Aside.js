import React, { Component } from 'react';


class Aside extends Component {
    
    render() {
        if(this.props.details.youtubeKey) {
            return (
                <div id="aside">
                    {this.props.details.data.results.map((result) =>    
                    <div className="aside-card" key={Math.random()}>
                        <h2>{result.title}</h2>
                        <img src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}></img>
                        <p>{result.overview}</p>
                    </div>
                        )}
                </div>
            );
        }else {
            return <div></div>
        }
    }
}

export default Aside;