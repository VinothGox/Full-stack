module.exports = (sequelize, Sequelize) => {

    const Card = sequelize.define("addtocard", {

      card_id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull:false
      },

        item_id:{

            type: Sequelize.INTEGER,
            allowNull:false,
            references: {
                model: 'products', 
                key: 'item_id', 
             }
        },
        cards_id:{

            type: Sequelize.INTEGER,
            allowNull:false,
            references: {
                model: 'cards', 
                key: 'cards_id', 
             }
        },
    
    title: {
    
    type: Sequelize.STRING,
   
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
    quantity:{
        type:Sequelize.INTEGER,
        allowNull:false
    }

    
    });
    
    
    return Card;
    
    };