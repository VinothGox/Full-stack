module.exports = (sequelize, Sequelize) => {

    const Product = sequelize.define("product", {

        item_id:{

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
    
    price: {
    
    type: Sequelize.STRING,
    allowNull:false
    
    },

    images:{
        
        type:Sequelize.STRING,
        allowNull:false

    },

    weight:{

        type:Sequelize.STRING,
        allowNull:false

    },

    rating:{
        type:Sequelize.STRING,
        allowNull:false

    },

    good:{

        type:Sequelize.STRING,
        allowNull:false
    },
   

    bad:{

        type:Sequelize.STRING,
        allowNull:false

    },
    category_id:{
        type:Sequelize.INTEGER,
        allowNull:false
    },

    
    });
    
    
    return Product;
    
    };