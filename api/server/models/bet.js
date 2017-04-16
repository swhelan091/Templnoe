'use strict';

module.exports = (sequelize, DataTypes) => {
  const Bet = sequelize.define('Bet', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    pdate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    league: {
      type: DataTypes.STRING,
      allowNull: false
    },
    bet_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    bet_amount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    pnl: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
  	timestamps: false,
  	underscored: true,
  	tableName: 'bets'
  });
  return Bet;
};