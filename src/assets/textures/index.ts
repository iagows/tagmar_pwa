import ExpoTHREE, { TextureLoader } from "expo-three";

enum Textures {
	ASTRAL = "astral.png",
	BRONZE01 = "bronze01.png",
	BRONZE02 = "bronze02.png",
	BRONZE03A = "bronze03a.png",
	BRONZE03B = "bronze03b.png",
	BRONZE03 = "bronze03.png",
	BRONZE04 = "bronze04.png",
	CHEETAH = "cheetah.png",
	CLOUDY_ALT = "cloudy.alt.png",
	CLOUDY = "cloudy.png",
	DRAGON = "dragon.png",
	FEATHER = "feather.png",
	FIRE = "fire.png",
	GLITTER_ALPHA = "glitter-alpha.png",
	GLITTER = "glitter.png",
	ICE = "ice.png",
	LEOPARD = "leopard.png",
	LIZARD = "lizard.png",
	MARBLE = "marble.png",
	METAL = "metal.png",
	NOISE = "noise.png",
	NOISE_FILM = "noise-thin-film.png",
	PAPER = "paper.png",
	SKULLS = "skulls.png",
	SPECKLES = "speckles.png",
	STAINED_GLASS = "stainedglass.png",
	STARS = "stars.png",
	STONE = "stone.png",
	TIGER = "tiger.png",
	WATER = "water.png",
	WOOD = "wood.png",
	VELVET = "velvet.png",
}

enum TexturesBumps {
	DRAGON_BUMP = "dragon-bump.png",
	FEATHER_BUMP = "feather-bump.png",
	GLITTER_BUMP = "glitter-bump.png",
	LIZARD_BUMP = "lizard-bump.png",
	METAL_BUMP = "metal-bump.png",
	PAPER_BUMP = "paper-bump.png",
	STAINED_GLASS_BUMP = "stainedglass-bump.png",
}

const getTexture = (name: Textures | TexturesBumps) => {
	switch (name) {
		case Textures.ASTRAL:
			return new TextureLoader().load(require("./astral.png"));
		case Textures.BRONZE01:
			return new TextureLoader().load(require("./bronze01.png"));
		case Textures.BRONZE02:
			return new TextureLoader().load(require("./bronze02.png"));
		case Textures.BRONZE03A:
			return new TextureLoader().load(require("./bronze03a.png"));
		case Textures.BRONZE03B:
			return new TextureLoader().load(require("./bronze03b.png"));
		case Textures.BRONZE03:
			return new TextureLoader().load(require("./bronze03.png"));
		case Textures.BRONZE04:
			return new TextureLoader().load(require("./bronze04.png"));
		case Textures.CHEETAH:
			return new TextureLoader().load(require("./cheetah.png"));
		case Textures.CLOUDY_ALT:
			return new TextureLoader().load(require("./cloudy.alt.png"));
		case Textures.CLOUDY:
			return new TextureLoader().load(require("./cloudy.png"));
		case TexturesBumps.DRAGON_BUMP:
			return new TextureLoader().load(require("./dragon-bump.png"));
		case Textures.DRAGON:
			return new TextureLoader().load(require("./dragon.png"));
		case TexturesBumps.FEATHER_BUMP:
			return new TextureLoader().load(require("./feather-bump.png"));
		case Textures.FEATHER:
			return new TextureLoader().load(require("./feather.png"));
		case Textures.FIRE:
			return new TextureLoader().load(require("./fire.png"));
		case Textures.GLITTER_ALPHA:
			return new TextureLoader().load(require("./glitter-alpha.png"));
		case TexturesBumps.GLITTER_BUMP:
			return new TextureLoader().load(require("./glitter-bump.png"));
		case Textures.GLITTER:
			return new TextureLoader().load(require("./glitter.png"));
		case Textures.ICE:
			return new TextureLoader().load(require("./ice.png"));
		case Textures.LEOPARD:
			return new TextureLoader().load(require("./leopard.png"));
		case TexturesBumps.LIZARD_BUMP:
			return new TextureLoader().load(require("./lizard-bump.png"));
		case Textures.LIZARD:
			return new TextureLoader().load(require("./lizard.png"));
		case Textures.MARBLE:
			return new TextureLoader().load(require("./marble.png"));
		case TexturesBumps.METAL_BUMP:
			return new TextureLoader().load(require("./metal-bump.png"));
		case Textures.METAL:
			return new TextureLoader().load(require("./metal.png"));
		case Textures.NOISE:
			return new TextureLoader().load(require("./noise.png"));
		case Textures.NOISE_FILM:
			return new TextureLoader().load(require("./noise-thin-film.png"));
		case TexturesBumps.PAPER_BUMP:
			return new TextureLoader().load(require("./paper-bump.png"));
		case Textures.PAPER:
			return new TextureLoader().load(require("./paper.png"));
		case Textures.SKULLS:
			return new TextureLoader().load(require("./skulls.png"));
		case Textures.SPECKLES:
			return new TextureLoader().load(require("./speckles.png"));
		case TexturesBumps.STAINED_GLASS_BUMP:
			return new TextureLoader().load(require("./stainedglass-bump.png"));
		case Textures.STAINED_GLASS:
			return new TextureLoader().load(require("./stainedglass.png"));
		case Textures.STARS:
			return new TextureLoader().load(require("./stars.png"));
		case Textures.STONE:
			return new TextureLoader().load(require("./stone.png"));
		case Textures.TIGER:
			return new TextureLoader().load(require("./tiger.png"));
		case Textures.WATER:
			return new TextureLoader().load(require("./water.png"));
		case Textures.WOOD:
			return new TextureLoader().load(require("./wood.png"));
		case Textures.VELVET:
			return new TextureLoader().load(require("./velvet.png"));
	}
};
export { Textures, TexturesBumps, getTexture };
