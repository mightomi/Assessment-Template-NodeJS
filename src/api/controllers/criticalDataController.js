import { responder } from "../utils/index.js"

const criticalData = async (req, res, next) => {
  console.log('called criticalData')
  responder(res, {criticalDataKey1: "value", criticalDataKey2: "value2"})
}


export {
  criticalData
}
