import React, { Component } from 'react';
import axios from 'axios'
import Article from '../Components/Article'
import Aside from './Aside';
import Song from '../song/Song.mp3'

class Input extends Component {
    
    constructor() {
        super();
        this.state = {
            inputValue: '',
            data: '',
            id: '',
            youtubeKey: '',
            messageErreur:''
        };
      }

    catchInputValue = e => {
        this.setState({ inputValue: e.target.value });
    }
    triggerAnimation = () => {
        const song = new Audio(Song);
        song.play();
        const imgElt = document.getElementById('n');
        imgElt.style.animation = 'slidein 1s forwards';
    }

    getIdByName = () => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=bb0105f9055d6811788f058a74e8a71d&language=fr&query=${this.state.inputValue}&page=1&include_adult=false`)
        .then(res => {
            this.setState({data : res.data});
            this.setState({id : res.data.results[0].id})
            this.getVideoTag()
            this.triggerAnimation()
          })
          .catch(err => this.setState({messageErreur: "Aller cherche mieux je sais que tu peux le faire"}))
    }
    
    getVideoTag = () => {
        axios.get(`https://api.themoviedb.org/3/movie/${this.state.id}/videos?language=fr&api_key=bb0105f9055d6811788f058a74e8a71d`)
        .then(res => {
            this.setState({youtubeKey: res.data.results[0].key})
        })
        .catch(err => this.setState({messageErreur: "Aller cherche mieux je sais que tu peux le faire"}))
    }

    render() {
        return (
            <div>
                <div id='input'>
                <input type="text" value={this.state.inputValue} onChange={this.catchInputValue}></input>
                <button onClick={this.getIdByName}>GO!</button>
            </div>
                <Article details={this.state}/>
                <Aside details={this.state}/>
            </div>
        );
    }
}

export default Input;

