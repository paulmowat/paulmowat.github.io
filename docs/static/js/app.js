window.onload = function(event) { 
  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 185,
        "density": {
          "enable": true,
          "value_area": 401
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.8898936937803652,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0,
          "sync": false
        }
      },
      "size": {
        "value": 4.008530152163807,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 4,
          "size_min": 0.3,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 64.13648243462092,
        "color": "#ffffff",
        "opacity": 0.2244776885211732,
        "width": 0.6413648243462091
      },
      "move": {
        "enable": true,
        "speed": 1.603412060865523,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 600
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": false,
          "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 0,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 250,
          "size": 0,
          "duration": 2,
          "opacity": 0,
          "speed": 3
        },
        "repulse": {
          "distance": 400,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  })

  /*----------------------------------------------------*/
  /*	Make sure that #header-background-image height is
  /* equal to the browser height.
  ------------------------------------------------------ */

  document.getElementById('header-container').style.height = window.innerHeight + "px"
  window.onresize = function(event) {
    document.getElementById('header-container').style.height = window.innerHeight + "px"
    document.getElementById('header-container').style.width = window.innerWidth + "px"
  }

  /*----------------------------------------------------*/
  /*	Fade In/Out Primary Navigation
  ------------------------------------------------------*/
  window.onscroll = function(event) {
    if(window.pageYOffset > 50) {
      document.getElementById('nav').classList.add('opaque') 
    } else {
      //remove the background property so it comes transparent again (defined in your css)
      document.getElementById('nav').classList.remove('opaque') 
    }
  }
}


