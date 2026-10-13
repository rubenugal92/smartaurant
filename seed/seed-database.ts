import prisma from '../lib/prisma.ts'
import { products } from './product.seed.ts';
import { siteReviews } from './site-reviews.seed.ts';

const seedDatabase = async() =>{
    //Purgar base de datos

await prisma.siteReview.deleteMany();
await prisma.product.deleteMany();
    //Insertar registros

await prisma.siteReview.createMany({
    data:siteReviews

    })

await prisma.product.createMany({
    data:products

    })
    
}

seedDatabase()