import React from 'react';
import Particles from 'react-particles-js';

import particlesConfig from './particlesConfig';
import SpringCard from '../../components/SpringCard';

import './index.css';

function Home() {
  return (
    <div className="home">
      <Particles
        params={particlesConfig}
        height={window.innerHeight}
        style={{ display: 'block' }}
      />
      <div className="content">
        <SpringCard />
      </div>
    </div>
  );
}

export default Home;
