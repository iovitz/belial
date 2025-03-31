import type { Application } from '@midwayjs/koa'
import type { Octokit } from 'octokit'
import { App, Provide } from '@midwayjs/core'
import * as octokit from 'octokit'

@Provide()
export class GithubService {
  @App('koa')
  private app: Application

  private _octokitClient: octokit.Octokit

  get octokitClient(): Octokit {
    if (!this._octokitClient) {
      this._octokitClient = new octokit.Octokit({
        auth: this.app.getConfig('github.token'),
      })
    }
    return this._octokitClient
  }

  getCommitList(owner: string, repo: string, per_page: number, page: number) {
    return this.octokitClient
      .request('GET /repos/{owner}/{repo}/commits', {
        owner,
        repo,
        per_page,
        page,
      })
      .then(({ data }) => data)
  }
}
