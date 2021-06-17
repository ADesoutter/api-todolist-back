// DataTypes est à importer dans chaque fichier de modèle
const {DataTypes} = require('sequelize');

module.exports = (sequelize) => sequelize.define('Task',{
    completed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    title: {
        type: DataTypes.TEXT, 
        allowNull: false 
    }
}, {
    tableName: 'task',
    underscored: true
})

