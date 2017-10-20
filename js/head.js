function Head() {
	this.stage = new PIXI.Container();
	this.renderer = new PIXI.autoDetectRenderer( 512, 384, {view:getElementById("parallax")} );
	this.scroller =  new Scroller( this.stage );

	requestAnimationFrame( this.update.bind(this) );
}

Head.SCROLL_SPEED = 5;

Head.prototype.update = function() {
	this.scroller.moveViewportXBy(Main.SCROLL_SPEED);
	this.renderer.render(this.stage);
	requestAnimationFrame(this.update.bind(this));
};