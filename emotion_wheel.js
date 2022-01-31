// display the wheel !
document.body.insertAdjacentHTML("afterbegin", "<h1>How do you feel ?</h1>");
const wheel = document.createElement('img');
wheel.src = 'wheel.png';
wheel.style.width = '250' + 'px';
document.body.appendChild(wheel);

// set emotions object
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
