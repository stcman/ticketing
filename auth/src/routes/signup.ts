import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { runAllChains } from 'express-validator/lib/utils';

const router = express.Router();

router.post('/api/users/signup', [ 
  //defines middleware for this route
  body('email')
    .isEmail()
    .withMessage('Email must be valid.'),
  body('password')
    .trim()
    .isLength({min:4, max: 20})
    .withMessage('Password must be between 4 and 2 characters.')
],
(req: Request, res: Response): any => {

  const errors = validationResult(req);

  if(!errors.isEmpty()){
    return res.status(400).send(errors.array());
  }

  const { email, password } = req.body;

  console.log(`Creating a user...`);

  res.send({});
});

export { router as signupRouter };