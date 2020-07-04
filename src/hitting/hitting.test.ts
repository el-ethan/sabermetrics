import { ops, obp } from './hitting';
describe('hitting', () => {
    describe('OPS', () => {
        it('calculates Aaron Judge\'s rookie season OPS', () => {
            expect(ops({onBasePercentage: .422, slugging: .627})).toBe(1.049);
        });
    });

    describe('OBP', () => {
        it('calculates calculates Aaron Judge\'s rookie season OBP', () => {
            const hits = 154;
            const basesOnBalls = 127;
            const hitByPitch = 5;
            const atBats = 542;
            const sacrificeFlies = 4;
            expect(obp({hits, basesOnBalls, hitByPitch, atBats, sacrificeFlies})).toBe(.422);
        });
    });

    it('ignores stats that are not relvent, and uses those that are', () => {
        const judgeStats = {
            stolenBases: 9,
            onBasePercentage: .422,
            slugging: .627
        };

        expect(ops(judgeStats)).toBe(1.049);
    });
});