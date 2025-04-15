import { Provide } from '@midwayjs/core'
import { DAOService } from './crud'
import { VideoTag } from '../models/video-tag.entity'
import { InjectEntityModel } from '@midwayjs/typeorm'
import { Repository } from 'typeorm'

@Provide()
export class VideoTagService extends DAOService<VideoTag> {
  @InjectEntityModel(VideoTag)
  entity: Repository<VideoTag>
}
