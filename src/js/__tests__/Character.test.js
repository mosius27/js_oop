import Character from '../class/Character'

test('Ошибка в name', () => {
  expect(() => new Character('A', 'Bowman')).toThrow(new Error('Имя должно соделржать от 2 до 10 символов'));
});

test('Ошибка в type', () => {
  expect(() => new Character('Alex', 'Bow')).toThrow(new Error('Неизвестное существо'));
});

test('Правильно создается объект', () => {
  const warrior = new Bowman('Alex', 'Bowman');
  const correct = {
    attack: undefined, defence: undefined, health: 100, level: 1, name: 'Bowman', type: 'Bowman',
  };

  expect(warrior).toEqual(correct);
});