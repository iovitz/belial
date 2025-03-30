import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
<<<<<<<< HEAD:pl-server/src/models/video.sqlite.ts
import { User } from './user.sqlite'
import { Comment } from './comment.sqlite'
========
import { User } from './user.entity'
import { Comment } from './comment.entity'
>>>>>>>> 5b13293966030935d3407521c57d19f18e816f6e:pl-server/src/models/video.entity.ts

@Entity('video')
export class Video {
  @PrimaryGeneratedColumn({
    name: 'id',
    comment: '自增主键',
  })
  id: number

  @Column({
    name: 'title',
    type: 'varchar',
    length: 50,
  })
  title: string

  @Column({
    name: 'cover',
    type: 'varchar',
    length: 50,
  })
  cover: string

  @Column({
    name: 'duration',
    type: 'int',
<<<<<<<< HEAD:pl-server/src/models/video.sqlite.ts
    length: 50,
========
>>>>>>>> 5b13293966030935d3407521c57d19f18e816f6e:pl-server/src/models/video.entity.ts
  })
  duration: number

  @Column({
    name: 'play_count',
    type: 'int',
<<<<<<<< HEAD:pl-server/src/models/video.sqlite.ts
    length: 50,
========
>>>>>>>> 5b13293966030935d3407521c57d19f18e816f6e:pl-server/src/models/video.entity.ts
  })
  playCount: number

  @Column({
    name: 'barrage_count',
    type: 'int',
<<<<<<<< HEAD:pl-server/src/models/video.sqlite.ts
    length: 50,
========
>>>>>>>> 5b13293966030935d3407521c57d19f18e816f6e:pl-server/src/models/video.entity.ts
  })
  barrageCount: number

  @OneToMany(() => Comment, comment => comment.video)
  comments: Comment

  @ManyToOne(() => User, user => user.videos)
  @JoinColumn({ name: 'author_id' })
  user: User

  @CreateDateColumn({
    name: 'created_at',
<<<<<<<< HEAD:pl-server/src/models/video.sqlite.ts
    type: 'date',
========
    type: 'timestamp',
>>>>>>>> 5b13293966030935d3407521c57d19f18e816f6e:pl-server/src/models/video.entity.ts
  })
  createdAt: Date

  @UpdateDateColumn({
    name: 'updated_at',
<<<<<<<< HEAD:pl-server/src/models/video.sqlite.ts
    type: 'date',
========
    type: 'timestamp',
>>>>>>>> 5b13293966030935d3407521c57d19f18e816f6e:pl-server/src/models/video.entity.ts
  })
  updatedAt: Date
}
