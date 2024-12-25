const elements = [
  {
    time: 2,
    type: 'water',
    shape: [[1, 1, 1],
    [0, 0, 0],
    [0, 0, 0]],
    rotation: 0,
    mirrored: false
  },
  {
    time: 2,
    type: 'town',
    shape: [[1, 1, 1],
    [0, 0, 0],
    [0, 0, 0]],
    rotation: 0,
    mirrored: false
  },
  {
    time: 1,
    type: 'forest',
    shape: [[1, 1, 0],
    [0, 1, 1],
    [0, 0, 0]],
    rotation: 0,
    mirrored: false
  },
  {
    time: 2,
    type: 'farm',
    shape: [[1, 1, 1],
    [0, 0, 1],
    [0, 0, 0]],
    rotation: 0,
    mirrored: false
  },
  {
    time: 2,
    type: 'forest',
    shape: [[1, 1, 1],
    [0, 0, 1],
    [0, 0, 0]],
    rotation: 0,
    mirrored: false
  },
  {
    time: 2,
    type: 'town',
    shape: [[1, 1, 1],
    [0, 1, 0],
    [0, 0, 0]],
    rotation: 0,
    mirrored: false
  },
  {
    time: 2,
    type: 'farm',
    shape: [[1, 1, 1],
    [0, 1, 0],
    [0, 0, 0]],
    rotation: 0,
    mirrored: false
  },
  {
    time: 1,
    type: 'town',
    shape: [[1, 1, 0],
    [1, 0, 0],
    [0, 0, 0]],
    rotation: 0,
    mirrored: false
  },
  {
    time: 1,
    type: 'town',
    shape: [[1, 1, 1],
    [1, 1, 0],
    [0, 0, 0]],
    rotation: 0,
    mirrored: false
  },
  {
    time: 1,
    type: 'farm',
    shape: [[1, 1, 0],
    [0, 1, 1],
    [0, 0, 0]],
    rotation: 0,
    mirrored: false
  },
  {
    time: 1,
    type: 'farm',
    shape: [[0, 1, 0],
    [1, 1, 1],
    [0, 1, 0]],
    rotation: 0,
    mirrored: false
  },
  {
    time: 2,
    type: 'water',
    shape: [[1, 1, 1],
    [1, 0, 0],
    [1, 0, 0]],
    rotation: 0,
    mirrored: false
  },
  {
    time: 2,
    type: 'water',
    shape: [[1, 0, 0],
    [1, 1, 1],
    [1, 0, 0]],
    rotation: 0,
    mirrored: false
  },
  {
    time: 2,
    type: 'forest',
    shape: [[1, 1, 0],
    [0, 1, 1],
    [0, 0, 1]],
    rotation: 0,
    mirrored: false
  },
  {
    time: 2,
    type: 'forest',
    shape: [[1, 1, 0],
    [0, 1, 1],
    [0, 0, 0]],
    rotation: 0,
    mirrored: false
  },
  {
    time: 2,
    type: 'water',
    shape: [[1, 1, 0],
    [1, 1, 0],
    [0, 0, 0]],
    rotation: 0,
    mirrored: false
  },
]
const missions =
{
  "basic": [
    {
      "title": "Az erdő széle",
      "description": "A térképed szélével szomszédos erdőmezőidért egy-egy pontot kapsz.",
      "src": 'missions/Erdoszele.png'
    },
    {
      "title": "Álmos-völgy",
      "description": "Minden olyan sorért, amelyben három erdőmező van, négy-négy pontot kapsz.",
      "src": 'missions/Almosvolgy.png'
    },
    {
      "title": "Krumpliöntözés",
      "description": "A farmmezőiddel szomszédos vízmezőidért két-két pontot kapsz.",
      "src": 'missions/Krumpliontozes.png'
    },
    {
      "title": "Határvidék",
      "description": "Minden teli sorért vagy oszlopért 6-6 pontot kapsz.",
      "src": 'missions/Hatarvidek.png'
    }
  ],
  "extra": [
    {
      "title": "Fasor",
      "description": "A leghosszabb, függőlegesen megszakítás nélkül egybefüggő erdőmezők mindegyikéért kettő-kettő pontot kapsz. Két azonos hosszúságú esetén csak az egyikért.",
      "src": 'missions/Fasor.png'
    },
    {
      "title": "Gazdag város",
      "description": "A legalább három különböző tereptípussal szomszédos falurégióidért három-három pontot kapsz.",
      "src": 'missions/GazdagVaros.png'
    },
    {
      "title": "Öntözőcsatorna",
      "description": "Minden olyan oszlopodért, amelyben a farm illetve a vízmezők száma megegyezik, négy-négy pontot kapsz. Mindkét tereptípusból legalább egy-egy mezőnek lennie kell az oszlopban ahhoz, hogy pontot kaphass érte.",
      "src": 'missions/Ontozocsatorna.png'
    },
    {
      "title": "Mágusok völgye",
      "description": "A hegymezőiddel szomszédos vízmezőidért három-három pontot kapsz.",
      "src": 'missions/MagusokVolgye.png'
    },
    {
      "title": "Üres telek",
      "description": "A városmezőiddel szomszédos üres mezőkért 2-2 pontot kapsz.",
      "src": 'missions/UresTelek.png'
    },
    {
      "title": "Sorház",
      "description": "A leghosszabb, vízszintesen megszakítás nélkül egybefüggő falumezők mindegyikéért kettő-kettő pontot kapsz.",
      "src": 'missions/Sorhaz.png'
    },
    {
      "title": "Páratlan silók",
      "description": "Minden páratlan sorszámú teli oszlopodért 10-10 pontot kapsz.",
      "src": 'missions/ParatlanSilok.png'
    },
    {
      "title": "Gazdag vidék",
      "description": "Minden legalább öt különböző tereptípust tartalmazó sorért négy-négy pontot kapsz.",
      "src": 'missions/GazdagVidek.png'
    }
  ],
}
const grid = document.getElementById('grid');
const table = document.createElement('table');
const rotate_btn = document.querySelector('#rotate')
const mirror_btn = document.querySelector('#mirror')
const shape = document.querySelector('#shape')
const szn = document.querySelector('#szn')
const shapeAct = document.querySelector('#shapeActions')
const timeID = document.querySelector("#time")
const timeLeft = document.querySelector("#timeLeft")
const sznTag = document.querySelector('#sznTag')
const spring = document.querySelector('#springSpan')
const summer = document.querySelector('#summerSpan')
const fall = document.querySelector('#fallSpan')
const winter = document.querySelector('#winterSpan')
const points = document.querySelector('#points')
const missionA = document.querySelector('#missionIMG_A')
const missionB = document.querySelector('#missionIMG_B')
const missionC = document.querySelector('#missionIMG_C')
const missionD = document.querySelector('#missionIMG_D')
const missionImages = document.querySelectorAll('.missionIMG')
const size = 11;
const size2 = 3;
const mountains = [[2, 2], [4, 9], [6, 4], [9, 10], [10, 6]];
const matrix = Array(11).fill().map(() => Array(11).fill(0));

var removedElement = []
let totalTime = 28
var SpringP = 0
var SummerP = 0
var FallP = 0
var WinterP = 0

function getRandomElements(arr, n) {
  const copy = arr.slice();

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy.slice(0, n);
}
const randomMissions = getRandomElements(missions.basic.concat(missions.extra), 4);
document.addEventListener('DOMContentLoaded', function () {
  missionImages.forEach((img, index) => {
    if (index < randomMissions.length) {
      img.src = randomMissions[index].src;
    }
  });
});
randomMissions.forEach(task => {
  switch (task.title) {
    case "Az erdő széle":
      task.calc = ErdoSzeleCalc;
      break;
    case "Álmos-völgy":
      task.calc = AlmosVolgyCalc;
      break;
    case "Krumpliöntözés":
      task.calc = KrumpliontozesCalc;
      break;
    case "Határvidék":
      task.calc = HatarvidekCalc;
      break;
    case "Fasor":
      task.calc = FasorCalc;
      break;
    case "Gazdag város":
      task.calc = GazdagVarosCalc;
      break;
    case "Öntözőcsatorna":
      task.calc = OntozocsatornaCalc;
      break;
    case "Mágusok völgye":
      task.calc = MagusokVolgyeCalc;
      break;
    case "Üres telek":
      task.calc = UresTelekCalc;
      break;
    case "Sorház":
      task.calc = SorhazCalc;
      break;
    case "Páratlan silók":
      task.calc = ParatlanSilokCalc;
      break;
    case "Gazdag vidék":
      task.calc = GazdagVidekCalc;
      break;
  }
})
for (let i = 0; i < 121; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  grid.appendChild(cell);
}
mountains.forEach(([mx, my]) => {
  const cell = grid.children[(my - 1) * 11 + (mx - 1)];
  cell.classList.add('mountain');
  matrix[my - 1][mx - 1] = 'M';
});
function getRandomElementType() {
  const randomIdx = Math.floor(Math.random() * 4);
  switch (randomIdx) {
    case 0:
      return 'water';
    case 1:
      return 'town';
    case 2:
      return 'forest';
    case 3:
      return 'farm';
  }
}
function getRandomElementOfType(elements, type) {
  const elementsOfType = elements.filter(element => element.type === type);
  const randomIdx = Math.floor(Math.random() * elementsOfType.length);
  return elementsOfType[randomIdx];
}
function removeElementFromElements(element) {
  removedElement.push(randElement)
  elements.pop(randElement)
}
function addBackElementToElements() {
  elements.push(...removedElement)
  removedElement = []
}
var randElement = getRandomElementOfType(elements, getRandomElementType())
removeElementFromElements(randElement)
table.classList.add('table')
function rotateElement(element) {
  const N = element.shape.length - 1;
  const result = element.shape.map((row, i) => row.map((val, j) => element.shape[N - j][i]));
  element.shape.length = 0;
  result.forEach(row => element.shape.push(row));
}
function mirrorElement(element) {
  element.shape.forEach(row => row.reverse());
}
function drawElement(element) {
  for (var i = 0; i < size2; i++) {
    var row2 = document.createElement('tr');
    for (var j = 0; j < size2; j++) {
      var cell2 = document.createElement('td');
      cell2.classList.add('table-item')
      if (element.shape[i] && element.shape[i][j]) {
        switch (randElement.type) {
          case 'water':
            cell2.classList.add('water');
            break;
          case 'town':
            cell2.classList.add('town');
            break;
          case 'forest':
            cell2.classList.add('forest');
            break;
          case 'farm':
            cell2.classList.add('farm');
            break;

        }
      }
      row2.appendChild(cell2);
    }
    table.appendChild(row2);
  }
  timeID.innerHTML = "Time: " + element.time
}
drawElement(randElement);
shape.appendChild(table);
function cleartable() {
  while (table.firstChild) {
    table.removeChild(table.firstChild);
  }
}
rotate_btn.addEventListener('click', function () {
  rotateElement(randElement)
  randElement.rotation = (randElement.rotation + 90) % 360;
  cleartable()
  drawElement(randElement)
})
mirror_btn.addEventListener('click', function () {
  mirrorElement(randElement);
  if (randElement.mirrored) {
    randElement.mirrored = false
  } else {
    randElement.mirrored = true
  }
  cleartable()
  drawElement(randElement)
})
var time = 7
var counter = 0
timeLeft.innerHTML = "7/7"
sznTag.innerHTML = "Tavasz (AB)"
missionA.classList.add('activeMission')
missionB.classList.add('activeMission')
function setSeason() {
  if (counter == 0) {
    sznTag.innerHTML = "Tavasz (AB)"
    missionA.classList.add('activeMission')
    missionB.classList.add('activeMission')
  } else if (counter == 1) {
    sznTag.innerHTML = "Nyár (BC)"
    missionA.classList.remove('activeMission')
    missionC.classList.add('activeMission')
  } else if (counter == 2) {
    sznTag.innerHTML = "Ősz (CD)"
    missionB.classList.remove('activeMission')
    missionD.classList.add('activeMission')
  } else if (counter == 3) {
    sznTag.innerHTML = "Tél (DA)"
    missionC.classList.remove('activeMission')
    missionD.classList.add('activeMission')
    missionA.classList.add('activeMission')
  }
  if (time < 0) {
    time = 7 - time
  } else {
    time = 7 + randElement.time
  }
  setTime()

}
function calcSznPoints() {
  const BekeritettHegyek = HegyekTeljesBekeriteseCalc(matrix);
  if (counter == 0) {
    SpringP = calculatePoints(randomMissions[0].calc(matrix), randomMissions[1].calc(matrix))
    SpringP += BekeritettHegyek;
    spring.innerHTML = SpringP + " pont"
  } else if (counter == 1) {
    SummerP = calculatePoints(randomMissions[1].calc(matrix), randomMissions[2].calc(matrix))
    SummerP += BekeritettHegyek;
    summer.innerHTML = SummerP + " pont"
  } else if (counter == 2) {
    FallP = calculatePoints(randomMissions[2].calc(matrix), randomMissions[3].calc(matrix))
    FallP += BekeritettHegyek;
    fall.innerHTML = FallP + " pont"
  } else if (counter == 3) {
    WinterP = calculatePoints(randomMissions[3].calc(matrix), randomMissions[0].calc(matrix))
    WinterP += BekeritettHegyek;
    winter.innerHTML = WinterP + " pont"
    alert("Álmosvölgy: " + AlmosVolgyCalc(matrix) + " pont\nErdőszéle: " + ErdoSzeleCalc(matrix) + " pont\nFasor: " + FasorCalc(matrix) + " pont\nGazdag Város: " + GazdagVarosCalc(matrix) + " pont\nGazdag Vidék: " + GazdagVidekCalc(matrix) + " pont\nHatárvidék: " + HatarvidekCalc(matrix) + " pont\nKrumpliöntözés: " + KrumpliontozesCalc(matrix) + " pont\nMágusok Völgye: " + MagusokVolgyeCalc(matrix) + " pont\nÖntözőcsatorna: " + OntozocsatornaCalc(matrix) + " pont\nPáratlan Silók: " + ParatlanSilokCalc(matrix) + " pont\nSorház: " + SorhazCalc(matrix) + " pont\nÜres telek: " + UresTelekCalc(matrix) + " pont\nHegyek Teljesen Bekerítve: " + HegyekTeljesBekeriteseCalc(matrix) + " pont\n4 évszak pontszámai összesen: " + (SpringP + SummerP + FallP + WinterP) + " pont\nTavasz: " + SpringP + " pont\nNyár: " + SummerP + " pont\nŐsz: " + FallP + " pont\nTél: " + WinterP + " pont")
  }
  points.innerHTML = "Összesen: " + (WinterP + SpringP + SummerP + FallP)
}
function timeChecker() {
  if (time <= 0) {
    calcSznPoints()
    counter += 1
    addBackElementToElements()
    setSeason()
  }
}
function setTime() {
  timeChecker()
  timeID.innerHTML = "Time: " + randElement.time
  time -= randElement.time
  timeLeft.innerHTML = `${time}/7`;
}
grid.addEventListener('mouseover', function (e) {
  if (e.target.classList.contains('cell')) {
    const index = Array.from(grid.children).indexOf(e.target);
    const x = index % 11;
    const y = Math.floor(index / 11);
    let canPlace = true;
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (randElement.shape[j + 1][i + 1] === 1) {
          const xi = x + i;
          const yj = y + j;
          if (xi >= 0 && xi < 11 && yj >= 0 && yj < 11) {
            if (matrix[yj][xi] === 'F' || matrix[yj][xi] === 'W' || matrix[yj][xi] === 'T' || matrix[yj][xi] === 'f' || matrix[yj][xi] === 'M') {
              canPlace = false;
            }
          } else {
            canPlace = false;
          }
        }
      }
    }
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (randElement.shape[j + 1][i + 1] === 1) {
          const xi = x + i;
          const yj = y + j;
          if (xi >= 0 && xi < 11 && yj >= 0 && yj < 11) {
            const cell = grid.children[yj * 11 + xi];
            cell.classList.add(canPlace ? 'hover-green' : 'hover-red');
          }
        }
      }
    }
  }
});
grid.addEventListener('mouseout', function (e) {
  if (e.target.classList.contains('cell')) {
    const cells = document.querySelectorAll('.hover-green, .hover-red');
    cells.forEach(cell => cell.classList.remove('hover-green', 'hover-red'));
  }
});
grid.addEventListener('click', function (e) {
  if (e.target.classList.contains('cell')) {
    const index = Array.from(grid.children).indexOf(e.target);
    const x = index % 11;
    const y = Math.floor(index / 11);
    let canPlace = true;
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (randElement.shape[j + 1][i + 1] === 1) {
          const xi = x + i;
          const yj = y + j;
          if (xi >= 0 && xi < 11 && yj >= 0 && yj < 11) {
            if (matrix[yj][xi] === 'F' || matrix[yj][xi] === 'W' || matrix[yj][xi] === 'T' || matrix[yj][xi] === 'f' || matrix[yj][xi] === 'M') {
              canPlace = false;
            }
          } else {
            canPlace = false;
          }
        }
      }
    }
    if (canPlace) {
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          if (randElement.shape[j + 1][i + 1] === 1) {
            const xi = x + i;
            const yj = y + j;
            if (xi >= 0 && xi < 11 && yj >= 0 && yj < 11) {
              const cell = grid.children[yj * 11 + xi];
              switch (randElement.type) {
                case 'water':
                  cell.classList.add('water');
                  matrix[yj][xi] = 'W'
                  break;
                case 'town':
                  cell.classList.add('town');
                  matrix[yj][xi] = 'T';
                  break;
                case 'forest':
                  cell.classList.add('forest');
                  matrix[yj][xi] = 'F';
                  break;
                case 'farm':
                  cell.classList.add('farm');
                  matrix[yj][xi] = 'f';
                  break;

              }
            }
          }
        }
      }
      setTime()
      timeChecker()
      cleartable()
      randElement = getRandomElementOfType(elements, getRandomElementType())
      removeElementFromElements(randElement)
      drawElement(randElement)
    }
  }

});
function calculatePoints(func1, func2) {
  return (func1 + func2)
}


//JÓ
function ErdoSzeleCalc(board) {
  let points = 0;
  for (let i = 0; i < board.length; i++) {
    if (board[0][i] === 'F') {
      points++;
    }
    if (board[10][i] === 'F') {
      points++;
    }
  }
  for (let i = 0; i < board.length; i++) {
    if (board[i][0] === 'F') {
      points++;
    }
    if (board[i][10] === 'F') {
      points++;
    }
  }
  console.log(points + " erdoszele")
  return points;
}

//JÓ
function AlmosVolgyCalc(board) {
  let points = 0;
  for (let i = 0; i < board.length; i++) {
    let forestInRow = 0;
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] == 'F') {
        forestInRow++;
      }
    }
    if (forestInRow === 3) {
      points += 4;
    }
  }
  console.log(points + " almosvolgy")
  return points;
}

//JÓ
function KrumpliontozesCalc(board) {
  let points = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] == 'f') {
        if (i > 0 && (board[i - 1][j] == 'W')) {
          points += 2;
        }
        if (i < 10 && (board[i + 1][j] == 'W')) {
          points += 2;
        }
        if (j > 0 && (board[i][j - 1] == 'W')) {
          points += 2;
        }
        if (j < 10 && (board[i][j + 1] == 'W')) {
          points += 2;
        }
      }
    }
  }
  console.log(points + " krumpliontozes")
  return points;
}

//JÓ
function HatarvidekCalc(board) {
  let points = 0;
  for (let i = 0; i < board.length; i++) {
    let fullRow = true;
    let fullCol = true;
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] !== 'M' && board[i][j] !== 'W' && board[i][j] !== 'F' && board[i][j] !== 'f' && board[i][j] !== 'T') {
        fullRow = false;
      }
      if (board[j][i] !== 'M' && board[j][i] !== 'W' && board[j][i] !== 'F' && board[j][i] !== 'f' && board[j][i] !== 'T') {
        fullCol = false;
      }
    }
    if (fullRow) {
      points += 6;
    }
    if (fullCol) {
      points += 6;
    }
  }
  console.log(points + " hatarvidek")
  return points;
}

//JÓ
function HegyekTeljesBekeriteseCalc(board) {
  let points = 0;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === 'M') {
        let surrounded = true;

        if (i > 0 && board[i - 1][j] !== 'F' && board[i - 1][j] !== 'f' && board[i - 1][j] !== 'W' && board[i - 1][j] !== 'T') {
          surrounded = false;
        }
        if (i < 11 && board[i + 1][j] !== 'F' && board[i + 1][j] !== 'f' && board[i + 1][j] !== 'W' && board[i + 1][j] !== 'T') {
          surrounded = false;
        }
        if (j > 0 && board[i][j - 1] !== 'F' && board[i][j - 1] !== 'f' && board[i][j - 1] !== 'W' && board[i][j - 1] !== 'T') {
          surrounded = false;
        }
        if (j < 11 && board[i][j + 1] !== 'F' && board[i][j + 1] !== 'f' && board[i][j + 1] !== 'W' && board[i][j + 1] !== 'T') {
          surrounded = false;
        }

        if (surrounded) {
          points++;
        }
      }
    }
  }
  console.log(points + " hegy korbe")
  return points;
}

//JÓ
function FasorCalc(board) {
  let longestForestStreak = 0;
  let currentStreak = 0;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][i] === 'F') {
        currentStreak++;
      } else {
        longestForestStreak = Math.max(longestForestStreak, currentStreak);
        currentStreak = 0;
      }
    }
    longestForestStreak = Math.max(longestForestStreak, currentStreak);
    currentStreak = 0;
  }
  console.log(longestForestStreak * 2 + " fasor")
  return longestForestStreak * 2;
}

//JÓ
function GazdagVarosCalc(board) {
  let points = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 'T') {
        let surrounded = 0;
        let types = [];

        if (i > 0 && (board[i - 1][j] == 'F' || board[i - 1][j] == 'f' || board[i - 1][j] == 'W' || board[i - 1][j] == 'T' || board[i - 1][j] == 'M') && !types.includes(board[i - 1][j])) {
          types.push(board[i - 1][j]);
          surrounded += 1;
        }
        if (i < board.length - 1 && (board[i + 1][j] == 'F' || board[i + 1][j] == 'f' || board[i + 1][j] == 'W' || board[i + 1][j] == 'T' || board[i + 1][j] == 'M') && !types.includes(board[i + 1][j])) {
          types.push(board[i + 1][j]);
          surrounded += 1;
        }
        if (j > 0 && (board[i][j - 1] == 'F' || board[i][j - 1] == 'f' || board[i][j - 1] == 'W' || board[i][j - 1] == 'T' || board[i][j - 1] == 'M') && !types.includes(board[i][j - 1])) {
          types.push(board[i][j - 1]);
          surrounded += 1;
        }
        if (j < board[i].length - 1 && (board[i][j + 1] == 'F' || board[i][j + 1] == 'f' || board[i][j + 1] == 'W' || board[i][j + 1] == 'T' || board[i][j + 1] == 'M') && !types.includes(board[i][j + 1])) {
          types.push(board[i][j + 1]);
          surrounded += 1;
        }

        if (surrounded >= 3) {
          points += 3;
        }
      }
    }
  }
  console.log(points + " gazdagvaros")
  return points;
}

//JÓ
function OntozocsatornaCalc(board) {
  let points = 0;

  for (let i = 0; i < board.length; i++) {
    let farmCount = 0;
    let waterCount = 0;

    for (let j = 0; j < board.length; j++) {
      if (board[j][i] === 'f') {
        farmCount++;
      } else if (board[j][i] === 'W') {
        waterCount++;
      }
    }

    if (farmCount > 0 && waterCount > 0 && farmCount === waterCount) {
      points += 4;
    }
  }
  console.log(points + " ontozocsatorna")
  return points;
}
//JÓ
function MagusokVolgyeCalc(board) {
  let points = 0;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === 'M') {
        const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]; // Jobbra, balra, le, fel
        for (const [di, dj] of directions) {
          const ni = i + di;
          const nj = j + dj;
          if (ni >= 0 && ni < 11 && nj >= 0 && nj < 11 && board[ni][nj] === 'W') {
            points += 3;
          }
        }
      }
    }
  }
  console.log(points + " magusokvolgye")
  return points;
}

//JÓ
function UresTelekCalc(board) {
  let points = 0;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === 'T') {
        const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]; // Jobbra, balra, le, fel
        for (const [di, dj] of directions) {
          const ni = i + di;
          const nj = j + dj;
          if (ni >= 0 && ni < 11 && nj >= 0 && nj < 11 && board[ni][nj] === 0) {
            points += 2;
          }
        }
      }
    }
  }
  console.log(points + " urestelek")
  return points;
}

//JÓ
function SorhazCalc(board) {
  let longestTownStreak = 0;
  let currentStreak = 0;
  let numOfLongestStreaks = 1;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === 'T') {
        currentStreak++;
      } else {
        if (currentStreak == longestTownStreak) {
          numOfLongestStreaks++;
        }else if(currentStreak > longestTownStreak){
          longestTownStreak = currentStreak;
          numOfLongestStreaks = 1;
        }
        currentStreak = 0;
      }
    }
    if (currentStreak == longestTownStreak) {
      numOfLongestStreaks++;
    }else if(currentStreak > longestTownStreak){
      longestTownStreak = currentStreak;
      numOfLongestStreaks = 1;
    }
    currentStreak = 0;
  }
  const points = longestTownStreak * 2 * numOfLongestStreaks;
  console.log(points + " sorhaz")
  return points;
}

//JÓ
function ParatlanSilokCalc(board) {
  let points = 0;
  for (let i = 0; i < board.length; i++) {
    let fullColumn = true
    for (let j = 0; j < board.length; j++) {
      if (board[j][i] === 0) {
        fullColumn = false
        break;
      }
    }
    if (fullColumn) {
      points += 10
    }
  }
  console.log(points + " paratlansilok")
  return points;
}

//JÓ
function GazdagVidekCalc(board) {
  let points = 0;

  for (let i = 0; i < board.length; i++) {
    const types = new Set();
    for (let j = 0; j < board.length; j++) {
      if (types[j] != board[i][j] && board[i][j] != 0) {
        types.add(board[i][j]);
      }
    }
    if (types.size >= 5) {
      points += 4;
    }
  }

  console.log(points + " gazdagvidek")
  return points;
}