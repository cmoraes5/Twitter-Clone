import Router from '@koa/router'
import { PrismaClient } from '@prisma/client'


export const router = new Router()

const prisma = new PrismaClient()

router.get('/tweets', async ctx => {
    const tweets = await prisma.tweet.findMany()

    ctx.body = tweets
})

router.post('/tweets', async ctx => {
    const tweet = {
        userId: 'cl46fgnc800283wu9whiz8rwn',
        text: ctx.request.body.text
    }

    const doc = await prisma.tweet.create({
        data: tweet
    })


    ctx.body = doc
})
