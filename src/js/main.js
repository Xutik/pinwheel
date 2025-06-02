const scene = document.querySelector('a-scene');

const pinwheelTags = ['v', 's', 'y', 'k'];

pinwheelTags.forEach(tag => {
    const pinwheel = document.createElement('a-entity');
    pinwheel.setAttribute('geometry', {
        primitive: 'cylinder',
        radiusBottom: 0.1,
        radiusTop: 0.1,
        height: 0.5
    });
    pinwheel.setAttribute('material', {
        color: 'hsl(' + Math.random() * 360 + ', 100%, 50%)'
    });
    pinwheel.setAttribute('position', {
        x: Math.random() * 4 - 2,
        y: 0,
        z: Math.random() * 4 - 2
    });
    pinwheel.setAttribute('tag', tag);
    
    pinwheel.addEventListener('click', () => {
        pinwheel.setAttribute('animation', {
            property: 'rotation',
            to: '0 360 0',
            loop: true,
            dur: 1000
        });
        const sound = new Audio('assets/music.m4a');
        sound.play();
    });

    scene.appendChild(pinwheel);
});