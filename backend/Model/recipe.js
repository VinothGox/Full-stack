module.exports = (sequelize, Sequelize) => {

    const Recipe = sequelize.define("recepi", {

        recepi_id:{

            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
        },
    
    title: {
    type: Sequelize.STRING,
    unique:true,
    allowNull:false
    },
    
    description: {
    type: Sequelize.STRING,
    allowNull:false
    },

    images:{
        type:Sequelize.STRING,
        allowNull:false
    },


    rating:{
        type:Sequelize.STRING,
        allowNull:false

    },

    time:{

        type:Sequelize.STRING,
        allowNull:false
    },
    });
    
    
    return Recipe;
    
    };