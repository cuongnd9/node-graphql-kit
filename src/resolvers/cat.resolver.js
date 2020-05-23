import CatService from '../services/cat.service';

const resolver = {
  Query: {
    cats() {
      return CatService.getCats();
    },
  },
  Mutation: {
    createCat(_, args) {
      return CatService.createCat(args);
    },
  },
};

export default resolver;
