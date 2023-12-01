import Daemon from '../class/Daemon'

test('Правильно создается объект', () => {
  const daemon = new Daemon('Daemon');
  const correct = {
    attack: 10, defence: 40, health: 100, level: 1, name: 'Daemon', type: 'Daemon',
  };

  expect(daemon).toEqual(correct);
});