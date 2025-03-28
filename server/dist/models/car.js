import { DataTypes, Model } from 'sequelize';
export class Car extends Model {
    id;
    brand;
    model;
    year;
    price;
    createdAt;
    updatedAt;
}
export function initCarsModel(sequelize) {
    Car.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        brand: {
            type: DataTypes.STRING,
            allowNull: false
        },
        model: {
            type: DataTypes.STRING,
            allowNull: false
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: 'cars',
        sequelize,
    });
    return Car;
}
