import { z } from "zod";

const OAuthDTO = z.object({
	isLoggedIn: z.boolean(),
	accessToken: z.string(),
	tokenExpiryDate: z.number(),
});

type OAuth = z.infer<typeof OAuthDTO>;

export default OAuthDTO;
export type { OAuth };
