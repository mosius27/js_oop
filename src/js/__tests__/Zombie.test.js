import Zombie from '../class/Zombie'

test('Правильно создается объект', () => {
  const zombie = new Zombie('Zombie');
  const correct = {
    attack: 40, defence: 10, health: 100, level: 1, name: 'Zombie', type: 'Zombie',
  };

  expect(zombie).toEqual(correct);
});