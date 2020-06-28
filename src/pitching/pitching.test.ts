import {whip, k9} from './pitching';

describe('pitching', () => {
    describe('WHIP', () => {
        it("Calculates Mariano Rivera's career WHIP correctly based on his career BB, H, and IP", () => {
            const walks = 286;
            const hitsAllowed = 998;
            const inningsPitched = 1283.2;
            expect(whip(walks, hitsAllowed, inningsPitched)).toBeCloseTo(1.0);
        });
    });

    describe('K9', () => {
        it("calculates Gerrit Cole's 2019 K9 correctly", () => {
            const inningsPitched = 212.1;
            const strikeouts = 326;

            expect(k9(strikeouts, inningsPitched)).toBeCloseTo(13.8, 1);
        });
    });
});
