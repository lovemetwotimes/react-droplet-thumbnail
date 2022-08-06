import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import DropletThumbnail from './lib/droplet-thumbnail';



const images = [
{
  src: 'https://picsum.photos/id/1005/200',
  alt: 'lorem ipsum',
  start: 'top-left',
  end: 'bottom-right',
  id: 1,

},
{
  src: 'https://picsum.photos/id/1025/200',
  alt: 'lorem ipsum', 
  start: 'top-left',
  end: 'bottom-right',
  id: 2,
},
{
  src: 'https://picsum.photos/id/1066/200',
  alt: 'lorem ipsum',
  start: 'top-left',
  end: 'bottom-right',
  id: 3,
},
{
  src: 'https://picsum.photos/id/1074/200',
  alt: 'lorem ipsum',
  start: 'top-left',
  end: 'bottom-right',
  id: 4,
},
]


const root = ReactDOM.createRoot(document.getElementById('demo'));

function DropletsDemos() {
  return images.map(({src, alt, start, end,id}) => (
    <DropletThumbnail key={id} src={src} alt={alt} className="droplets-demo" start={start}/>
  )
  ) 
}

root.render(
  <DropletsDemos/>
);


