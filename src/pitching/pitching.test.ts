import {whip} from './pitching';

describe('WHIP', () => {
    it("Calculates Mariano Rivera's career WHIP correctly based on his career BB, H, and IP", () => {
        const walks = 286;
        const hitsAllowed = 998;
        const inningsPitched = 1283.2;
        expect(whip(walks, hitsAllowed, inningsPitched)).toBeCloseTo(1.0);
    });
});
