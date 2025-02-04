// Generated by Phaser Editor v1.4.0 (Phaser v2.6.2)


/**
 * Level1.
 */
function Level1() {
	
	Phaser.State.call(this);
	
}

/** @type Phaser.State */
var Level1_proto = Object.create(Phaser.State.prototype);
Level1.prototype = Level1_proto;
Level1.prototype.constructor = Level1;

Level1.prototype.init = function () {
	
	// from User Code dialog
	this.myInit();
	
};

Level1.prototype.preload = function () {
	
	this.load.pack('preloader', 'assets/pack.json');
	
};

Level1.prototype.create = function () {
	var _background = this.add.group();
	
	this.add.sprite(-104, -54, 'wall-empty', null, _background);
	
	this.add.sprite(15, 174, 'atlas1', 'wall-hole', _background);
	
	this.add.sprite(726, 290, 'atlas1', 'wall-hole', _background);
	
	var _door = new Door(this.game, 853, 82);
	_background.add(_door);
	
	this.add.sprite(325, -87, 'atlas1', 'musgo', _background);
	
	var _platforms = this.add.group();
	
	this.add.tileSprite(-4, 526, 1419, 74, 'atlas1', 'platform2', _platforms);
	
	var _dino = new Dino(this.game, 130, 421);
	this.add.existing(_dino);
	
	var _objects = this.add.group();
	
	this.add.sprite(435, 421, 'atlas1', 'flor', _objects);
	
	// public fields
	
	this.fDoor = _door;
	this.fPlatforms = _platforms;
	this.fDino = _dino;
	// from User Code dialog
	this.myCreate();
	
};

/* --- end generated code --- */

Level1.prototype.myInit = function() {
	this.world.resize(1200, 600);
};

Level1.prototype.myCreate = function () {
	this.behavior = new PlatformerBehavior(this, "Level2", this.fDino, this.fDoor, this.fPlatforms);
};

Level1.prototype.update = function () {
	this.behavior.update();
};

