/*==============================
~> Last Updated          : 10 - 02 - 2025 : 07:00 PM GMT +04
===============================*/
function showSection(_0x4c48fb, _0x3b6344) {
  let target = document.getElementById(_0x4c48fb);
  if (!target.classList.contains("Open-Now")) {
    target.classList.add("Open-Now");
    _0x3b6344.classList.add("active");
  } else {
    target.classList.remove("Open-Now");
    _0x3b6344.classList.remove("active");
  }

  // إبقاء باقي الأقسام كما هي
}
  document.getElementById(_0x4c48fb).classList.add("Open-Now");
  document.querySelectorAll(".STING-WEB-BTN").forEach(_0x8e3fa8 => {
    _0x8e3fa8.classList.remove("active");
  });
  _0x3b6344.classList.add("active");
}
function renderStandings(_0x3fe2b1) {
  let _0x43894a = "<div class=\"STING-WEB-Loading\"><img src=\"https://apis.sting-web.com/npm/v7/assets/loading.gif\" style=\" width: 40px; height: 40px; text-align: center; display: flex; align-items: center; margin: 0 auto; padding: 40px 0; \" alt=\"Loading\"></div>";
  document.getElementById("standings").innerHTML = _0x43894a;
  setTimeout(() => {
    _0x43894a = '';
    if (0x0 === _0x3fe2b1.length) {
      _0x43894a = "<div class=\"no-standings\">لا توجد معلومات في الوقت الحالي</div>";
    } else {
      let _0x34028c = document.querySelector("[id=\"Standings\"]").getAttribute("view");
      let _0x5eddc8 = [];
      if ("5096" === _0x34028c) {
        _0x5eddc8 = [0x4, 0x4, 0x4, 0x4, 0x4, 0x4, 0x4, 0x4];
      }
      if ("645" === _0x34028c) {
        _0x5eddc8 = [0x6, 0x6, 0x6, 0x6, 0x5, 0x6, 0x6, 0x6, 0x6];
      }
      if ("623" === _0x34028c) {
        _0x5eddc8 = [0xc, 0xc];
      }
      if ("627" === _0x34028c) {
        _0x5eddc8 = [0x4, 0x4, 0x4, 0x4];
      }
      if ("7165" === _0x34028c) {
        _0x5eddc8 = [0x6, 0x6, 0x4, 0x4, 0x4, 0x4, 0x3, 0x3];
      }
      if ("167" === _0x34028c) {
        _0x5eddc8 = [0x4, 0x4, 0x4, 0x4, 0x4, 0x4];
      }
      if ("588" === _0x34028c) {
        _0x5eddc8 = [0x4, 0x4, 0x4, 0x4, 0x4, 0x4, 0x4, 0x4, 0x4, 0x4, 0x4, 0x4, 0x4];
      }
      if ("5452" === _0x34028c) {
        _0x5eddc8 = [0x4, 0x4];
      }
      if ("605" === _0x34028c) {
        _0x5eddc8 = [0x6, 0x6, 0x6];
      }
      if ("611" === _0x34028c) {
        _0x5eddc8 = [0x5, 0x5, 0x5, 0x5, 0x5, 0x5];
      }
      if ("7808" === _0x34028c) {
        _0x5eddc8 = [0x5, 0x5, 0x4, 0x4];
      }
      if ("5930" === _0x34028c) {
        _0x5eddc8 = [0x4, 0x4, 0x4, 0x4, 0x4, 0x4, 0x4, 0x4];
      }
      if ('18' === _0x34028c) {
        _0x5eddc8 = [0x6, 0x6];
      }
      if ("559" === _0x34028c) {
        _0x5eddc8 = [0x9, 0x8, 0x9, 0x9];
      }
      if ("568" === _0x34028c) {
        _0x5eddc8 = [0x4, 0x4, 0x4, 0x4, 0x4, 0x4, 0x4, 0x4];
      }
      if ("8400" === _0x34028c) {
        _0x5eddc8 = [0x4, 0x4];
      }
      if ("6196" === _0x34028c) {
        _0x5eddc8 = [0x4, 0x4, 0x4, 0x4, 0x4, 0x4];
      }
      if ("624" === _0x34028c) {
        _0x5eddc8 = [0x2b, 0x4, 0x4, 0x4, 0x4];
      }
      if ("104" === _0x34028c) {
        _0x5eddc8 = [0xf, 0xf];
      }
      if (_0x5eddc8.length > 0x0) {
        _0x43894a = "\n                <div class=\"STING-WEB-Standings-C-Header Tarteb\"> \n                    <div class=\"Position\">م</div>\n                    <div class=\"Teams\">الفريق</div>\n                    <div class=\"Played\"><span class=\"Phone-Show\">ل</span><span class=\"PC-Show\">لعب</span></div>\n                    <div class=\"Won\"><span class=\"Phone-Show\">ف</span><span class=\"PC-Show\">فاز</span></div>\n                    <div class=\"Lost\"><span class=\"Phone-Show\">خ</span><span class=\"PC-Show\">خسر</span></div>\n                    <div class=\"Drawn\"><span class=\"Phone-Show\">ت</span><span class=\"PC-Show\">تعادل</span></div>\n                    <div class=\"iPoints\">النقاط</div>\n                </div>";
        let _0x1d40e1 = [];
        let _0x473337 = 0x0;
        _0x5eddc8.forEach(_0xf0a08d => {
          _0x1d40e1.push(_0x3fe2b1.slice(_0x473337, _0x473337 + _0xf0a08d));
          _0x473337 += _0xf0a08d;
        });
        _0x1d40e1.forEach((_0xb79375, _0x58382f) => {
          _0x43894a += "<div class=\"STING-WEB-Grouped\">مجموعة - " + (_0x58382f + 0x1) + "</div>";
          _0x43894a += "\n                    <div class=\"STING-WEB-Standings-C-Header\"> \n                        <div class=\"Position\">م</div>\n                        <div class=\"Teams\">الفريق</div>\n                        <div class=\"Played\"><span class=\"Phone-Show\">ل</span><span class=\"PC-Show\">لعب</span></div>\n                        <div class=\"Won\"><span class=\"Phone-Show\">ف</span><span class=\"PC-Show\">فاز</span></div>\n                        <div class=\"Lost\"><span class=\"Phone-Show\">خ</span><span class=\"PC-Show\">خسر</span></div>\n                        <div class=\"Drawn\"><span class=\"Phone-Show\">ت</span><span class=\"PC-Show\">تعادل</span></div>\n                        <div class=\"iPoints\">النقاط</div>\n                    </div><style>.STING-WEB-Standings-C-Header.Tarteb { display: none !important; }</style>";
          _0xb79375.forEach(_0x58b01d => {
            _0x43894a += "\n                        <div class=\"STING-WEB-Standings-C-row\"> \n                            <div class=\"Position\">" + _0x58b01d.Position + "</div> \n                            <div class=\"Team-logo\"><img src=\"" + _0x58b01d["Team-Logo"] + "\" alt=\"" + _0x58b01d["Team-Name"] + "\">\n                            <span class=\"Team-name\">" + _0x58b01d["Team-Name"] + "</span></div> \n                            <div class=\"Played\">" + _0x58b01d.Played + "</div>\n                            <div class=\"Won\">" + _0x58b01d.Won + "</div>\n                            <div class=\"Lost\">" + _0x58b01d.Lost + "</div>\n                            <div class=\"Drawn\">" + _0x58b01d.Even + "</div>\n                            <div class=\"Points\">" + _0x58b01d.Points + "</div>\n                        </div>\n                        ";
          });
        });
      } else {
        _0x43894a = "\n                <div class=\"STING-WEB-Standings-C-Header\"> \n                    <div class=\"Position\">م</div>\n                    <div class=\"Teams\">الفريق</div>\n                    <div class=\"Played\"><span class=\"Phone-Show\">ل</span><span class=\"PC-Show\">لعب</span></div>\n                    <div class=\"Won\"><span class=\"Phone-Show\">ف</span><span class=\"PC-Show\">فاز</span></div>\n                    <div class=\"Lost\"><span class=\"Phone-Show\">خ</span><span class=\"PC-Show\">خسر</span></div>\n                    <div class=\"Drawn\"><span class=\"Phone-Show\">ت</span><span class=\"PC-Show\">تعادل</span></div>\n                    <div class=\"iPoints\">النقاط</div>\n                </div>";
        _0x3fe2b1.forEach(_0xbcdb52 => {
          _0x43894a += "\n                    <div class=\"STING-WEB-Standings-C-row\"> \n                        <div class=\"Position\">" + _0xbcdb52.Position + "</div> \n                        <div class=\"Team-logo\"><img src=\"" + _0xbcdb52["Team-Logo"] + "\" alt=\"" + _0xbcdb52["Team-Name"] + "\"><span class=\"Team-name\">" + _0xbcdb52["Team-Name"] + "</span></div> \n                        <div class=\"Played\">" + _0xbcdb52.Played + "</div>\n                        <div class=\"Won\">" + _0xbcdb52.Won + "</div>\n                        <div class=\"Lost\">" + _0xbcdb52.Lost + "</div>\n                        <div class=\"Drawn\">" + _0xbcdb52.Even + "</div>\n                        <div class=\"Points\">" + _0xbcdb52.Points + "</div>\n                    </div>\n                    ";
        });
      }
    }
    _0x43894a += "</div>";
    document.getElementById("standings").innerHTML = _0x43894a;
  }, 0x64);
}
function renderScorers(_0x307e0a) {
  let _0x5a8390 = '';
  if (0x0 === _0x307e0a.length) {
    _0x5a8390 = "<div class=\"no-scorers\">لا توجد معلومات في الوقت الحالي</div>";
  } else {
    _0x5a8390 = "\n        <div class=\"STING-WEB-Scorers-Header\"> \n            <div class=\"Position\">م</div>\n            <div class=\"Player\">اللاعب</div>\n            <div class=\"Club\"></div>\n            <div class=\"Goals\">الأهداف</div>\n        </div>\n        ";
    let _0x777f22 = 0x1;
    _0x307e0a.forEach(_0x107ac0 => {
      if (0x0 === _0x107ac0.Position) {
        _0x107ac0.Position = _0x777f22;
      }
      _0x5a8390 += "\n            <div class=\"STING-WEB-Scorers-row\">\n                <div class=\"Position\">" + _0x107ac0.Position + "</div>\n                <div class=\"Player\"><img src=\"" + _0x107ac0["Player-Logo"] + "\" alt=\"" + _0x107ac0["Player-Name"] + "\">\n                <div class=\"Player-Info\"><span class=\"Player-name\">" + _0x107ac0["Player-Name"] + "</span>\n                <span class=\"Player-zone\">" + _0x107ac0["Played-Zone"] + "</span>\n                </div>\n                </div> \n                <div class=\"Club\"><img src=\"" + _0x107ac0["Player-Team"] + "\" alt=\"" + _0x107ac0["Player-Name"] + "\"></div> \n                <div class=\"Goals\">" + _0x107ac0.Goals + "</div> \n            </div>\n            ";
      _0x777f22++;
    });
  }
  _0x5a8390 += "</div>";
  document.getElementById("scorers").innerHTML = _0x5a8390;
}
function renderSortedMatches(_0xd22b5e, _0x4e9a41) {
  let _0x2de945 = {};
  _0xd22b5e.forEach(_0x14960e => {
    if (!_0x2de945[_0x14960e.Date]) {
      _0x2de945[_0x14960e.Date] = [];
    }
    _0x2de945[_0x14960e.Date].push(_0x14960e);
  });
  let _0x365b70 = '';
  if (0x0 === Object.keys(_0x2de945).length) {
    _0x365b70 = "<div class='no-matches'>لا توجد معلومات في الوقت الحالي</div>";
  } else {
    for (let _0x292198 in _0x2de945) {
      _0x365b70 += "<div class=\"Match-Date-Group\"><span class=\"Match-Date-Title\">" + _0x292198 + "</span>";
      _0x2de945[_0x292198].forEach(_0x634d03 => {
        let _0x508dda = _0x634d03.Time;
        let _0x4707ed = '';
        if (_0x508dda && undefined !== _0x508dda) {
          let [_0x261745, _0x368d80] = _0x508dda.split(':');
          let _0x57f1fa = 'ص';
          if (parseInt(_0x261745) >= 0xc) {
            _0x57f1fa = 'م';
            if (parseInt(_0x261745) > 0xc) {
              _0x261745 = (parseInt(_0x261745) - 0xc).toString();
            }
          } else if (0x0 === parseInt(_0x261745)) {
            _0x261745 = '12';
          }
          _0x4707ed = _0x261745 + ':' + _0x368d80 + " " + _0x57f1fa;
        }
        _0x365b70 += "\n                    <div class=\"STING-WEB-Match\">\n                        <div class=\"Match-Teams\">\n                            <div class=\"Right-Team\">\n                                <img src=\"" + _0x634d03["Right-Team"].Logo + "\" alt=\"" + _0x634d03["Right-Team"].Name + "\">\n                                <span>" + _0x634d03["Right-Team"].Name + "</span>\n                            </div> \n                            <div class=\"Match-Center\"> \n                            " + (_0x4707ed ? "<div class=\"Match-Time\">" + _0x4707ed + "</div>" : "<div class=\"Match-Goals\">" + (-0x1 === _0x634d03["Right-Team"].Goal || -0x1 === _0x634d03["Left-Team"].Goal ? '-' : _0x634d03["Right-Team"].Goal + " - " + _0x634d03["Left-Team"].Goal) + "</div>") + "                                " + (-0x1 !== _0x634d03.Round ? "<div class=\"Match-Round\">الجولة - " + _0x634d03.Round + "</div>" : '') + "\n                            </div> \n                            <div class=\"Left-Team\">\n                                <img src=\"" + _0x634d03["Left-Team"].Logo + "\" alt=\"" + _0x634d03["Left-Team"].Name + "\">\n                                <span>" + _0x634d03["Left-Team"].Name + "</span>\n                            </div> \n                        </div>\n                    </div>\n                ";
      });
      _0x365b70 += "</div>";
    }
  }
  document.getElementById(_0x4e9a41).innerHTML = _0x365b70;
}
document.addEventListener("DOMContentLoaded", function () {
  let _0x1aa6a5 = document.querySelector("#Standings");
  let _0x2b6311 = _0x1aa6a5.getAttribute("view");
  let _0x3b0366 = {
    'ar': 0x1b,
    'en': 0x1
  }[_0x1aa6a5.getAttribute("lang")] || 0x1b;
  let _0x3f0bb5 = function _0x8d71a8() {
    let _0x4ce1f0 = new Date().getTimezoneOffset();
    let _0xfc522f = Math.abs(Math.floor(_0x4ce1f0 / 0x3c)).toString().padStart(0x2, '0');
    let _0x4aacf0 = Math.abs(_0x4ce1f0 % 0x3c).toString().padStart(0x2, '0');
    return '' + (_0x4ce1f0 > 0x0 ? '-' : '+') + _0xfc522f + ':' + _0x4aacf0;
  }();
  let _0x164425 = "https://apis.sting-web.com/npm/v7/leagues/?id=" + _0x2b6311 + "&lang=" + _0x3b0366 + "&time=" + _0x3f0bb5;
  let _0x36c710 = {
    'ar': {
      'standings': "الترتيب",
      'scorers': "الهدافين",
      'upcoming': "المباريات",
      'previous': "النتائج"
    },
    'en': {
      'standings': "Standings",
      'scorers': "Top Scorers",
      'upcoming': "Matches",
      'previous': "Results"
    }
  };
  let _0x373f4e = document.createElement("div");
  _0x373f4e.classList.add("STING-WEB-League-Container");
  _0x1aa6a5.appendChild(_0x373f4e);
  _0x373f4e.innerHTML = "<style>\n.STING-WEB-League-Container { max-width: 1000px; margin: 0 auto; width: 99%; }\n.STING-WEB-League-Info { width: 100%; background: #c5c5d32e; margin: 20px auto; align-content: center; border-radius: 12px; border: 1px solid #dadce0c4; }\n.STING-WEB-League-Top { display: grid; gap: 5px; align-items: center; width: 90%; margin: 15px auto; }\n.STING-WEB-Dawry { display: flex; align-items: center; gap: 5px; }\n.STING-WEB-League-Top img { width: 40px; height: 40px; object-fit: contain; }\n.STING-WEB-League-Top h2 { font-size: 17px; color: #000; line-height: 32px; background: transparent; }#STING-WEB-League-Season { font-size: 14px; }\n.STING-WEB-League-Bottom { display: flex; gap: 12px; width: 90%; margin: 0 auto; }\n.STING-WEB-League-Bottom button { background: transparent; color: #000; border: 0; font-size: 14px; font-family: unset; padding-bottom: 12px; border-bottom: 2px solid transparent; cursor: pointer; }\n.STING-WEB-League-Bottom .active { color: #008000 !important; border-bottom-color: #008000 !important; }\n.STING-WEB-Standings-C-Header { display: grid; grid-template-columns: .5fr 2fr .5fr .5fr .5fr .5fr .5fr; align-items: center; text-align: center; padding: 8px 0; font-size: 14px; color: #000; border-radius: 8px; }.STING-WEB-Container { display: none; }.Points { font-weight: 600; } .STING-WEB-Container.Open-Now { display: grid  !important; }\n.STING-WEB-Standings-C-row { display: grid; grid-template-columns: .5fr 2fr .5fr .5fr .5fr .5fr .5fr; align-items: center; text-align: center; background: #c5c5d32e; padding: 8px 0; font-size: 14px; color: #000; border-radius: 4px; margin: 2px 0; border: 1px solid #dadce0c4; position: relative; }.Phone-Show { display: none; } .PC-Show { display: block; }\n.STING-WEB-Scorers-Header { display: grid; grid-template-columns: .5fr 2fr .5fr .5fr; align-items: center; text-align: center; padding: 8px 0; font-size: 14px; color: #000; border-radius: 8px; width: 93%; margin: 0 auto; }.Team-logo { display: flex; align-items: center; gap: 8px; font-size: 14px; }.Team-logo img { width: 30px; height: 30px; object-fit: contain; }\n.STING-WEB-Scorers-row { display: grid; grid-template-columns: .5fr 2fr .5fr .5fr; align-items: center; text-align: center; padding: 8px 0; font-size: 14px; color: #000; background: #c5c5d32e; border-radius: 4px; margin: 2px 0; border: 1px solid #dadce0c4; }\n.STING-WEB-Scorers-row .Position { font-size: 13px; } .STING-WEB-Scorers-row .Player { display: flex; align-items: center; gap: 12px; font-size: 14px; }.Player-Info { display: grid; text-align: start; font-size: 13px; } .Club { width: 30px; height: 30px; display: flex; align-items: center; justify-self: center; } .Club img { width: 100%; height: 100%; object-fit: contain; }\n.STING-WEB-Scorers-row .Goals { background: #fff; border-radius: 8px; width: 40px; height: 40px; align-content: center; border: 1px solid #dadce0c4; font-weight: 600; font-size: 15px; }\n.STING-WEB-Scorers-row:nth-child(2n) .Goals { background: #c5c5d32e; } .Team-name { font-size: 14px; } .Player-zone { font-size: 12px; color: #222; } .Player img { width: 50px; height: 50px; object-fit: contain; } .STING-WEB-Standings-C-row:nth-child(2n),.STING-WEB-Scorers-row:nth-child(2n) { background: #fff; }\n.STING-WEB-Standings-C-row::before { content: \"\"; width: 2px; background: transparent; border-radius: 50px; right: 0; position: absolute; top: 0; bottom: 0; margin-left: 5px; }/* .STING-WEB-Standings-C-row:nth-child(2)::before,.STING-WEB-Standings-C-row:nth-child(3)::before,.STING-WEB-Standings-C-row:nth-child(4)::before { background: green !important; } .STING-WEB-Standings-C-row:nth-child(19)::before,.STING-WEB-Standings-C-row:nth-child(20)::before,.STING-WEB-Standings-C-row:nth-child(21)::before { background: #ff5200 !important; } */.Match-Date-Group { display: grid; border-radius: 12px; margin-bottom: 12px; } .Match-Date-Title,.STING-WEB-Grouped { background: #c5c5d32e; width: 97%; height: 32px; border-radius: 6px; margin: 5px auto; color: #000000; font-size: 14px; text-align: center; display: block; border: 1px solid #dadce0c4; align-content: center; } .Match-Date-Title,.STING-WEB-Grouped { margin: 15px auto; } .Match-Teams { display: grid; grid-template-columns: 1fr .5fr 1fr; align-items: center; background: #c5c5d32e; width: 96%; margin: 0 auto; padding: 6px; border-radius: 6px; margin-bottom: 5px; gap: 8px; border: 1px solid #dadce0c4; } .Right-Team, .Left-Team { display: flex; align-items: center; gap: 5px; width: 100%; } .Right-Team { direction: ltr; } .Right-Team img, .Left-Team img { width: 30px; height: 30px; object-fit: contain; } .Right-Team span, .Left-Team span { font-size: 13px; } .Match-Center { display: grid; align-items: center; } .Match-Time, .Match-Goals { text-align: center; font-size: 14px; color: #000000; } .Match-Round { text-align: center; font-size: 11px; margin-top: 5px; color: #222; font-weight: 600; } .no-matches,.no-scorers,.no-standings { text-align: center; height: 180px; display: flex; align-items: center; justify-content: center; background: #c5c5d32e; border-radius: 8px; font-size: 16px; color: #222222; border: 1px solid #dadce0c4; }\n@media (max-width: 720px) { .Phone-Show { display: block; } .PC-Show { display: none; } .Team-logo img { width: 25px; height: 25px; } .Team-name { font-size: 13px; } .Club { width: 25px; height: 25px; } }\n.Night .STING-WEB-League-Container *,.Dark .STING-WEB-League-Container *,.dark .STING-WEB-League-Container *,.dark-skin .STING-WEB-League-Container * { color: #fff; }\n.Night .STING-WEB-League-Info,.Dark .STING-WEB-League-Info,.dark .STING-WEB-League-Info,.dark-skin .STING-WEB-League-Info { background: #1d2733; border: 1px solid #1d2733; }  \n.Night #STING-WEB-League-Season,.Dark #STING-WEB-League-Season,.dark #STING-WEB-League-Season,.dark-skin #STING-WEB-League-Season { background: #263545b8; }\n.Night .Match-Date-Title,.Dark .Match-Date-Title,.dark .Match-Date-Title,.dark-skin .Match-Date-Title, .Night .STING-WEB-Grouped,.Dark .STING-WEB-Grouped,.dark .STING-WEB-Grouped,.dark-skin .STING-WEB-Grouped { background: #1d2733; border: 1px solid #1d2733; }\n.Night .STING-WEB-Standings-C-row,.Dark .STING-WEB-Standings-C-row,.dark .STING-WEB-Standings-C-row,.dark-skin .STING-WEB-Standings-C-row { background: #1d2733; border: 1px solid #1d2733; }\n.Night .STING-WEB-Standings-C-row:nth-child(2n),.Dark .STING-WEB-Standings-C-row:nth-child(2n),.dark .STING-WEB-Standings-C-row:nth-child(2n),.dark-skin .STING-WEB-Standings-C-row:nth-child(2n), .Night .STING-WEB-Scorers-row:nth-child(2n),.Dark .STING-WEB-Scorers-row:nth-child(2n),.dark .STING-WEB-Scorers-row:nth-child(2n),.dark-skin .STING-WEB-Scorers-row:nth-child(2n) { background: #1d273369; }\n.Night .STING-WEB-Scorers-row,.Dark .STING-WEB-Scorers-row,.dark .STING-WEB-Scorers-row,.dark-skin .STING-WEB-Scorers-row { background: #1d2733; border: 1px solid #1d2733; }\n.Night .STING-WEB-Scorers-row:nth-child(2n) .Goals,.Dark .STING-WEB-Scorers-row:nth-child(2n) .Goals,.dark .STING-WEB-Scorers-row:nth-child(2n) .Goals,.dark-skin .STING-WEB-Scorers-row:nth-child(2n) .Goals { background: #1d2733; }\n.Night .STING-WEB-Scorers-row .Goals,.Dark .STING-WEB-Scorers-row .Goals,.dark .STING-WEB-Scorers-row .Goals,.dark-skin .STING-WEB-Scorers-row .Goals { background: #222f3e; border: 1px solid #222f3e; }\n.Night .Match-Teams,.Dark .Match-Teams,.dark .Match-Teams,.dark-skin .Match-Teams { background: #1d2733; border: 1px solid #1d2733; }\n.Night .no-matches,.Dark .no-matches,.dark .no-matches,.dark-skin .no-matches, .Night .no-scorers,.Dark .no-scorers,.dark .no-scorers,.dark-skin .no-scorers, .Night .no-standings,.Dark .no-standings,.dark .no-standings,.dark-skin .no-standings { background: #1d2733; border: 1px solid #1d2733; }\n.entry img, figure { margin: 0 !important; display: block !important; }</style>\n<div class=\"STING-WEB-League-Info\">\n        <div class=\"STING-WEB-League-Top\">\n            <div class=\"STING-WEB-Dawry\">\n                <img id=\"STING-WEB-League-Logo\" src=\"https://apis.sting-web.com/npm/v7/assets/loading.gif\" alt=\"League Logo\">\n                <h2 id=\"STING-WEB-League-Name\"></h2><span id=\"STING-WEB-League-Season\"><span>\n            </div>\n        </div>\n        <div class=\"STING-WEB-League-Bottom\">\n            <button class=\"STING-WEB-BTN active\" data-section=\"standings\" onclick=\"showSection('standings', this)\">" + _0x36c710[_0x1aa6a5.getAttribute("lang")].standings + "</button>\n            <button class=\"STING-WEB-BTN\" data-section=\"scorers\" onclick=\"showSection('scorers', this)\">" + _0x36c710[_0x1aa6a5.getAttribute("lang")].scorers + "</button>\n            <button class=\"STING-WEB-BTN\" data-section=\"upcoming-matches\" onclick=\"showSection('upcoming-matches', this)\">" + _0x36c710[_0x1aa6a5.getAttribute("lang")].upcoming + "</button>\n            <button class=\"STING-WEB-BTN\" data-section=\"previous-matches\" onclick=\"showSection('previous-matches', this)\">" + _0x36c710[_0x1aa6a5.getAttribute("lang")].previous + "</button>\n        </div>\n    </div>\n        <div id=\"standings\" class=\"STING-WEB-Container Open-Now\"></div>\n        <div id=\"scorers\" class=\"STING-WEB-Container\"></div>\n        <div id=\"upcoming-matches\" class=\"STING-WEB-Container\"></div>\n        <div id=\"previous-matches\" class=\"STING-WEB-Container\"></div>";
  fetch(_0x164425).then(_0x2c6345 => _0x2c6345.json()).then(_0x36517d => {
    document.getElementById("STING-WEB-League-Name").textContent = _0x36517d.League.Name;
    document.getElementById("STING-WEB-League-Logo").src = _0x36517d.League.Logo;
    document.getElementById("STING-WEB-League-Season").textContent = "- " + _0x36517d.League.Season;
    renderStandings(_0x36517d.Standings);
    renderScorers(_0x36517d.Scorers);
    renderSortedMatches(_0x36517d.Matches, "upcoming-matches");
    renderSortedMatches(_0x36517d.PreviousMatches, "previous-matches");
  })["catch"](_0x28dd5d => console.log("No Access"));
});
