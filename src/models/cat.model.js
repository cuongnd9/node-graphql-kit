import { Model } from 'sequelize';

class Cat extends Model {
  static init(sequelize, DataTypes) {
    return super.init({
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      name: {
        type: DataTypes.STRING,
      },
      color: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      categoryId: {
        type: DataTypes.UUID,
        references: {
          model: 'categories',
          key: 'id',
        },
      },
    }, {
      sequelize,
      modelName: 'cats'
    });
  }

  static associate(models) {
    this.belongsTo(models.Category, {
      as: 'category',
      foreignKey: 'categoryId',
    });
  }
}

export default Cat
