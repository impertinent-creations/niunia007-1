/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "both",
    centerStage: "horizontal",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'niunia007-1',
                type: 'rect',
                rect: ['-160', '33','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'niunia007-1',
                symbolName: 'niunia007-1'
            }
            ]
        },
    states: {
        "Base State": {
            "${_niunia007-1}": [
                ["style", "left", '-35px'],
                ["style", "top", '16px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '1213px'],
                ["style", "height", '753px'],
                ["style", "overflow", 'visible']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3750,
            autoPlay: true,
            timeline: [
                { id: "eid37", tween: [ "style", "${_niunia007-1}", "left", '-35px', { fromValue: '-35px'}], position: 0, duration: 0 },
                { id: "eid39", tween: [ "style", "${_niunia007-1}", "top", '16px', { fromValue: '16px'}], position: 0, duration: 0 },
                { id: "eid35", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_niunia007-1}', [] ], ""], position: 0 }            ]
        }
    }
},
"niunia007-1": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['-4617px', '-3244px', '10260px', '7210px', 'auto', 'auto'],
                    transform: [[], [], [], ['0.1', '0.1']],
                    id: 'niunia007-1-Layer-1',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/niunia007-1-Layer-1.svg', '0px', '0px']
                },
                {
                    rect: ['-5503px', '-3244px', '12230px', '7210px', 'auto', 'auto'],
                    transform: [[], [], [], ['0.1', '0.1']],
                    id: 'niunia007-1-Layer-2',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/niunia007-1-Layer-2.svg', '0px', '0px']
                },
                {
                    rect: ['-5588px', '-3243px', '12420px', '7210px', 'auto', 'auto'],
                    transform: [[], [], [], ['0.1', '0.1']],
                    id: 'niunia007-1-Layer-3',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/niunia007-1-Layer-3.svg', '0px', '0px']
                },
                {
                    rect: ['-4936px', '-3244px', '10970px', '7210px', 'auto', 'auto'],
                    transform: [[], [], [], ['0.1', '0.1']],
                    id: 'niunia007-1-Layer-4',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/niunia007-1-Layer-4.svg', '0px', '0px']
                },
                {
                    rect: ['-5368px', '-3244px', '11930px', '7210px', 'auto', 'auto'],
                    transform: [[], [], [], ['0.1', '0.1']],
                    id: 'niunia007-1-Layer-5',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/niunia007-1-Layer-5.svg', '0px', '0px']
                },
                {
                    rect: ['-5764px', '-3244px', '12810px', '7210px', 'auto', 'auto'],
                    transform: [[], [], [], ['0.1', '0.1']],
                    id: 'niunia007-1-Layer-6',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/niunia007-1-Layer-6.svg', '0px', '0px']
                },
                {
                    rect: ['-5746px', '-3244px', '12770px', '7210px', 'auto', 'auto'],
                    transform: [[], [], [], ['0.1', '0.1']],
                    id: 'niunia007-1-Layer-7',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/niunia007-1-Layer-7.svg', '0px', '0px']
                },
                {
                    rect: ['-5769px', '-3244px', '12820px', '7210px', 'auto', 'auto'],
                    transform: [[], [], [], ['0.1', '0.1']],
                    id: 'niunia007-1-Layer-8',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/niunia007-1-Layer-8.svg', '0px', '0px']
                },
                {
                    rect: ['-5764px', '-3244px', '12810px', '7210px', 'auto', 'auto'],
                    transform: [[], [], [], ['0.1', '0.1']],
                    id: 'niunia007-1-Layer-9',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/niunia007-1-Layer-9.svg', '0px', '0px']
                },
                {
                    rect: ['-5764px', '-3243px', '12810px', '7210px', 'auto', 'auto'],
                    transform: [[], [], [], ['0.1', '0.1']],
                    id: 'niunia007-1-Layer-10',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/niunia007-1-Layer-10.svg', '0px', '0px']
                },
                {
                    rect: ['-5763px', '-3244px', '12810px', '7210px', 'auto', 'auto'],
                    transform: [[], [], [], ['0.1', '0.1']],
                    id: 'niunia007-1-Layer-11',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/niunia007-1-Layer-11.svg', '0px', '0px']
                },
                {
                    rect: ['-5764px', '-3244px', '12810px', '7210px', 'auto', 'auto'],
                    transform: [[], [], [], ['0.1', '0.1']],
                    id: 'niunia007-1-Layer-12',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/niunia007-1-Layer-12.svg', '0px', '0px']
                },
                {
                    rect: ['-5764px', '-3244px', '12810px', '7210px', 'auto', 'auto'],
                    transform: [[], [], [], ['0.1', '0.1']],
                    id: 'niunia007-1-Layer-13',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/niunia007-1-Layer-13.svg', '0px', '0px']
                },
                {
                    rect: ['-5634px', '-3244px', '12520px', '7210px', 'auto', 'auto'],
                    transform: [[], [], [], ['0.1', '0.1']],
                    id: 'niunia007-1-Layer-14',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/niunia007-1-Layer-14.svg', '0px', '0px']
                },
                {
                    rect: ['-5763px', '-3244px', '12810px', '7210px', 'auto', 'auto'],
                    transform: [[], [], [], ['0.1', '0.1']],
                    id: 'niunia007-1-Layer-15',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/niunia007-1-Layer-15.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_niunia007-1-Layer-1}": [
                ["style", "top", '-3244px'],
                ["style", "left", '-4617px'],
                ["style", "display", 'block']
            ],
            "${_niunia007-1-Layer-15}": [
                ["style", "top", '-3244px'],
                ["style", "left", '-5763px'],
                ["style", "display", 'none']
            ],
            "${_niunia007-1-Layer-4}": [
                ["style", "top", '-3244px'],
                ["style", "left", '-4936px'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '722px'],
                ["style", "width", '1283px']
            ],
            "${_niunia007-1-Layer-12}": [
                ["style", "top", '-3244px'],
                ["style", "left", '-5764px'],
                ["style", "display", 'none']
            ],
            "${_niunia007-1-Layer-7}": [
                ["style", "top", '-3244px'],
                ["style", "left", '-5746px'],
                ["style", "display", 'none']
            ],
            "${_niunia007-1-Layer-10}": [
                ["style", "top", '-3243px'],
                ["style", "left", '-5764px'],
                ["style", "display", 'none']
            ],
            "${_niunia007-1-Layer-2}": [
                ["style", "top", '-3244px'],
                ["style", "left", '-5503px'],
                ["style", "display", 'none']
            ],
            "${_niunia007-1-Layer-9}": [
                ["style", "top", '-3244px'],
                ["style", "left", '-5764px'],
                ["style", "display", 'none']
            ],
            "${_niunia007-1-Layer-8}": [
                ["style", "top", '-3244px'],
                ["style", "left", '-5769px'],
                ["style", "display", 'none']
            ],
            "${_niunia007-1-Layer-3}": [
                ["style", "top", '-3243px'],
                ["style", "left", '-5588px'],
                ["style", "display", 'none']
            ],
            "${_niunia007-1-Layer-13}": [
                ["style", "top", '-3244px'],
                ["style", "left", '-5764px'],
                ["style", "display", 'none']
            ],
            "${_niunia007-1-Layer-14}": [
                ["style", "top", '-3244px'],
                ["style", "left", '-5634px'],
                ["style", "display", 'none']
            ],
            "${_niunia007-1-Layer-6}": [
                ["style", "top", '-3244px'],
                ["style", "left", '-5764px'],
                ["style", "display", 'none']
            ],
            "${_niunia007-1-Layer-11}": [
                ["style", "top", '-3244px'],
                ["style", "left", '-5763px'],
                ["style", "display", 'none']
            ],
            "${_niunia007-1-Layer-5}": [
                ["style", "top", '-3244px'],
                ["style", "left", '-5368px'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3750,
            autoPlay: true,
            timeline: [
                { id: "eid14", tween: [ "style", "${_niunia007-1-Layer-8}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0 },
                { id: "eid16", tween: [ "style", "${_niunia007-1-Layer-8}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid23", tween: [ "style", "${_niunia007-1-Layer-12}", "display", 'block', { fromValue: 'none'}], position: 2750, duration: 0 },
                { id: "eid24", tween: [ "style", "${_niunia007-1-Layer-12}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
                { id: "eid1", tween: [ "style", "${_niunia007-1-Layer-1}", "display", 'none', { fromValue: 'block'}], position: 250, duration: 0 },
                { id: "eid27", tween: [ "style", "${_niunia007-1-Layer-14}", "display", 'block', { fromValue: 'none'}], position: 3250, duration: 0 },
                { id: "eid28", tween: [ "style", "${_niunia007-1-Layer-14}", "display", 'none', { fromValue: 'block'}], position: 3500, duration: 0 },
                { id: "eid25", tween: [ "style", "${_niunia007-1-Layer-13}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
                { id: "eid26", tween: [ "style", "${_niunia007-1-Layer-13}", "display", 'none', { fromValue: 'block'}], position: 3250, duration: 0 },
                { id: "eid8", tween: [ "style", "${_niunia007-1-Layer-5}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid9", tween: [ "style", "${_niunia007-1-Layer-5}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
                { id: "eid29", tween: [ "style", "${_niunia007-1-Layer-15}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
                { id: "eid30", tween: [ "style", "${_niunia007-1-Layer-15}", "display", 'none', { fromValue: 'block'}], position: 3750, duration: 0 },
                { id: "eid4", tween: [ "style", "${_niunia007-1-Layer-3}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid5", tween: [ "style", "${_niunia007-1-Layer-3}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
                { id: "eid21", tween: [ "style", "${_niunia007-1-Layer-11}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
                { id: "eid22", tween: [ "style", "${_niunia007-1-Layer-11}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0 },
                { id: "eid2", tween: [ "style", "${_niunia007-1-Layer-2}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid3", tween: [ "style", "${_niunia007-1-Layer-2}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
                { id: "eid17", tween: [ "style", "${_niunia007-1-Layer-9}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid18", tween: [ "style", "${_niunia007-1-Layer-9}", "display", 'none', { fromValue: 'block'}], position: 2250, duration: 0 },
                { id: "eid12", tween: [ "style", "${_niunia007-1-Layer-7}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
                { id: "eid13", tween: [ "style", "${_niunia007-1-Layer-7}", "display", 'none', { fromValue: 'block'}], position: 1750, duration: 0 },
                { id: "eid19", tween: [ "style", "${_niunia007-1-Layer-10}", "display", 'block', { fromValue: 'none'}], position: 2250, duration: 0 },
                { id: "eid20", tween: [ "style", "${_niunia007-1-Layer-10}", "display", 'none', { fromValue: 'block'}], position: 2500, duration: 0 },
                { id: "eid10", tween: [ "style", "${_niunia007-1-Layer-6}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
                { id: "eid11", tween: [ "style", "${_niunia007-1-Layer-6}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0 },
                { id: "eid6", tween: [ "style", "${_niunia007-1-Layer-4}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
                { id: "eid7", tween: [ "style", "${_niunia007-1-Layer-4}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-31711297");
