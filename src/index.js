import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import DropletThumbnail from './lib/droplet-thumbnail';



const images = [
{
  src: 'https://picsum.photos/id/1005/500',
  alt: 'lorem ipsum',
  maxwidth: "500px",
  padding: '16px',
  color: '#EBD1AA',
  keepimagesize: true,
  transitioninsteadrotation: true,
},
{
  src: 'https://picsum.photos/id/1025/300',
  alt: 'lorem ipsum', 
  start: 'bottom-left',
  rotationangle: '180',
  maxwidth: "250px",
  padding: '32px',
  color: '#62744C',
  keepimagesize: false,
  transitioninsteadrotation: true,
  imagescale: 1.2,
},
{
  src: 'https://picsum.photos/id/1066/160',
  alt: 'lorem ipsum',
  start: 'top-right',
  rotationangle: '180',
  maxwidth: "150px",
  padding: '8px',
  color: '#627391',
  keepimagesize: true,
  transitioninsteadrotation: false,
},
{
  src: 'https://picsum.photos/id/1074/250',
  alt: 'lorem ipsum',
  start: 'top-left',
  rotationangle: '-180',
  maxwidth: "230px",
  padding: '48px',
  color: '#D6D6D6',
  imagescale: 1.5,
  imagerotation: '0deg',

},
{
  src: 'https://picsum.photos/id/1075/200',
  alt: 'lorem ipsum',
  start: 'top-left',
  rotationangle: '-270',
  maxwidth: '180px',
  padding: '16px',
  color: 'darkgray',
  keepimagesize: false,
  transitioninsteadrotation: false,
},

{
  src: 'https://picsum.photos/id/1028/200',
  alt: 'lorem ipsum',
  maxwidth: "250px",
},

{
  src: 'https://picsum.photos/id/1015/1280',
  alt: 'lorem ipsum',
  keepimagesize: true,
  color: '#007CC9',

},

]


const root = ReactDOM.createRoot(document.getElementById('demo'));

function DropletsDemos() {
  return images.map((settings, index) => (
    <div key={index}>
      <ul className="description">
      {Object.entries(settings).map(([key,value], index)=>
      (
        <li key={index}>{`${key}: ${value}`}</li>
      )
      )}
      </ul>
      <DropletThumbnail 
        className="droplets-demo"
        {...settings}
        />
    </div>
  )
  ) 
}

root.render(
  <DropletsDemos/>
);


