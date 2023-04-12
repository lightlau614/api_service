module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("User", {
      User_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      UserName: {
        type: Sequelize.STRING
      },
      Password: {
        type: Sequelize.STRING
      },
      EmailAddress: {
        type: Sequelize.STRING
      },
      TelNumber: {
        type: Sequelize.STRING
      },
      Address: {
        type: Sequelize.TEXT('long')
      },
      Role: {
        type: Sequelize.STRING
      },
      FirstName: {
        type: Sequelize.STRING
      },
      LastName: {
        type: Sequelize.STRING
      },
      Active: {
        type: Sequelize.BOOLEAN
      },
      Subscibed: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    },{
      freezeTableName: true,
    });

    return User;
  };