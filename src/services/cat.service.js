import Cat from '../models/cat.model';

class CatService {
  static getCats() {
    return Cat.findAll();
  }

  static createCat({ name, color }) {
    return Cat.create({
      name,
      color,
    });
  }
}

export default CatService;
