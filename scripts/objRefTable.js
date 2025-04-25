const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Plugins.TiledBg,
		C3.Behaviors.solid,
		C3.Behaviors.Bullet,
		C3.Plugins.Keyboard,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Behaviors.Bullet.Acts.SetEnabled,
		C3.Plugins.Sprite.Acts.SetAngle,
		C3.Behaviors.Bullet.Acts.SetAcceleration,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Behaviors.Bullet.Acts.SetAngleOfMotion,
		C3.Plugins.Sprite.Exps.Angle,
		C3.Behaviors.Bullet.Acts.SetSpeed,
		C3.Behaviors.Bullet.Exps.Speed,
		C3.Behaviors.Bullet.Cnds.CompareSpeed,
		C3.Plugins.Sprite.Acts.Destroy
	];
};
self.C3_JsPropNameTable = [
	{Platform: 0},
	{ScrollTo: 0},
	{Player: 0},
	{Solid: 0},
	{TiledBackground: 0},
	{Bullet: 0},
	{Tomato: 0},
	{Keyboard: 0},
	{TiledBackground2: 0}
];

self.InstanceType = {
	Player: class extends self.ISpriteInstance {},
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	Tomato: class extends self.ISpriteInstance {},
	Keyboard: class extends self.IInstance {},
	TiledBackground2: class extends self.ITiledBackgroundInstance {}
}