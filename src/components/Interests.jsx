import React from 'react';
import { Fade } from 'react-awesome-reveal';

function Interests(props) { // Added props
  return (
    <div id="interests" className="page" /* data-magellan-target="interests" */>
      <h1>Interests</h1><br />
      <h2>Photography</h2>
      <p className="text-justify">There are so many wonderful things around us that we take for granted.
        Through photography, I hope to bring these to attention, so that everyone can appreciate its beauty. The photos you find on this site are some of my work. If you are a fellow photographer, connect with me on 500px.</p>
      <div className="row align-middle" id="photos">
        <div className="small-3 columns" id="image-thumb-1">
          <Fade triggerOnce duration={100}><a onClick={props.openChicagoModal} style={{cursor: 'pointer'}}><img className="thumbnail" width="70%" src="/images/chicago.jpg" alt="Chicago" /></a></Fade>
        </div>

        <div className="small-3 columns" id="image-thumb-2">
          <Fade triggerOnce duration={300}><a onClick={props.openSunsetModal} style={{cursor: 'pointer'}}><img className="thumbnail" src="/images/sunset.jpg" alt="Sunset" /></a></Fade>
        </div>

        <div className="small-3 columns" id="image-thumb-3">
          <Fade triggerOnce duration={500}><a onClick={props.openHarborModal} style={{cursor: 'pointer'}}><img className="thumbnail" src="/images/harbor.jpg" alt="Boston Harbor" /></a></Fade>
        </div>

        <div className="small-3 columns" id="image-thumb-4">
          <Fade triggerOnce duration={700}><a onClick={props.openBridgeModal} style={{cursor: 'pointer'}}><img className="thumbnail" src="/images/bridge.jpg" alt="Boston bridge in the Sunset" /></a></Fade>
        </div>
      </div>
      <br /><h2>Music</h2>
      <p className="text-justify">Music is one of the things that I cannot live without. It sets the pace of my day and sometimes even inspires me. If I like a song, I learn the lyrics by the next day. I&apos;m also an occasional singer, connect with me on SoundCloud to listen to some of my tracks.</p>
      <br /><h2>Travel</h2>
      <p className="text-justify">New Places, New Experiences. I have been travelling most of my life. It is difficult to find a place that I haven&apos;t been to in the cities that I have lived in. Most of my snaps are from my travels.</p>
    </div>
  );
}

export default Interests;
