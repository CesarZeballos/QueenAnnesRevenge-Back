import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"

export interface IBotanic {
    name: string,
    size: number
}

export enum RecipeState {
    active = "active",
    disabled = "disabled"
}

@Entity({
    name: "recipes"
})
export class Recipes {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: String,
        length: 3
    })
    name: string

    @Column()
    nickname: string

    @Column({
        type: 'jsonb',
        nullable: true
    })
    vape: IBotanic[]

    @Column({
        type: 'jsonb',
        nullable: true
    })
    macerated: IBotanic[]

    @Column({ type: 'float' })
    abvMacerated: number

    @Column()
    time: number

    @Column({ type: 'float' })
    abvGin: number

    @Column()
    state: RecipeState

    // ACA VA LA VINCULACION CON LOS BATCHS:
    // @OneToMany(() => Batch, batch => batch.recipe)
    // batchId: Batch
}