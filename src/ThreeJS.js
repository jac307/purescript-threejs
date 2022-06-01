"use strict";

// Scene

export const newScene = () => new THREE.Scene();


// PerspectiveCamera

export const newPerspectiveCamera = fov => aspect => near => far => () => new THREE.PerspectiveCamera(fov,aspect,near,far);

export const setAspect = pCamera => aspect => () => pCamera.aspect = aspect;


// Renderer

export const newWebGLRenderer = params => () => new THREE.WebGLRenderer(params);

export const render = renderer => scene => camera => () => renderer.render(scene,camera);

export const setSize = renderer => w => h => updateStyle => () => renderer.setSize(w,h,updateStyle);


// 3D object Loaders

// note the rather weird handling of the callback in the line below...
// ... seems to be necessary when we try to pass a callback with argument from PureScript
//                              url              cb
// foreign import loadGLTF :: String -> (GLTF -> Effect Unit) -> Effect Unit

export const loadGLTF = url => cb => () => new THREE.GLTFLoader().load(url,x => cb(x)());

// const loader = new GLTFLoader().load('url', function (gltf){});

export const loadMTL = url => cb => () => new THREE.MTLLoader().load(url,x => cb(x)());

// var mtlLoader = new MTLLoader().load("url", function (materials){});

export const loadOBJ = url => cb => () => new THREE.OBJLoader().load(url,x => cb(x)());


//////////

export const addAnythingToScene = scene => anything => () => scene.add(anything);

export const setPositionOfAnything = thing => x => y => z => () => thing.position.set(x,y,z);

export const setRotationOfAnything = thing => x => y => z => () => thing.rotation.set(x,y,z);

export const setScaleOfAnything = thing => x => y => z => () => thing.scale.set(x,y,z);

export const setRepeatOfAnything = thing => u => v => () => thing.repeat.set(u,v);

export const preloadAnything = elem => () => elem.preload = "auto";

export const playAnything = thing => () => thing.play();

export const printAnything = thing => () => console.log(thing);

// LIGHTS

export const newHemisphereLight = skyColor => groundColor => intensity => () => new THREE.HemisphereLight(skyColor,groundColor,intensity);

export const newAmbientLight = rgb => intensity => () => new THREE.AmbientLight(rgb,intensity);

export const newDirectionalLight = rgb => intensity => () => new THREE.DirectionalLight(rgb,intensity);

export const newPointLight = rgb => intensity => distance => decay => () => new
THREE.PointLight(rgb,intensity,distance,decay);

//

export const newPolarGridHelper = radius => radials => circles => divisions => () => new THREE.PolarGridHelper(radius,radials,circles,divisions)

export const windowInnerWidth = () => window.innerWidth;

export const windowInnerHeight = () => window.innerHeight;

export const newAnimationMixer = object3D => () => new THREE.AnimationMixer(object3D);

export const updateAnimationMixer = mixer => delta => () => mixer.update(delta);

export const clipAction = animationMixer => clip => () => animationMixer.clipAction(clip);

export const setEffectiveTimeScale = action => t => () => action.setEffectiveTimeScale(t);


export const requestAnimationFrame = callback => () => window.requestAnimationFrame(callback)

// TEXTURE

// loading

export const textureLoader = url => () => new THREE.TextureLoader().load(url);

export const createElement = name => () => document.createElement(name);

export const srcOfElement = elem => url => () => elem.src = url;

export const getElementById = idName => () => document.getElementById(idName);

export const videoTexture = videoElem => () => new THREE.VideoTexture(videoElem);

// changing

export const clampToEdgeWrapping = THREE.ClampToEdgeWrapping

export const repeatWrapping = THREE.RepeatWrapping

export const mirroredRepeatWrapping = THREE.MirroredRepeatWrapping

export const wrapS = texture => wrap => () => texture.wrapS = wrap;

export const wrapT = texture => wrap => () => texture.wrapT = wrap;

export const nearestFilter = THREE.NearestFilter;

export const linearFilter = THREE.LinearFilter;

export const minFilter = texture => filter => () => texture.minFilter = filter;

export const magFilter = texture => filter => () => texture.magFilter = filter;

// video settings

export const loop = videoElem => bool => () => videoElem.loop = bool;

export const muted = videoElem => bool => () => videoElem.muted = bool;

export const volume = videoElem => float => () => videoElem.volumen = float;

export const autoplay = videoElem => bool => () => videoElem.autoplay = bool;
