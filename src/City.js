import React from 'react';
import { Link } from 'react-router-dom';
function City() {
  const cityInfo = {
    name: "Одесса",
    country: "Украина",
    yearFounded: 1794,
    images: [
      'https://24tv.ua/resources/photos/news/201909/1212591.jpg?v=1661273169000',
      'https://34travel.me/media/posts/60f8145af1bdd-1500-rus.jpg',
      'https://34travel.me/media/upload/images/2021/JULY/odessa/IMG_5371.jpg'
    ]
  };

  return (
    <div className="city-info">
      <h1>{cityInfo.name}</h1>
      <p>Страна: {cityInfo.country}</p>
      <p>Год основания: {cityInfo.yearFounded}</p>
      <div className="city-images">
        {cityInfo.images.map((url, index) => (
          <img key={index} src={url} alt={`Одесса ${index + 1}`} />
        ))}
      </div>
      <Link className="App-link" to="/">
        Back
      </Link>
    </div>
  );
}

export default City;
