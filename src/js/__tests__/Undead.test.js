import Undead from '../class/Undead'

test('Правильно создается объект', () => {
  const undead = new Undead('Undead');
  const correct = {
    attack: 25, defence: 25, health: 100, level: 1, name: 'Undead', type: 'Undead',
  };

  expect(undead).toEqual(correct);
});