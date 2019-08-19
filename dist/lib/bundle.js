!function(t){var i={};function s(e){if(i[e])return i[e].exports;var h=i[e]={i:e,l:!1,exports:{}};return t[e].call(h.exports,h,h.exports,s),h.l=!0,h.exports}s.m=t,s.c=i,s.d=function(t,i,e){s.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:e})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,i){if(1&i&&(t=s(t)),8&i)return t;if(4&i&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var h in t)s.d(e,h,function(i){return t[i]}.bind(null,h));return e},s.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(i,"a",i),i},s.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},s.p="",s(s.s=0)}([function(t,i,s){"use strict";s.r(i);class e{constructor(){this.restart=!1,this.input={LEFT:!1,RIGHT:!1,ATTACK:!1,REVIVE:!1,KICK:!1,SHOOT:!1,SPECIAL:!1},this.attack=!1,this.counter=0}gameControl(){this.input.REVIVE=!1}movement(t=[65,68,84,89,85]){document.addEventListener("keydown",i=>{switch(i.keyCode){case t[0]:this.input.LEFT=!0;break;case t[1]:this.input.RIGHT=!0;break;case t[2]:this.attack=!0,this.counter++,this.counter>2?this.input.ATTACK=!1:this.input.ATTACK=!0;break;case t[3]:this.attack=!0,this.counter++,this.counter>3?this.input.KICK=!1:this.input.KICK=!0;break;case t[4]:this.input.SPECIAL=!0}}),document.addEventListener("keyup",i=>{switch(i.keyCode){case t[0]:this.input.LEFT=!1;break;case t[1]:this.input.RIGHT=!1;break;case t[2]:this.attack=!1,this.input.ATTACK=!1,this.counter=0;break;case t[3]:this.attack=!1,this.input.KICK=!1,this.counter=0;break;case t[4]:this.input.SPECIAL=!1}})}}var h=class{constructor(){this.sound=document.createElement("audio"),this.sound.setAttribute("preload","auto"),this.sound.setAttribute("controls","none"),this.sound.style.display="none"}play(t){this.sound.src=t,this.sound.play().then(()=>console.log())}stop(){this.sound.pause()}};var a=class{constructor(t,i,s,e){this.ctx=t,this.w=40,this.h=40,this.x=i+50*e,this.y=s+35,this.speed=10*e,this.image=new Image,this.image.src=e>0?"./asset/bullet.png":"./asset/bullet_left.png",this.hit=!1,this.collide=!1,this.sound=new h,this.m=!0}shoot(){this.ctx.drawImage(this.image,this.x,this.y,this.w,this.h),this.x+=this.speed}playSound(){this.sound.play("./asset/sound/hadouken.mp3")}draw(){this.collide||this.shoot()}};class r{constructor(t){this.char=t,this.image=new Image,this.image.src=`./asset/${this.char}/idle.png`,this.frame=0,this.maxFrame=3,this.image.onload=()=>{this.w=this.image.width/(this.maxFrame+1),this.h=this.image.height}}update(t){if("ken"===this.char)switch(t){case"special_kick":this.maxFrame=5,this.image.src=`./asset/${this.char}/${t}.png`;break;case"kick":case"moving":this.maxFrame=4,this.image.src=`./asset/${this.char}/${t}.png`;break;case"stun":case"dead":this.maxFrame=3,this.image.src=`./asset/${this.char}/${t}.png`;break;case"punch":case"win":this.maxFrame=2,this.image.src=`./asset/${this.char}/${t}.png`;break;case"shot":this.maxFrame=1,this.image.src=`./asset/${this.char}/${t}.png`;break;case"block":this.maxFrame=0,this.image.src=`./asset/${this.char}/${t}.png`;break;default:this.maxFrame=3,this.image.src=`./asset/${this.char}/idle.png`}if("ryu"===this.char)switch(t){case"special_kick":this.maxFrame=5,this.image.src=`./asset/${this.char}/${t}.png`;break;case"moving":this.maxFrame=4,this.image.src=`./asset/${this.char}/${t}.png`;break;case"kick":case"punch":case"shot":case"stun":case"win":this.maxFrame=2,this.image.src=`./asset/${this.char}/${t}.png`;break;case"block":this.maxFrame=0,this.image.src=`./asset/${this.char}/${t}.png`;break;case"dead":this.maxFrame=3,this.image.src=`./asset/${this.char}/${t}.png`;break;default:this.maxFrame=3,this.image.src=`./asset/${this.char}/idle.png`}}}class n{constructor(t,i,s){this.ctx=t,this.x=i,this.y=s,this.len=300,this.fixlen=300}draw(){this.ctx.fillStyle="red",this.ctx.fillRect(this.x,50,this.fixlen,30),this.ctx.fillStyle="yellow",this.ctx.fillRect(this.x,50,this.len,30),this.ctx.strokeStyle="white",this.ctx.lineWidth=2,this.ctx.strokeRect(this.x,50,this.fixlen,30)}enemyhp(t,i,s){this.ctx.fillStyle="red",this.ctx.fillRect(t,i-20,this.fixlen/4,s),this.ctx.fillStyle="yellow",this.ctx.fillRect(t,i-20,this.len/4,s),this.ctx.strokeStyle="white",this.ctx.lineWidth=2,this.ctx.strokeRect(t,i-20,this.len/4,s)}block(){this.len-=.05}hit(){this.len-=1}}var o=class{constructor(t,i=300,s,a){this.ctx=t,this.draw=this.draw.bind(this),this.keyboard=new e,this.frame=0,this.rw=140,this.rh=160,this.x=i,this.y=300,this.speed=0,this.stop=0,this.move=5,this.bullet=null,this.fps=0,this.stun=!1,this.block=!1,this.sprite=new r(s),this.dir=a,this.temp="",this.desc="",this.sControl=!0,this.bControl=!0,this.sound=new h,this.delay=0,this.dead=!1}fpsControl(t){this.fps++,this.desc!==this.temp&&(this.desc=this.temp,this.frame=0),this.fps>t&&(this.fps=0,this.dead?this.frame>=this.sprite.maxFrame?this.frame=this.sprite.maxFrame:this.frame++:(this.frame++,this.frame>this.sprite.maxFrame&&(this.frame=0)))}draw(){this.fpsControl(10),this.bullet&&this.bullet.draw(),this.ctx.save(),this.ctx.scale(this.dir,1),this.ctx.drawImage(this.sprite.image,this.sprite.w*this.frame,0,this.sprite.w,this.sprite.h,this.dir*this.x,this.y,this.dir*this.rw,this.rh),this.ctx.restore()}moveAction(t){this.keyboard.input.LEFT||this.keyboard.input.RIGHT?(this.block?(this.sprite.update("block"),this.temp="block",console.log(this.sprite.image.src),this.sound.play("./asset/sound/block.wav"),this.block=!1,this.move=1):(this.sprite.update("moving"),this.temp="moving",this.move=5),(this.keyboard.input.LEFT||this.keyboard.input.RIGHT)&&(this.x<t?(this.dir=1,this.dullMove(t)&&this.keyboard.input.LEFT&&(this.speed=-this.move)):(this.dir=-1,this.dullMove(t)&&this.keyboard.input.RIGHT&&(this.speed=this.move))),this.keyboard.input.LEFT&&!this.dullMove(t)?this.speed=-this.move:this.keyboard.input.RIGHT&&!this.dullMove(t)&&(this.speed=this.move)):this.stun&&(this.sprite.update("stun"),this.temp="stun",this.move=0,this.stun=!1)}specialAction(){this.keyboard.input.SPECIAL&&(this.keyboard.input.ATTACK&&!this.keyboard.input.KICK?(this.sprite.update("shot"),this.temp="shot",this.delay++,this.delay>20&&(this.keyboard.input.SPECIAL=!1,this.keyboard.input.ATTACK=!1),this.bullet||(this.bullet=new a(this.ctx,this.x,this.y,this.dir)),this.keyboard.input.SHOOT&&(this.bullet.playSound(),this.keyboard.input.SHOOT=!1)):!this.keyboard.input.ATTACK&&this.keyboard.input.KICK?(this.sprite.update("special_kick"),this.temp="special_kick",this.delay++,this.x+=2*this.dir,this.delay>40&&(this.keyboard.input.SPECIAL=!1,this.keyboard.input.KICK=!1)):(this.delay=0,this.keyboard.input.SHOOT=!0))}attackAction(){this.keyboard.input.ATTACK?(this.sprite.update("punch"),this.temp="punch"):this.keyboard.input.KICK&&(this.sprite.update("kick"),this.temp="kick"),this.specialAction()}action(t){this.sprite.update(),this.speed=this.stop,this.moveAction(t),this.attackAction()}dullMove(t){return Math.abs(this.x-t)<90}borderLimit(){this.x>875&&(this.keyboard.input.LEFT?this.speed=-this.move:this.speed=0),this.x<0&&(this.keyboard.input.RIGHT?this.speed=this.move:this.speed=0)}meleeAttack(t){this.keyboard.input.ATTACK||this.keyboard.input.KICK?Math.abs(this.x-t.x)<100?t.block||this.sControl&&(this.sound.play("./asset/sound/punch_hit.wav"),this.sControl=!1):this.sControl&&(this.sound.play("./asset/sound/punch_miss.wav"),this.sControl=!1):this.sControl=!0}rangeAttack(t){this.bullet&&(Math.abs(this.bullet.x-t.x)<50||this.bullet.x>1e3||this.bullet.x<0?(this.bControl&&(this.bControl=!1),this.bullet.collide=!0,this.bullet=null):this.bControl=!0)}update(t=0){this.action(t),this.borderLimit(),this.x+=this.speed}removePlayer(){this.sprite.update("dead"),this.dead=!0}switchDir(){this.keyboard.input.LEFT&&(this.dir=-1),this.keyboard.input.RIGHT&&(this.dir=1)}win(){this.sprite.update("win"),this.dead=!0}};var c=class{constructor(t){this.ctx=t,this.p1=new o(this.ctx,300,"ken",1),this.p2=new o(this.ctx,700,"ryu",-1),this.p1.keyboard.movement(),this.p2.keyboard.movement([37,39,74,75,76]),this.p1hp=new n(this.ctx,100,50),this.p2hp=new n(this.ctx,600,50)}stunned(){this.p1.keyboard.attack&&(this.p2.stun=!0,this.p2.x++),this.p2.keyboard.attack&&(this.p1.stun=!0,this.p1.x--)}bulControl(t,i){t&&(Math.abs(t.x-i.x)<100?this.p2.keyboard.input.RIGHT?this.p2.block=!0:this.p1.keyboard.input.LEFT?this.p1.block=!0:i.stun=!0:i.stun=!1)}fightControl(){Math.abs(this.p1.x-this.p2.x)<100&&(this.p1.keyboard.attack||this.p2.keyboard.attack)&&(this.p1.keyboard.attack&&this.p2.keyboard.input.RIGHT&&(this.p2.block=!0,this.p2.x++),this.p2.keyboard.attack&&this.p1.keyboard.input.LEFT&&(this.p1.block=!0,this.p1.x--),this.stunned()),this.bulControl(this.p1.bullet,this.p2),this.bulControl(this.p2.bullet,this.p1)}hpControl(){this.p1.stun&&this.p1hp.hit(),this.p1.block&&this.p1hp.block(),this.p2.stun&&this.p2hp.hit(),this.p2.block&&this.p2hp.block()}playersCollision(){this.fightControl(),this.p1.meleeAttack(this.p2),this.p2.meleeAttack(this.p1),this.p1.rangeAttack(this.p2),this.p2.rangeAttack(this.p1),this.hpControl()}draw(){this.p1.draw(),this.p2.draw(),this.p1hp.draw(),this.p2hp.draw()}update(){this.p1.update(this.p2.x),this.p2.update(this.p1.x),this.playersCollision()}gameover(){this.ctx.font="40px Acme",this.ctx.fillStyle="red",this.ctx.textAlign="center",this.ctx.fillText("You Win",500,150)}gamefun(){this.p1hp.len>=0&&this.p2hp.len>=0?this.update():this.gameover(),this.draw(),this.gameConstraint()}gameConstraint(){this.p1hp.len<=0?(this.p2.win(),this.p1.removePlayer()):this.p2hp.len<=0&&(this.p1.win(),this.p2.removePlayer())}};class l{constructor(t){this.ctx=t,this.maxWidth=1e3,this.maxHeight=500,this.image=new Image,this.image.src="https://i.pinimg.com/originals/91/64/01/9164016aa77fa969f71800b9ba8c32b4.gif"}draw(){this.ctx.drawImage(this.image,0,0,this.maxWidth,this.maxHeight)}}class p{constructor(t,i){this.x=t,this.ctx=i,this.rw=140,this.rh=160,this.y=300,this.alive=!0,this.frame=0,this.transparent=1,this.fps=0,this.dir=1,this.sprite=new r("ryu")}fpsControl(t){this.fps++,this.fps>t&&(this.fps=0,this.frame++,this.frame>=this.sprite.maxFrame&&(this.frame=0))}setup(t){this.fpsControl(10),this.ctx.save(),this.ctx.scale(this.dir,1),this.ctx.drawImage(this.sprite.image,this.sprite.w*this.frame,0,this.sprite.w,this.sprite.h,this.dir*this.x,this.y,this.dir*this.rw,this.rh),this.ctx.restore()}dead(t){this.fpsControl(10),this.ctx.save(),this.ctx.globalAlpha=this.transparent,this.transparent-=.1,this.ctx.restore()}update(t){Math.abs(this.x-t)<100?this.sprite.update("punch"):this.x>t?(this.x--,this.sprite.update("moving")):this.x<t&&(this.x++,this.sprite.update("moving"))}draw(t){t>this.x?this.dir=1:this.dir=-1,this.alive?(this.setup(t),this.update(t)):this.dead(t)}}var d=class{constructor(t){this.ctx=t,this.test=100,this.enemy=new p(150*Math.floor(5*Math.random())+100,this.ctx),this.kill=0,this.comboSpeed=.7,this.combo=1,this.maxCombo=0,this.comboTime=200,this.player=new o(this.ctx,300,"ken",1),this.player.keyboard.movement(),this.image=new Image,this.sound=new h,this.enemyHp=new n(this.ctx,this.enemy.x,this.enemy.y),this.playSound=!0}gameover(){this.image.src="https://static.comicvine.com/uploads/original/11111/111112704/3860536-ron_vs_ken_by_eastmonkey.jpg",this.ctx.drawImage(this.image,0,0,1e3,500),this.ctx.font="40px Acme",this.ctx.fillStyle="white",this.ctx.textAlign="center",this.ctx.fillText("Game Over",500,150),this.totalScore()}totalScore(){let t=this.maxCombo*this.kill*10;this.test--,0===this.test&&this.sound.play("./asset/sound/game_finished.wav"),this.test<=50&&this.ctx.fillText(`Best Combo : ${this.maxCombo}`,500,250),this.test<=20&&this.ctx.fillText(`Total Kill : ${this.kill}`,500,290),this.test<=0&&(this.ctx.fillStyle="red",this.ctx.fillText(`Your score is ${t}`,500,350))}miss(){this.ctx.font="20px Acme",this.ctx.fillStyle="red",this.ctx.textAlign="center",this.ctx.fillText("Miss!",this.player.x+60,this.player.y-20),this.firsthit=!0}collision(){this.player.keyboard.attack?this.enemydead(this.player.x,90):this.player.bullet&&(this.enemydead(this.player.bullet.x,50),this.player.rangeAttack(this.enemy)),this.maxCombo=Math.max(this.combo,this.maxCombo)}enemydead(t,i=100){Math.abs(t-this.enemy.x)<i&&(this.enemy.alive=!1,this.combo++,this.kill++,this.comboTime=200)}getRand(t){for(;t===this.enemy.x;)this.enemy.x=Math.random()>.5?0:1e3;return this.enemy.x}respawn(){this.enemy.transparent<=0&&(this.enemy.alive=!0,this.enemy.transparent=1,this.enemy.x=this.getRand(this.enemy.x))}comboContainer(){this.ctx.fillStyle="green",this.ctx.font="12px Acme",this.ctx.fillText("Combo GAUGE",500,60),this.comboTime<=100&&(this.ctx.fillStyle="yellow"),this.comboTime<=50&&(this.ctx.fillStyle="red"),this.ctx.fillRect(400,70,this.comboTime,20)}clock(){this.ctx.textAlign="center",this.ctx.font="40px Acme",this.time<=5&&(this.ctx.fillStyle="red"),this.ctx.fillText(`Timer ${this.time}`,500,30)}trainingMode(){this.clock(),this.comboContainer(),this.player.draw(),this.enemy.draw(this.player.x),this.enemyHp.enemyhp(this.enemy.x,this.enemy.y,10),this.player.update(this.enemy.x),this.player.switchDir(),this.collision(),this.respawn()}draw(){this.trainingMode()}};var m=class{constructor(t){this.ctx=t,this.background=new l(this.ctx),this.play=this.play.bind(this),this.input=new e,this.input.gameControl(),this.fps=0,this.image=new Image,this.image.src="https://i.pinimg.com/originals/f6/c4/51/f6c4516c11809f1b3550e0c68abfef89.gif",this.test=70,this.time=60,this.training=!1,this.vs=!1,this.vsMode=null,this.trainMode=null}intro(){this.ctx.drawImage(this.image,0,0,1e3,500),this.ctx.font="40px Acme",this.ctx.fillStyle="white",this.ctx.textAlign="center",this.ctx.fillText("Best Street Fighter",500,200),this.ctx.font="20px Acme",this.start()}createClickBox(t,i,s,e,h){this.ctx.fillText(t,i,s);let a=this.ctx.measureText(t).width/2;document.addEventListener("click",t=>{t.layerX>=i-a&&t.layerX<=i+a&&t.layerY>=s-e&&t.layerY<=s+e&&(this.input.restart=!0,"vs"===h?(this.vs=!0,this.vsMode=new c(this.ctx)):(this.trainMode=new d(this.ctx),this.training=!0))})}start(){this.createClickBox("Train",500,300,20,"train"),this.createClickBox("VS Mode",500,350,20,"vs")}timer(){this.comboTime-=this.comboSpeed*this.combo*.1}play(){this.input.restart?(this.background.draw(),this.training&&this.trainMode.draw(),this.vs&&this.vsMode.gamefun()):this.intro(),requestAnimationFrame(this.play)}};var u=class{constructor(t){this.bgm=document.getElementById("myAudio"),this.bgsound=document.getElementById("music-button"),this.icon=document.getElementById("icon")}musicAction(){this.bgsound.addEventListener("click",()=>{this.bgm.paused?(this.bgm.play(),this.icon.className="fas fa-volume-up"):(this.bgm.pause(),this.icon.className="fas fa-volume-off")})}};document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("MyCanvas");t.width=1e3,t.height=500;const i=t.getContext("2d"),s=new m(i);(new u).musicAction(),s.play()})}]);
//# sourceMappingURL=bundle.js.map