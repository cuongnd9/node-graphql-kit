import Cat from './cat.model';
import Category from './category.model';

const associate = () => {
    const models = { Cat, Category };

    Object.values(models)
        .filter(model => typeof model.associate === 'function')
        .forEach(model => model.associate());
}

export { associate };
