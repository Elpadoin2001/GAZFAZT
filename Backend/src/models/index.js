import Sequelize from "sequelize";
import sequelize from "../config/database.js";

import UserModel from "./User.js";
import RoleModel from "./Role.js";
import VehicleModel from "./Vehicle.js";
import AccountModel from "./Account.js";
import ProductModel from "./Product.js";
import TransactionModel from "./Transaction.js";
import GasStationModel from "./Gas_station.js";
import PaymentMethodModel from "./Payment_Method.js";
import RechargeModel from "./Recharge.js";

const models = {
  User: UserModel(sequelize, Sequelize.DataTypes),
  Role: RoleModel(sequelize, Sequelize.DataTypes),
  Vehicle: VehicleModel(sequelize, Sequelize.DataTypes),
  Account: AccountModel(sequelize, Sequelize.DataTypes),
  Product: ProductModel(sequelize, Sequelize.DataTypes),
  Transaction: TransactionModel(sequelize, Sequelize.DataTypes),
  GasStation: GasStationModel(sequelize, Sequelize.DataTypes),
  PaymentMethod: PaymentMethodModel(sequelize, Sequelize.DataTypes),
  Recharge: RechargeModel(sequelize, Sequelize.DataTypes),
};

Object.values(models).forEach((model) => {
  if (typeof model.associate === "function") {
    model.associate(models);
  }
});

export default {
  sequelize,
  Sequelize,
  ...models,
};
