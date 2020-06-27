import {whip} from './pitching';

describe('WHIP', () => {
    it('is calculated by adding walks and hits and dividing by innings pitched', () => {
        const walks = 286;
        const hitsAllowed = 998;
        const inningsPitched = 1283.2;
        expect(whip(walks, hitsAllowed, inningsPitched)).toBeCloseTo(1.0);
    });
});
