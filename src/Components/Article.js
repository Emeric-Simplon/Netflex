import React, { Component } from 'react';


class Article extends Component {
    render() {
            if (this.props.details.youtubeKey) {
                return (
                <article>
                    <iframe src={`http://www.youtube.com/embed/${this.props.details.youtubeKey}`} controls></iframe>
                </article>
                )
              }else if (this.props.details.messageErreur){
                  return(
                    <p>{this.props.details.messageErreur}</p>
                  );
              }
              return (
              <article>
                  <p>Vous n'avez pas recherché de video pour le moment</p>
              </article>
              );
            }
    }

export default Article;