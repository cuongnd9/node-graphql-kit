import { Sequelize } from 'sequelize'
import signale from 'signale'
import config from '../components/config'

const sequelize = new Sequelize({
  dialect: 'postgres',
  username: config.pgUser,
  password: config.pgPassword,
  database: config.pgDB,
  host: config.pgHost,
  port: config.pgPort,
  logging: config.nodeEnv === 'development' ? console.log : false,
  define: {
    underscored: true,
  }
})

sequelize
  .authenticate()
  .catch(e => {
    signale.watch(e)
    process.exit(1)
  })

export default sequelize
