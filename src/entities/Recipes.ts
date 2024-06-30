import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"

@Entity({
    name: "recipes"
})
export class Recipes {
    @PrimaryGeneratedColumn()
    id: number = 0

    @Column()
    name: string = ""

    @Column()
    nickname: string = ""

    @Column({
        type: 'jsonb',
        nullable: true
    })
    vape: {name: string; size: number}[] = []

    @Column({
        type: 'jsonb',
        nullable: true
    })
    macerated: {name: string; size: number}[] = []

    @Column()
    abvMacerated: number = 0

    @Column()
    time: number = 0

    @Column()
    abvGin: number = 0

    @Column()
    state: boolean = true

    // ACA VA LA VINCULACION CON LOS BATCHS:
    // @OneToMany(() => Batch, batch => batch.recipe)
    // batchId: Batch
}