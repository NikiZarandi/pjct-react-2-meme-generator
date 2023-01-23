import './style.css';
import { saveAs } from 'file-saver';
//import './App.css';
import React, { useState } from 'react';

export default function App() {

  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [MemeTemplate, setMemeTemplate] = useState('');
  const [memes, setMemes] = useState([]);

function handleTopChange(e) {
  setTopText(e);
}

function handleBottomChange(e) {
  setBottomText(e);
}

function handleMemeTemplateChange(e) {
  setMemeTemplate(e);
}

  return (
    <main>
      <section>
          <div>
          <h1 className='name'>MEMES GENERATOR</h1>


  <br />

    <label>topText
          <input
            type='text'
              className='input'
                name='top text'
                value={topText}
                  placeholder='top text'
                onChange={(e) => handleTopChange(e.target.value)}
  />
    </label>

  <br />
  <br />

    <label>bottomText
        <input
          type='text'
            className='input'
              name='bottom text'
                value={bottomText}
                    placeholder='bottomText'
          onChange={(e) => handleBottomChange(e.target.value)}
  />
    </label>

  <br />
  <br />

    <label>meme template
        <input
            type='text'
              className='meme template'
                placeholder='meme template'
            onChange={(e) => handleMemeTemplateChange(e.target.value)}
  />
    </label>


    <button
       onClick={()=>
       saveAs (`https://api.memegen.link/images/${MemeTemplate}/${topText}/${bottomText}`, 'image.jpg'
       )
    }
      >
      download
    </button>

                <br />
                <br />
                <br />
            <img
            data-test-id="meme-image"
              src={`https://api.memegen.link/images/${MemeTemplate}/${topText}/${bottomText}`}
            alt='memes'
              />
            </div>
        </section>
      </main>
  );
 }
