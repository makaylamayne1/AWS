import './study_note_style.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';

const StudyNoteTemplate = (props) => {
        // Extract the video ID from the YouTube URL
        const videoId = new URL('https://www.youtube.com/watch?v=8PxQiTiX3mg').searchParams.get('v');

        // YouTube video options
        // YouTube video options
        const opts = {
          height: '190',
          width: '240',
          playerVars: {
            autoplay: 0, // Set to 1 for autoplay
          },
        }
      
  return (
    <div className='container'>
    <div className={props.containerStyle}>
      <div className={props.container}>
        <h1 className="titleStyle">{props.title}</h1>
        <div className="additional"></div>
        <div className='row'>
        <div className="col"><a className="col" href={props.route1}>{props.link1}</a></div>
        <div className="col"><a className="col" href={props.route2}>{props.link2}</a></div>
        <div className="col"><a className="col" href={props.route3}>{props.link3}</a></div>
        <div className="col"><a className="col" href={props.route4}>{props.link4}</a></div>
        <div className="col"><a className="col" href={props.route5}>{props.link5}</a></div>
        </div>
        <p className="paragraphStyle">{props.paragraph1}</p>
        <p className="paragraphStyle">{props.paragraph2}</p>
        <p className="paragraphStyle">{props.paragraph3}</p>
        <p className="paragraphStyle">{props.paragraph4}</p>
        <p className="paragraphStyle">{props.paragraph5}</p>
      </div>
      </div>
    </div>
  );
};

export default StudyNoteTemplate;
