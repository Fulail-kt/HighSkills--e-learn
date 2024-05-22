import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('course')
export class Course {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    title: string;

    @Column({ type: 'text' })
    description: string;

    @Column({ type: 'varchar', length: 255 })
    instructor: string;

    @Column({ type: 'varchar', length: 255 })
    category: string;

    @Column({ type: 'decimal', precision: 5, scale: 2 })
    price: number;

    @Column({ type: 'boolean', default: false })
    isPublished: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
