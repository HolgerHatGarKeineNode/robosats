import React from 'react';

export default function MapPin(color: 'Blue' | 'Lilac') {
  const lightHex = color === 'Blue' ? '#bde4f8;' : '#c55fcc';

  return `<svg id='Capa_1' data-name='Capa 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18.66 29.68'><defs><style>.cls-1{fill:${lightHex};}.cls-2{fill:#fff;}</style></defs><path class='cls-1' d='M18,8A9.13,9.13,0,0,0,10.89.62,10.88,10.88,0,0,0,9.33.49,10.88,10.88,0,0,0,7.77.62,9.13,9.13,0,0,0,.66,8a12.92,12.92,0,0,0,1.19,8.25C2.68,18.09,7.47,27.6,9.07,29c0,.12.11.19.19.19l.07,0,.07,0c.08,0,.15-.07.19-.19,1.6-1.41,6.39-10.92,7.22-12.8A12.92,12.92,0,0,0,18,8Z'/><path d='M9.23,29.6a.57.57,0,0,1-.5-.35C7,27.57,2.24,18.09,1.48,16.38A13.57,13.57,0,0,1,.26,7.87C1.18,3.78,4,.92,7.7.23h0A8.38,8.38,0,0,1,11,.24h0c3.74.69,6.52,3.55,7.44,7.64a13.57,13.57,0,0,1-1.22,8.51c-.76,1.71-5.5,11.19-7.25,12.87a.57.57,0,0,1-.55.35H9.23ZM8,1,7.85,1a8.68,8.68,0,0,0-6.8,7C.5,10.52.86,13,2.22,16.05c.9,2,5.62,11.32,7.11,12.65,1.49-1.33,6.21-10.63,7.11-12.65,1.36-3.07,1.72-5.53,1.17-8h0a8.68,8.68,0,0,0-6.8-7l-.12,0A10.47,10.47,0,0,0,9.33.89,10.3,10.3,0,0,0,8,1Z'/><rect x='3.12' y='6.34' width='12.53' height='7.76' rx='3.88'/><rect class='cls-2' x='5.02' y='7.82' width='2.16' height='2.34' rx='1.02'/><rect class='cls-2' x='11.25' y='7.82' width='2.16' height='2.34' rx='1.02'/><path class='cls-2' d='M9.24,12.76A3.57,3.57,0,0,1,7,12a.4.4,0,1,1,.53-.61,2.78,2.78,0,0,0,3.49,0,.4.4,0,0,1,.48.65A3.71,3.71,0,0,1,9.24,12.76Z'/></svg>`;
}
