
// Uncomment this and 'Product' entity for One-To-Many & Many-To-One relationship

// import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
// import { Product } from "./Product";

// @Entity()
// export class Company {
//     @PrimaryGeneratedColumn()
//         id: number;

//     @Column()
//         name: string;

//     @Column()
//         description: string;

//     @OneToMany(() => Product, (product) => product.company, { cascade: true })
//     products: Product[]
// }