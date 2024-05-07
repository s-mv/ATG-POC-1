module.exports = (sequelize, DataTypes) => sequelize.define("Company", {
    company_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    country: DataTypes.STRING,
    website: DataTypes.STRING,
    email: DataTypes.STRING,
    verified: DataTypes.BOOLEAN
});
