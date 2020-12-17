AFRAME.registerComponent('vaca', {
    init: function () {
      this.el.sceneEl.addEventListener('markerFound', () => {
        // redirect to custom URL e.g. google.com
        console.log('Se encontro el marcador de la vaca');
      })
    }
});
AFRAME.registerComponent('abeja', {
    init: function () {
      this.el.sceneEl.addEventListener('markerFound', () => {
        // redirect to custom URL e.g. google.com
        console.log('Se encontro el marcador de la abeja');
      })
    }
});
AFRAME.registerComponent('oso', {
    init: function () {
      this.el.sceneEl.addEventListener('markerFound', () => {
        // redirect to custom URL e.g. google.com
        console.log('Se encontro el marcador del oso');
      })
    }
});
AFRAME.registerComponent('rex', {
    init: function () {
      this.el.sceneEl.addEventListener('markerFound', () => {
        // redirect to custom URL e.g. google.com
        console.log('Se encontro el marcador del rex');
      })
    }
});
AFRAME.registerComponent('tiburon', {
    init: function () {
      this.el.sceneEl.addEventListener('markerFound', () => {
        // redirect to custom URL e.g. google.com
        console.log('Se encontro el marcador del tiburon');
      })
    }
});