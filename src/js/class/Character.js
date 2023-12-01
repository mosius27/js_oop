class Character {
    constructor(name, type) {
      if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
        throw new Error('Name should be a string with length between 2 and 10 characters');
      }
  
      const validTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
      if (!validTypes.includes(type)) {
        throw new Error('Invalid type');
      }
  
      this.name = name;
      this.type = type;
      this.health = 100;
      this.level = 1;
  
      this.damage = undefined;
      this.defence = undefined;
    }
  
    levelUp() {
      if (this.health <= 0) {
        throw new Error('Cannot level up a dead character');
      }
  
      this.level += 1;
      this.attack = Math.round(this.attack * 1.2);
      this.defence = Math.round(this.defence * 1.2);
  
      if (this.health > 100) {
        this.health = 100;
      }
    }
  
    damage(points) {
      if (this.health <= 0) {
        return; // No need to apply damage to a dead character
      }
  
      this.health -= points * (1 - this.defence / 100);
      this.health = Math.max(this.health, 0); // Ensure health doesn't go below zero
    }
  }
  
  // Unit tests
  describe('Character', () => {
    let character;
  
    beforeEach(() => {
      character = new Character('Test', 'Bowman');
    });
  
    it('should level up the character', () => {
      character.levelUp();
      expect(character.level).toBe(2);
      expect(character.attack).toBe(30);
      expect(character.defence).toBe(30);
      expect(character.health).toBe(100);
    });
  
    it('should not level up a dead character', () => {
      character.health = 0;
      expect(() => character.levelUp()).toThrow('Cannot level up a dead character');
    });
  
    it('should apply damage to the character', () => {
      character.damage(20);
      expect(character.health).toBeCloseTo(90);
    });
  
    it('should not apply damage to a dead character', () => {
      character.health = 0;
      character.damage(20);
      expect(character.health).toBe(0);
    });
  
    it('should not allow negative health', () => {
      character.damage(200);
      expect(character.health).toBe(0);
    });
  });
