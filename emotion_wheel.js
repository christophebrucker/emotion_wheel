
// set emotions object
// we define the emotions as below
// an emotion is defined by three words
// ex: afraid / anxious / worry
console.log("Hello Chris");
const emotion = document.querySelector("#emotion");
emotion.insertAdjacentHTML("beforeend", "<h2>Hi Chris</h2>");
const emotions = {
  // red
  angry: { mistrust: ['exhaustion','resentment'],
           shame: ['humiliation', 'embarrasment'],
           jealous: ['indignant', 'bitter'],
           mad: ['furious', 'rage'],
           irritation: ['aggressive', 'hostile'],
           frustration: ['tense', 'annoyance'],
           distant: ['withdrawn', 'numb'],
           critical: ['skeptical', 'dismissive']
  },
  // green
  disgusted: { disapproval: ['judgement','shock'],
             disdain: ['revulsion', 'yucky'],
             sick: ['nausea', 'awful'],
             repulsion: ['horror', 'hesitance']
  },
  // black
  afraid: { nervous: ['tight', 'vulnerable'],
            shaky: ['trembling', 'unstable'],
            weak: ['hollow', 'empty'],
            insecure: ['small', 'inferior'],
            anxious: ['overwhelm','worry'],
            scared: ['helpless', 'fearful']
  },
  // purple
  bad: { boredom: ['absent','apathy'],
        busy: ['buzzy','pressure'],
        stress: ['overwhelm', 'out of control'],
        tired: ['sleepy', 'blurry']
  },
  // orange
  surprised: { shock: ['uncomfortable','dismay'],
        confusion: ['unclear','dizzy'],
        amazement: ['astonishment', 'awe'],
        excitement: ['eager', 'energetic']
  },
  // yellow
  happy: { playful: ['arousal', 'mischevious'],
          content: ['free', 'joy'],
          curiosity: ['interest', 'willingness'],
          proud: ['strong','confident'],
          acceptance: ['respect','importance'],
          powerful: ['courageous','creative'],
          care: ['peaceful','gratitude'],
          trust: ['tenderness', 'safety'],
          hope: ['openness','inspiration']
  },
  // dark blue
  sad: { lonely: ['achy', 'longing'],
        vulnerable: ['shaky', 'fragile'],
        despair: ['grief','powerless'],
        guilty: ['remorseful','shame'],
        depression: ['heavy','weight'],
        hurt: ['pain','disappointment']
  },
};

// make the wheel rotate with cursor
var mouseXY = {};
$( document ).on("mousemouse", function( event ) {
  mouseXY.X = event.pageX;
  mouseXY.Y = event.pageY;
});
var iWheel = $("#wheel");
var prevXY = {X: null, Y: null};
var wheelInterval = setInterval(function()
{
  if(prevXY.Y != mouseXY.Y || prevXY.X != mouseXY.X && (PREVXY.Y != null || prevXY.X != null)) {
    var wheelXY = iWheel.position();
    var diffX = wheelXY.left - mouseXY.X;
    var diffY = wheelXY.top - mouseXY.Y;
    var tan = diffX / diffY;
    var atan = Math.atan(tan) * 180 / Math.PI;
    if (diffY > 0 && diffX > 0) {
      atan += 180;
    }
    else if (diffY < 0 && diffX > 0) {
      atan -= 180;
    }
    prevXY.X = mouseXY.X;
    prevXY.Y = mouseXY.Y;
    iWheel.css({transform: "rotate(" +atan + "deg)"});
  }
}, 10);
