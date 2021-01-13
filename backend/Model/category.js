module.exports = (sequelize, Sequelize) => {

    const Category = sequelize.define("types", {

        category_id:{

            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
        },
    
    name: {
    type: Sequelize.STRING,
    unique:true,
    allowNull:false
    
    },
    

    images:{
        
        type:Sequelize.STRING,
        allowNull:false

    },

    details:{
        
        type:Sequelize.STRING,
        allowNull:false

    },

   

    rating:{
        type:Sequelize.STRING,
        allowNull:false

    },
    
    });
    
    
    return Category;
    
    };