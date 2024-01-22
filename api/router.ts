import express from "express";
import {create, getAll, getOne, status, use} from "./controller";

const router = express.Router()

router.post('/meters/create', async (req, res) => {
  res.send(await create(req.body))
})

router.get('/meters', async (req, res) => {
  res.send(await getAll())
})

router.get('/meters/:id', async (req, res) => {
  res.send(await getOne(Number(req.params.id)))
})

router.put('/meters/:id/status', async (req, res) => {
  res.send(await status(Number(req.params.id), req.body.status))
})

router.put('/meters/:id/use', async (req, res) => {
  res.send(await use(Number(req.params.id)))
})

export default router
