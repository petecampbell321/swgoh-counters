export default function mergeCharacterAndPlayerData(allCharacters, playerData) {
  const test = playerData.map((p) => {
    const player = p;
    const matchedCharacter = allCharacters.filter(char => char.name === player.name)[0];
    matchedCharacter ? player.categories = matchedCharacter.categories : player.categories = [];
    return player;
  });
  return test;
}
