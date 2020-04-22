module.exports = (sequelize, DataTypes) => {
	return sequelize.define('post', {
		title: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		text: {
			type: DataTypes.TEXT,
			allowNull: false
		}
	}, {
		paranoid: true,
	})
};