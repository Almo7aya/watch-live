import VideoJS from './components/videojs';

const channels = [
  {
    name: 'Bein Sports 1',
    src: 'https://ir14.footballii.ir/hls2/bein1.m3u8',
    image: 'https://www.beinsports.com/au/static/img/logo.png',
  },
  {
    name: 'Bein Sports 2',
    src: 'https://ir14.footballii.ir/hls2/bein2.m3u8',
    image: 'https://www.beinsports.com/au/static/img/logo.png',
  },
  {
    name: 'Bein Sports 3',
    src: 'https://ir14.footballii.ir/hls2/bein3.m3u8',
    image: 'https://www.beinsports.com/au/static/img/logo.png',
  },
  {
    name: 'Bein Sports 4',
    src: 'https://af.ayassport.ir/hls2/bein4.m3u8',
    image: 'https://www.beinsports.com/au/static/img/logo.png',
  },
  {
    name: 'SCC 1',
    src: 'https://af.ayassport.ir/hls2/ssc1.m3u8',
    image: 'https://www.beinsports.com/au/static/img/logo.png',
  },
  {
    name: 'SCC 2',
    src: 'https://af.ayassport.ir/hls2/ssc2.m3u8',
    image: 'https://www.beinsports.com/au/static/img/logo.png',
  },

];

function App() {
  return (
    <div className="container mx-auto">
      {channels.map((channel) => (
        <div className='flex justify-center flex-col' key={channel.name}>
          <h2 className="text-xl text-center my-6">{channel.name}</h2>
          <VideoJS src={channel.src} />
        </div>
      ))}
    </div>
  )
}

export default App
