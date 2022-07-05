
// set emotions object
// we define the emotions as below
// ex: afraid / anxious / worry
// the emotion is defined by the three words
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
var cv = document.createElement('canvas');
var ctx = cv.getContext('2d');
cv.width = 1224;
cv.height = 768;
document.body.appendChild(cv);

var centerX = 300, centerY = 200;

var arrow = new Image();
arrow.onload = function () {
  drawArrow(0);
};
arrow.src = 'wheel.png';

// NB: rotations go clockwise, and the Y axis goes down
function drawArrow(angle) {
  ctx.clearRect(0, 0, cv.width, cv.height);
  ctx.save();
  ctx.translate(centerX, centerY);
  ctx.rotate(-Math.PI / 2);   // correction for image starting position
  ctx.rotate(angle);
  ctx.drawImage(arrow, -arrow.width / 2, -arrow.height / 2);
  ctx.restore();
}

document.onmousemove = function (e) {
  var dx = e.pageX - centerX;
  var dy = e.pageY - centerY;
  var theta = Math.atan2(dy, dx);
  drawArrow(theta);
};
