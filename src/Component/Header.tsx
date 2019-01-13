import * as React from 'react'
import Particles from 'react-particles-js'
import './Header.css'

export default class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <Particles
          className="App-particle"
          params={{
            particles: {
              number: {
                value: 80,
                density: {
                  enable: true,
                  value_area: 1000
                }
              },
              color: {
                value: '#ffffff'
              },
              shape: {
                type: 'circle',
                stroke: {
                  width: 0,
                  color: '#7e8184'
                },
                polygon: {
                  nb_sides: 5
                }
              },
              opacity: {
                value: 0.5,
                random: true,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false
                }
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  enable: false,
                  speed: 50,
                  size_min: 0.1,
                  sync: false
                }
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: '#7e8184',
                opacity: 0.4,
                width: 0.5
              },
              move: {
                enable: true,
                speed: 5,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200
                }
              }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                  onhover: {
                    enable: true,
                    mode: 'grab'
                  },
                  onclick: {
                    enable: true,
                    mode: 'push'
                  },
                  resize: true
                },
                modes: {
                  grab: {
                    distance: 140,
                    line_linked: {
                      opacity: 1
                    }
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4
                  },
                  push: {
                    particles_nb: 4
                  },
                  remove: {
                    particles_nb: 2
                  }
                }
            }
          }}
        />
        <div
          className="App-header-body"
          data-aos="flip-right"
          data-aos-anchor-placement="center-center"
          data-aos-duration="3000"
        >
          <div className="App-logo" />
          <div className="App-header-info">
            <h2 className="App-title">Nguyen Trung Duc</h2>
            <h2 className="App-subtitle">Software Developer</h2>
            <h2 className="App-subtitle">nguyentrungduc08@gmail.com</h2>
          </div>
        </div>
      </header>
    )
  }
}
