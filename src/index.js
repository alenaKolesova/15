import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'
import Header from './companents/Header';
import Poster from './companents/Poster';
import Description from './companents/Description';
import Actors from './companents/Actors';

const root = ReactDOM.createRoot(document.getElementById('root'));

let series = {
  'name': 'Одни из нас (Last of us)',
  'poster': 'poster.webp',
  'description': 'В конце сентября 2003 года по всей планете произошло массовое заражение людей кордицепсом. Прежде паразитировавший только на насекомых гриб приспособился выживать в человеческом теле, полностью подчиняя себе волю носителя и меняя его облик. В первый же день оказавшийся в эпицентре пандемии строитель Джоэл понёс невосполнимую утрату.',
  'actors': [
    {
      'name': 'Pedro Pascal',
      'role': 'Joel Miller',
    },
    {
      'name': 'Bella Ramsey',
      'role': 'Ellie Williams',
    },
    {
      'name': 'Anna Torv',
      'role': 'Theresa «Tess» Servopoulos',
    },
    {
      'name': 'Gabriel Luna',
      'role': 'Tommy Miller',
    },
    {
      'name': 'Lamar Johnson',
      'role': 'Henry Burrell',
    }
  ]
}

root.render(
  <div className='wrapper'>
    <div className='mobile-screen'>
      <Header text={series.name} />
      <div className='cover-description'>
        <Poster poster={series.poster} />
        <Description description={series.description} />
      </div>

      <h2>В главных ролях</h2>
      {series.actors.map((actor, index)=>
        <div className='actors' key = {index}>
          <Actors  actor={actor} />
        </div>
      )}

    </div>
  </div >
);