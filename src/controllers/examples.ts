import { Request, Response } from 'express'
import HttpStatus from 'http-status-codes'

export const getExamples = (req: Request, res: Response) => {
  const data = [{ id: 1 }, { id: 2 }]

  res.status(HttpStatus.OK).json(data)
}

export const getExamplesById = (req: Request, res: Response) => {
  const { id } = req.params
  const data = { id }

  res.status(HttpStatus.OK).json(data)
}
