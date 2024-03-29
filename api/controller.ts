import fs from 'fs/promises'
import {IMeter, IMeterInput, IMeterShort} from "./interfaces";
import * as path from "path";


const db = path.join(__dirname, 'db.json')

export async function create(meter: IMeterInput) {
  const json:any = await fs.readFile(db)
  const data = JSON.parse(json)

  const newMeter: IMeter = {
    ...meter,
    usages: 0,
    id: data.length + 1
  }
  data.push(newMeter)

  await fs.writeFile(db, JSON.stringify(data))
  return {
    id: newMeter.id,
    address: newMeter.address
  }
}

export async function getAll() {
  const json: any = await fs.readFile(db)
  const data = JSON.parse(json)
  return data.map((item: IMeter): IMeterShort => ({
    id: item.id,
    address: item.address
  }))
}

export async function getOne(id: number) {
  const json:any = await fs.readFile(db)
  const data = JSON.parse(json)

  return data.find((item: IMeter) => item.id === id)
}

export async function status(id: number, status: boolean) {
  const json:any = await fs.readFile(db)
  const data = JSON.parse(json)

  const meter: IMeter = data.find((item: IMeter) => item.id === id)
  meter.isEnabled = status

  await fs.writeFile(db, JSON.stringify(data))
  return meter
}

export async function use(id: number) {
  const json:any = await fs.readFile(db)
  const data = JSON.parse(json)

  const meter: IMeter = data.find((item: IMeter) => item.id === id)
  meter.usages++

  await fs.writeFile(db, JSON.stringify(data))
  return meter
}
