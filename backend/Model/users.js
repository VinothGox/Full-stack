module.exports = (sequelize, Sequelize) => {

    const User = sequelize.define("user", {

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
    
    password: {
    type: Sequelize.STRING,
    allowNull:false
    
    },

    role:{
        type:Sequelize.STRING,
        allowNull:false

    },

   

    
    });
    
    
    return User;
    
    };