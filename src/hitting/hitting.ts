export function obp(stats: {
    hits: number,
    basesOnBalls: number,
    hitByPitch: number,
    atBats: number,
    sacrificeFlies: number
}) {
    const { hits, basesOnBalls, hitByPitch, atBats, sacrificeFlies } = stats;
    const _obp = (hits + basesOnBalls + hitByPitch) / (atBats + basesOnBalls + sacrificeFlies + hitByPitch);
    return parseFloat(_obp.toFixed(3));
}

export function ops(stats: { onBasePercentage: number, slugging: number }) {
    const { onBasePercentage, slugging } = stats;
    return onBasePercentage + slugging;  
}