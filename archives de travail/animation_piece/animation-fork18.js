window.document.addEventListener('DOMContentLoaded', function() {
  /*****************************************************************************
  Définition des images utilisées
  *****************************************************************************/
  var mySpriteSheet = new Image();
  mySpriteSheet.src = "img/mySpriteSheet200.png";

  function background() {
      var backgroundImage = new Image();
      backgroundImage.src = "img/bg.jpg"
      var ctx = canvas.getContext("2d");
      ctx.drawImage(backgroundImage, 0, 0);
      ctx.font = 'bold 35px Franklin Gothic';
      var displayCountDown = 'il vous reste : ' + parseInt((7260 - requestId) / 60) + ' secondes  avant la fin du jeu';
      var countDownTextSize = ctx.measureText(displayCountDown)
      ctx.fillStyle = "white"
      ctx.fillText(displayCountDown, canvas.width - countDownTextSize.width, 30);
      ctx.strokeText(displayCountDown, canvas.width - countDownTextSize.width, 30);
  };

  /***************************************************************************
  Définition du canvas
  ***************************************************************************/
  var canvas = document.getElementById('stage');
  canvas.height = 720;
  canvas.width = 1000;


  var cssName = document.getElementById('node');
  cssName.className = 'btn btn-success'

  var paused = false;

  var button = document.getElementById('start')
  button.addEventListener('click', function() {
      if (paused) {
          paused = false;
          button.setAttribute('value', 'Pause')
          gameLoop();
      } else {
          paused = true;
          button.setAttribute('value', 'Reprendre')
      }
  });

  /***************************************************************************
  Définition des sprites
  ***************************************************************************/
  var elements = [

      {
          nom: 'plateforme',
          sx: 1500,
          sy: 400,
          dx: 450,
          dy: 600,
          dw: 300,
          dh: 100,
          ratio: 1,
          scenery: true,
          pf: true

      }
      // {
      //     nom: 'plateforme2',
      //     sx: 800,
      //     sy: 400,
      //     dx: 550,
      //     dy: 500,
      //     dw: 200,
      //     dh: 20,
      //     ratio: 1,
      //     scenery: true,
      //     platform: true
      //
      // }
      // {
      //     nom: 'html',
      //     sx: 1000,
      //     sy: 1000,
      //     dx: 100,
      //     dy: 100,
      //     numberOfFrames: 6,
      //     ratio: 0.5,
      //     ticksPerFrame: 10,
      //     bonus: true
      // }, {
      //     nom: 'css',
      //     sx: 1000,
      //     sy: 1100,
      //     dx: 200,
      //     dy: 100,
      //     moving: true,
      //     numberOfFrames: 6,
      //     ratio: 0.5,
      //     ticksPerFrame: 10,
      //     bonus: true
      //
      //
      // }, {
      //     nom: 'javascript',
      //     sx: 1000,
      //     sy: 1200,
      //     dx: 300,
      //     dy: 100,
      //     moving: true,
      //     numberOfFrames: 6,
      //     ratio: 0.5,
      //     ticksPerFrame: 10,
      //     bonus: true
      //
      //
      // }, {
      //     nom: 'angular',
      //     sx: 1000,
      //     sy: 1300,
      //     dx: 400,
      //     dy: 100,
      //     moving: true,
      //     numberOfFrames: 6,
      //     ratio: 0.5,
      //     ticksPerFrame: 10,
      //     bonus: true
      //
      //
      // }, {
      //     nom: 'mongo',
      //     sx: 1000,
      //     sy: 1400,
      //     dx: 500,
      //     dy: 100,
      //     moving: true,
      //     numberOfFrames: 6,
      //     ratio: 0.5,
      //     ticksPerFrame: 10,
      //     bonus: true
      //
      //
      // }, {
      //     nom: 'node',
      //     sx: 1000,
      //     sy: 1500,
      //     dx: 600,
      //     dy: 100,
      //     moving: true,
      //     numberOfFrames: 6,
      //     ratio: 0.5,
      //     ticksPerFrame: 10,
      //     bonus: true
      //
      //
      // }, {
      //     nom: 'meteor',
      //     sx: 1000,
      //     sy: 1600,
      //     dx: 700,
      //     dy: 100,
      //     moving: true,
      //     numberOfFrames: 6,
      //     ratio: 0.5,
      //     ticksPerFrame: 10,
      //     bonus: true
      //
      //
      // },
      // {
      //     nom: 'flora',
      //     sx: 1100,
      //     sy: 400,
      //     dx: 620,
      //     dy: 610,
      //     dw: 100,
      //     dh: 100,
      //     scenery: true
      // }, {
      //     nom: 'flora2',
      //     sx: 1300,
      //     sy: 400,
      //     dx: 220,
      //     dy: 575,
      //     dw: 100,
      //     dh: 100,
      //     scenery: true,
      // }
      // {
      //     nom: 'life1',
      //     sx: 1600,
      //     sy: 400,
      //     dx: 10,
      //     dy: 10,
      //     dw: 100,
      //     dh: 100,
      //     ratio: 0.5,
      //     scenery: true
      // },
      // {
      //     nom: 'life2',
      //     sx: 1600,
      //     sy: 400,
      //     dx: 70,
      //     dy: 10,
      //     dw: 100,
      //     dh: 100,
      //     ratio: 0.5,
      //     scenery: true
      // },
      // {
      //     nom: 'life3',
      //     sx: 1600,
      //     sy: 400,
      //     dx: 130,
      //     dy: 10,
      //     dw: 100,
      //     dh: 100,
      //     ratio: 0.5,
      //     scenery: true
      // },
      //  {
      //     nom: 'monster',
      //     sx: 0,
      //     sy: 800,
      //     dx: 0,
      //     dy: 610,
      //     moving: true,
      //     moveFrom: 1,
      //     moveTo: 400,
      //     numberOfFrames: 7,
      //     ticksPerFrame: 5,
      //     danger: true
      // }
      // {
      //     nom: 'monster2',
      //     sx: 0,
      //     sy: 800,
      //     dx: 500,
      //     dy: 610,
      //     danger: true,
      //     numberOfFrames: 7,
      //     ticksPerFrame: 10,
      //     moving: true,
      //     moveFrom: 500,
      //     moveTo: 1000,
      // },
      // {
      //     nom: 'lapin',
      //     sx: 0,
      //     sy: 1400,
      //     dx: 300,
      //     dy: 610,
      //     vx : 3  ,
      //     numberOfFrames: 7,
      //     ticksPerFrame: 5,
      //     moving: true,
      //     moveFrom: 0,
      //     moveTo: 1000,
      //     danger : true
      // }
  ];

  var bonusCounter = 0;

  /***************************************************************************
  Propriétés particulières
  ***************************************************************************/
  var gain = [];


  var storeInGain = function(bonus) {
      var i = gain.length;
      bonus.bonus = false;
      bonus.scenery = true;
      bonus.dx = 100 * i;
      bonus.dy = 100 * i;
      gain[i] = bonus;
      console.log(gain[i])
  };

  var displayBonus = function() {
      if (gain.length) {
          var cssName = document.getElementById(gain[0].nom)
          cssName.setAttribute('style', 'visibility:visible');
          gain.pop();
      }
  }

  /***************************************************************************
  Fonctions Constructeurs
  ***************************************************************************/
  var Sprite = function(options) {
      this.nom = options.nom || 'item';
      this.context = options.context || canvas.getContext('2d');
      this.image = options.img || mySpriteSheet;
      this.sx = options.sx;
      this.sy = options.sy;
      this.sw = options.sw || 100;
      this.sh = options.sh || 100;
      this.dx = options.dx;
      this.dy = options.dy;
      this.dw = options.dw || 100;
      this.dh = options.dh || 100;
      this.ratio = options.ratio || 1;
      this.frameIndex = 0;
      this.scenery = options.scenery;
      this.danger = options.danger || false;
      this.bonus = options.bonus || false;
      this.pf = options.pf || false;


      this.render = function() { //affiche l'image dans le canvas
          this.context.drawImage(
              this.image, //insert l'image
              this.sx + this.sw * this.frameIndex,
              this.sy,
              this.sw,
              this.sh,
              this.dx,
              this.dy,
              this.dw * this.ratio,
              this.dh * this.ratio);
      };


  };

  //Fonction constructeur qui anime le sprite
  var AnimatedSprite = function(options) {
      //propriétés liées à l'animation
      this.tickCount = 0,
          this.ticksPerFrame = options.ticksPerFrame || 0;
      this.numberOfFrames = options.numberOfFrames || 1;
      this.animation = options.animation;


      this.update = function() { // anime l'image
          this.tickCount += 1;
          if (this.tickCount > this.ticksPerFrame) {
              this.tickCount = 0;
              if (this.frameIndex < this.numberOfFrames - 1) {
                  this.frameIndex += 1;
              } else {
                  this.frameIndex = 0;
              };
          };
      };
  };

  //Fonction constructeur qui déplace le sprite sur le canvas
  var MovingSprite = function(options) {

      this.moveTo = options.moveTo;
      this.moveFrom = options.moveFrom;
      this.moving = options.moving;
      this.vx = options.vx || 1;
      this.vy = options.vy || 0;
      this.mass = 1.02;
      this.startingSY = this.sy;
      this.floor = {
          x1: -100,
          x2: canvas.width,
          bottom: 700
      };

      this.gravity = function() {
          if (this.dx >= this.floor.x1 && this.dx <= this.floor.x2) {
              this.maxJump = this.floor.bottom - 200;
              this.dy *= this.mass;
              if (this.dy + this.dh >= this.floor.bottom) {
                  this.dy = this.floor.bottom - this.dh;
              }

              if (this.dy + this.dh <= this.maxJump) {
                  var dir = 1
              }

              if (this.dy + this.dh >= this.floor.bottom) {
                  dir = 0;
              }

              if (dir) {
                  this.vy = 15;
              }
              if (dir == false) {
                  this.vy = -15;
              }
          } else {
              this.dy *= this.mass;
          };

      };

      this.translate = function(start, end, sy) { //Effectue une translation de l'image
          if (start != end) {

              if (this.dx > end) {
                  this.dir = 1;
                  this.sy = sy + 100;
              }
              if (this.dx < start) {
                  this.dir = 0;
                  this.sy = this.startingSY;
              }

              if (this.dir) {
                  this.dx -= this.vx;
              } else {
                  this.dx += this.vx;
              };
          };
      };
  };



  var Bonus = function(options) {
      this.dx = Math.random() * 1000;
      this.tickCount = 0;
      this.ticksPerFrame = 10;
      this.mass = 1.001
      this.random = function(min, max) {
          return Math.random() * (max - min + 1);
      }

      this.fall = function() {
          this.tickCount += 1

          if (this.tickCount > this.ticksPerFrame) {
              if (this.dy + this.dh - 100 >= this.floor.bottom) {
                  this.dy = 0;
                  this.dx = Math.random() * canvas.width
              }
              if (this.dx <= 1 || this.dx + this.dw >= canvas.width) {
                  this.dx = Math.random() * 1000;
                  this.dy = 0
              }


              this.dx += this.random(-5, 5);
              this.dy += this.random(-10, 2);
              this.tickCount = 0;
          };
      };
  };


  /**************************************************************************/
  var Heros = function(options) {
      this.heros = options.heros;
      this.canGoRight = false;
      this.canGoLeft = false;
      this.canJump = false;
      this.mass = 1.02;
      this.vy = 0; //vitesse actuelle du sprite
      this.vx = 0; //vitesse actuelle du sprite
      this.vMax = 2; //vitesse maximale du sprite
      this.vAccel = 0.5; //acceleration du sprite
      this.hitBoxAdj = 31; //permet d'ajuster la taille des hitbox des objets, correctif apporté par rapport à la taille dessin dans le Frame
      this.currentPlatform = {};
      this.currentEnnemy = {};
      this.onPlatform = false;
      this.dying = false;
      this.lifes = 3;



      this.testCollision = function() {
          for (var i = 0; i < stage.length; i++) {
              if (stage[i]) {
                  if (this.dx + this.hitBoxAdj < stage[i].dx + stage[i].dw - this.hitBoxAdj &&
                      this.dx + this.dw - this.hitBoxAdj > stage[i].dx + this.hitBoxAdj &&
                      this.dy + this.hitBoxAdj < stage[i].dy + stage[i].dh - this.hitBoxAdj &&
                      this.dh + this.dy - this.hitBoxAdj > stage[i].dy + this.hitBoxAdj) {
                      this.collision = true;

                      if (stage[i].danger) {
                          this.currentEnnemy = stage[i];
                          this.vsEnnemy(this.currentEnnemy)
                      };
                      if (stage[i].pf) {
                          this.currentPlatform = stage[i];
                          this.onPlatform = true;
                          this.vsPlatform(this.currentPlatform)
                      };
                      if (stage[i].bonus) {
                          console.log('bonus')
                      };
                  }
                  if (this.dx > stage[i].dx + stage[i].dw ||
                      this.dx + this.dw < stage[i].dx ||
                      this.dy > stage[i].dy + stage[i].dh ||
                      this.dh + this.dy < stage[i].dy) {
                      console.log('pas collision')
                      if (this.onPlatform) {
                          if (this.dx < this.currentPlatform.dx || this.dx + this.dw > this.currentPlatform.dx + this.currentPlatform.dw) {
                              this.floor.bottom = 700;
                              //uniquement à la descente
                              this.onPlatform = false;
                          }
                      }
                      if (this.dying) {
                          console.log('on passe à this.dying')
                          this.dying = false;
                          this.sy = 200;
                          this.numberOfFrames = 22;
                          this.ticksPerFrame = 4;
                          this.dx = canvas.width / 2;
                          window.setTimeout(function() {
                              launchlistener();
                          }, 1000);
                      }
                  }
              }
          };
      };

      this.vsEnnemy = function(ennemy) {
          console.log('ennemy')
          document.removeEventListener('keydown', keyControl);
          //repositionne l'ennemi à sa position originale
          ennemy.dx = ennemy.moveFrom;

          //bloque le personnage
          this.canGoRight = false;
          this.canGoLeft = false;
          this.sy = 500;
          this.numberOfFrames = 6;
          this.ticksPerFrame = 20;

          for (var i = 0; i < stage.length; i++) {
              if (stage[i].nom == 'life' + this.lifes) {
                  (console.log(stage[i].nom + '- i = ' + i))
                  stage[i].scenery = false;
                  this.lifes -= 1
                  console.log(this.lifes)
                  break;
              }
          }
          this.dying = true;
      }


      /*****************************************************************************¨
          GESTION COLLISION AVEC platform
          *************************************************************************/
      //jumpmax = 636
      //this.dy = 600
      //currentPlatform dx = 450
      //currentPlatform dy = 600
      //currentPlatform dw = 250
      //currentPlatform dh = 10



      this.vsPlatform = function(currentPlatform) {
          console.log(this.dy)
          if (this.dy < currentPlatform.dy) {
              this.floor.bottom = currentPlatform.dy;
          } else if (this.dy >= currentPlatform.dy) {
              if (this.dx <= currentPlatform.dx) {
                  this.dx = currentPlatform.dx - this.dw;
              };
              if (this.dx >= currentPlatform.dx) {
                  this.dx = currentPlatform.dx + currentPlatform.dw
              }
          } else {
              this.maxJump = currentPlatform.dy + currentPlatform.dh
          }
      };

      this.goRight = function() {
          if (this.canGoRight == true) {
              if (this.vx < this.vMax) {
                  this.sy = 0;
                  this.numberOfFrames = 27;
                  this.vx += this.vAccel;
              }
              this.dx += this.vx;
          };
      }

      this.goLeft = function() {
          if (this.canGoLeft == true) {
              if (this.vx > -this.vMax) {
                  this.sy = 100;
                  this.numberOfFrames = 27;
                  this.vx -= this.vAccel;
              }
              this.dx += this.vx;
          };
      }

      this.isWaiting = function() {
          if (this.waiting == true) {
              this.sy = 300;
              this.sx = 0;
              this.numberOfFrames = 22;
          }
      }

      this.stopRunning = function() {
          if (this.canGoRight == false) {
              if (this.vx > 0) {
                  this.sy = 200;
                  this.numberOfFrames = 22;
                  this.vx -= this.vAccel;
              }
              this.dx += this.vx;
          }

          if (this.canGoLeft == false) {
              if (this.vx < 0) {
                  this.sy = 200;
                  this.numberOfFrames = 22;
                  this.vx += this.vAccel;
              }
              this.dx += this.vx;
          }
      }

      this.goUp = function() {
          if (this.canJump == true) {
              this.vy += 1;

              if (this.vx == 0) {
                  this.vx = 0;
              } else if (this.vx < this.vMax) {
                  this.vx += this.vAccel;
                  if (this.vx > 0) {
                      this.sy = 600;
                      this.numberOfFrames = 9;
                  };
                  if (this.vx < 0) {
                      this.sy = 700;
                      this.numberOfFrames = 9;
                  }
              }

              this.mass = 1;
              this.dy += this.vy;
              this.dx += this.vx;
          };
      };

      this.stopJumping = function() {
          if (this.canJump == false) {
              this.mass = 1.02;
              if (this.vy >= 0) {
                  this.vy -= 0.5;
              };
          };
      };

  };

  /**************************************************************************
  GESTION DU CLAVIER

  Lorsqu'on appuie sur une touche, on passe une condition à true.
  La boucle gameLoop parcours 60 fois par secondes les fonctions de déplacement du héros.

  Lorsqu'on relâche la touche, la condition passe à faux.
  ***************************************************************************/
  function keyControl(e) {
      var event = e.keyCode;
      // e.preventDefault();

      switch (event) {
          case 39:
              tim.canGoRight = true;
              break;

          case 37:
              tim.canGoLeft = true;
              break;

          case 38:
              tim.canJump = true;
              break;
      };
  };

  var launchlistener = function() {
      console.log('ecoute lancée')
      document.addEventListener('keydown', keyControl);
  };

  launchlistener()

  document.addEventListener('keyup', function(e) {
      var event = e.keyCode;
      switch (event) {
          case 39:
              tim.canGoRight = false;
              break;

          case 37:
              tim.canGoLeft = false;
              break;

          case 38:
              tim.canJump = false;
              break;
      };
  });

  /***************************************************************************
  CHAINE DE PROTOTYPAGE
  ***************************************************************************/
  var getSprite = function(options) {
      return new Sprite(options);
  };

  var getAnimatedSprite = function(options) {
      AnimatedSprite.prototype = getSprite(options);
      return new AnimatedSprite(options);
  };

  var getMovingSprite = function(options) {
      MovingSprite.prototype = getAnimatedSprite(options);
      return new MovingSprite(options);
  };

  var getBonusSprite = function(options) {
      Bonus.prototype = getMovingSprite(options);
      return new Bonus(options);
  };

  var getHeros = function(options) {
      Heros.prototype = getMovingSprite(options);
      return new Heros(options);
  }

  /***************************************************************************
  Constitution du décor (scenery)
  ***************************************************************************/
  var stage = []; //tous les élements qui s'affichent sont dans ce tableau
  (function createStage() {
      for (var i = 0; i < elements.length; i++) {
          if (elements[i].scenery) {
              stage[i] = getSprite(elements[i]);
          };
          if (elements[i].animation) {
              stage[i] = getAnimatedSprite(elements[i]);
          };
          if (elements[i].moving) {
              stage[i] = getMovingSprite(elements[i]);
          };
          if (elements[i].bonus) {
              stage[i] = getBonusSprite(elements[i]);
          };
          if (elements[i].heros) {
              stage[i] = getHeros(elements[i]);
          };
      }
  })();

  var displayStage = function(options) {
      for (var i = 0; i < options.length; i++) {
          if (options[i].scenery) {
              options[i].render();
          };
          if (options[i].animation) {
              options[i].render();
              options[i].update();
          };
          if (options[i].bonus) {
              options[i].render();
              options[i].update();
              options[i].gravity();
              options[i].fall();
          };
          if (options[i].moving) {
              options[i].render();
              options[i].update();
              options[i].gravity();
              options[i].translate(options[i].moveFrom, options[i].moveTo, options[i].sy);
          };
      };
  };

  var tim = getHeros({
      sx: 0,
      sy: 200,
      dx: 100,
      dy: 300,
      dw: 100,
      dh: 100,
      numberOfFrames: 22,
      ticksPerFrame: 5,
  })


  /**************************************************************************
  SCORE
  ***************************************************************************/

  var score = []


  /***************************************************************************
  GAME LOOP
  Cette fonction
  ***************************************************************************/
  var requestId;

  function gameLoop() {
      canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
      background();
      displayStage(stage);
      displayBonus();
      tim.gravity();
      tim.render();
      tim.update();
      tim.goRight();
      tim.goLeft();
      tim.stopRunning();
      tim.goUp();
      tim.stopJumping();
      tim.isWaiting();
      tim.testCollision();


      requestId = window.requestAnimationFrame(gameLoop);

      if (paused == true || requestId == 7260) {
          var ctx = canvas.getContext('2d');
          ctx.fillStyle = 'rgba(0,0,0,0.5)'
          ctx.fillRect(0, 0, canvas.width, canvas.height)
          cancelAnimationFrame(requestId);
      }

  };

  mySpriteSheet.addEventListener('load', gameLoop); //attend que la spritsheet soit chargée avant de lancer l'animation.
  // console.log(stage)


  console.log(stage)


});
