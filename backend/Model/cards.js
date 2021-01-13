module.exports = (sequelize, Sequelize) => {

    const Cards = sequelize.define("commoncard", {

      cards_id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull:false
      },

       email:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {
            model: 'users', // 'persons' refers to table name
            key: 'email', // 'id' refers to column name in persons table
         }
       }
    
    });
    
    return Cards;
    
    };