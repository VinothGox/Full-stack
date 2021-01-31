module.exports = (sequelize, Sequelize) => {

    const User = sequelize.define("User", {

      user_id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull:false
      },

        
    username: {
    type: Sequelize.STRING,
    allowNull:false
    },
    
    email: {
    type: Sequelize.STRING,
    allowNull:false,
    primaryKey: true
    },
    
    imageurl:{
      type:Sequelize.STRING,
      allowNull:false
    }

    
    });
    
    
    return User;
    
    };