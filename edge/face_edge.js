/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'home7',
            type:'image',
            rect:['0px','-1px','420px','281px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"home7.png",'0px','0px']
         },
         {
            id:'boca',
            type:'rect',
            rect:['0px','265px','174px','15px','auto','auto'],
            fill:["rgba(49,148,226,1.00)"],
            stroke:[0,"rgba(0,0,0,1.00)","solid"],
            userClass:""
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_boca}": [
            ["color", "background-color", 'rgba(49,148,226,1.00)'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '6px'],
            ["style", "width", '174px'],
            ["style", "top", '265px'],
            ["style", "left", '0px'],
            ["style", "height", '3px'],
            ["color", "border-color", 'rgba(0,0,0,0.00)']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(252,252,252,1.00)'],
            ["style", "width", '420px'],
            ["style", "height", '280px'],
            ["style", "overflow", 'hidden']
         ],
         "${_home7}": [
            ["style", "left", '0px'],
            ["style", "top", '-1px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
            { id: "eid10", tween: [ "style", "${_boca}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid18", tween: [ "style", "${_boca}", "top", '265px', { fromValue: '265px'}], position: 0, duration: 0 },
            { id: "eid6", tween: [ "color", "${_boca}", "border-color", 'rgba(0,0,0,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,0.00)'}], position: 0, duration: 0 },
            { id: "eid11", tween: [ "style", "${_boca}", "height", '3px', { fromValue: '3px'}], position: 0, duration: 0 },
            { id: "eid5", tween: [ "style", "${_boca}", "border-width", '6px', { fromValue: '6px'}], position: 0, duration: 0 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "FaceID");
