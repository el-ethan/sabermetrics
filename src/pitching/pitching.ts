export function whip(walks: number, hitsAllowed: number, inningsPitched: number) {
    return (walks + hitsAllowed) / inningsPitched;
}

export function k9(strikeouts: number, inningsPitched: number) {
    return (strikeouts * 9) / inningsPitched;
}
