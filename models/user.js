module.exports = (sequelize, DataTypes) => {
	return sequelize.define('user', {
		name: {
			type: DataTypes.STRING(20),
			allowNull: false,
			unique: true,
		},
		nick: {
			type: DataTypes.STRING(20),
			allowNull: false,
			unique: true,
		}
	}, {
		paranoid: true,
	})
};