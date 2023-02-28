export interface IBusService{
  routeCode: string,
  routeMnemonic: string,
  companyId: number,
  stopId: number,
  serviceId: number,
  serviceMnemonic: string,
  predictionType: string,
  activeVehicles: number,
  scheduledVehicles: number,
  messages: TMessage[]
  vehicles: TVehicle[],
	hasRealTime: boolean
}

type TMessage = {
  text: string,
  ts: number,
  companyId: number,
  companyType: string,
  companyName: string
}

type TVehicle = {
  plate: string,
  prefix: number,
  wheelchair: boolean,
  climatized: boolean,
  prediction: number,
  age: number,
  type: string
}

export interface IApiData {
  services: IBusService[]
}