import type { GithubService } from '../service/github.service'
import type { GetCommitListDTO } from './dto'
import { Controller, Get, Inject } from '@midwayjs/core'
import { ApiTags } from '@midwayjs/swagger'

@ApiTags('Github更新')
@Controller('/api/github')
export class HomeController {
  @Inject()
  github: GithubService

  @Get('/commit-list')
  async getCommitList(params: GetCommitListDTO) {
    const list = await this.github.getCommitList(
      params.owner,
      params.repo,
      params.page,
      params.per_page,
    )
    return list
  }
}
