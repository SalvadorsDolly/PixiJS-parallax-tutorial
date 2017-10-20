init();

function init() {
	console.log("init() successfully called.");
	stage = new PIXI.Container();
	renderer = PIXI.autoDetectRenderer( 512, 384, 
		{view:document.getElementById( "parallax" )}
		);

	// set background image
	var farTexture = PIXI.Texture.fromImage( "assets/bg-far.png");
	far = new PIXI.extras.TilingSprite( farTexture, 512, 256 );
	far.position.x = 0;
	far.position.y = 0;
	far.tilePosition.x = 0;
	far.tilePosition.y = 0;
	stage.addChild( far );

	// set foreground image
	var midTexture = PIXI.Texture.fromImage( "assets/bg-mid.png" );
	mid = new PIXI.extras.TilingSprite( midTexture, 512, 256 ); 
	mid.position.x = 0;
	mid.position.y = 128;
	stage.addChild( mid );

	requestAnimationFrame( update );
}

function update() {
	far.tilePosition.x -= 0.2;
	mid.tilePosition.x -= 0.45;

	renderer.render( stage );
	requestAnimationFrame( update );
}