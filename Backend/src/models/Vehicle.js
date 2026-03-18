export default (sequelize, DataTypes) => {
  const Vehicle = sequelize.define('Vehicle', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    marca: {
      type: DataTypes.STRING,
      allowNull: false    
    },
    placa: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
  }, {
    tableName: 'vehicles',
    timestamps: false
  });

  Vehicle.associate = (models) => {
    Vehicle.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });

  };

  return Vehicle;
    };