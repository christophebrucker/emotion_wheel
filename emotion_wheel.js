// display the wheel !
document.body.insertAdjacentHTML("afterbegin", "<h1>How do you feel ?</h1>");
const wheel = document.createElement('img');
wheel.src = 'wheel.png';
wheel.style.width = '250' + 'px';
document.body.appendChild(wheel);


// set emotions
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

///////////////////////////////
// --------  drag  --------- //
///////////////////////////////

(function () {
  var init,
    start, stop, move,
    _x, _y,
    active = false,
    drag = document.getElementById('drag'),
    d = document.getElementById('draggable'),
    con = document.getElementById('container');

  init = function () {
    // Mouse Events
    drag.addEventListener('mousedown', start, false);
    $(document).bind('mousemove', function (event) {
      if (active === true) {
        move(event);
      }
    });
    $(document).bind('mouseup', function (event) {
      stop(event.originalEvent);
    });
  };

  start = function (e) {
    e.preventDefault();
    // mouse pos
    var Mx = e.clientX,
      My = e.clientY,
      l = d.getBoundingClientRect().left,
      t = d.getBoundingClientRect().top;
    // offset
    _x = Mx - l;
    _y = My - t;
    return active = true;
  };

  move = function (e) {
    e.preventDefault();
    var Mx = e.clientX,
      My = e.clientY,
      l = d.getBoundingClientRect().left,
      t = d.getBoundingClientRect().top,
      w = d.getBoundingClientRect().width,
      h = d.getBoundingClientRect().height,
      _l = con.getBoundingClientRect().left,
      _t = con.getBoundingClientRect().top,
      _w = con.getBoundingClientRect().width,
      _h = con.getBoundingClientRect().height,
      x, y;
    //check to see if mouse is inside container
    if (Mx - _x > _l && Mx + w - _l < _w + _x) {
      // x = mouseX - offsetX - containerX
      x = Mx - _x - _l;
    }
    if (My - _y > _t && My + h - _t < _h + _y) {
      // y = mouseY - offsetY - containerY
      y = My - _y - _t;
    }
    return d.style.left = x + 'px', d.style.top = y + 'px';
  };

  stop = function () {
    return active = false;
  };

  init();

}).call(this);

///////////////////////////////
// -------  rotate  -------- //
///////////////////////////////

(function () {
  var init, rotate, start, stop,
    active = false,
    angle = 0,
    rotation = 0,
    startAngle = 0,
    center = {
      x: 0,
      y: 0
    },
    R2D = 180 / Math.PI,
    rot = document.getElementById('rotate');

  init = function () {
    rot.addEventListener("mousedown", start, false);
    $(document).bind('mousemove', function (event) {
      if (active === true) {
        event.preventDefault();
        rotate(event);
      }
    });
    $(document).bind('mouseup', function (event) {
      event.preventDefault();
      stop(event);
    });
  };

  start = function (e) {
    e.preventDefault();
    var bb = this.getBoundingClientRect(),
      t = bb.top,
      l = bb.left,
      h = bb.height,
      w = bb.width,
      x, y;
    center = {
      x: l + (w / 2),
      y: t + (h / 2)
    };
    x = e.clientX - center.x;
    y = e.clientY - center.y;
    startAngle = R2D * Math.atan2(y, x);
    return active = true;
  };

  rotate = function (e) {
    e.preventDefault();
    var x = e.clientX - center.x,
      y = e.clientY - center.y,
      d = R2D * Math.atan2(y, x);
    rotation = d - startAngle;
    return rot.style.webkitTransform = "rotate(" + (angle + rotation) + "deg)";
  };

  stop = function () {
    angle += rotation;
    return active = false;
  };

  init();

}).call(this);
