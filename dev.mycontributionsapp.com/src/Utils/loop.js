const loop = (number, character) => {
  let loop = character ? "" : [];

  for (let index = 0; index < number; index++) {
    if (character) {
      loop = `${loop}${character}`;
    } else {
      loop.push(index);
    }
  }

  return loop;
};

export default loop;
