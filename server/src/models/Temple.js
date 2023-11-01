module.exports = (sequelize, DataTypes) => {
    const Temple = sequelize.define('Temple', {
        name: DataTypes.STRING,
        address: DataTypes.STRING,
        coordinates: DataTypes.STRING,
        view_time: DataTypes.STRING,
        telephone: DataTypes.STRING,
        website: DataTypes.STRING
    })

    return Temple
}